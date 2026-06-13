/**
 * Pre-render script: crawls the built SPA with Puppeteer and saves
 * each route as a standalone index.html file, producing a directory
 * structure that works on any shared hosting (public_html).
 *
 * Usage: node prerender.mjs
 */

import { launch } from "puppeteer";
import { createServer } from "http";
import { readFileSync, mkdirSync, writeFileSync, cpSync } from "fs";
import { join, extname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIST = join(__dirname, "dist");
const OUT = join(__dirname, "dist-static");
const PORT = 4173;

// All routes to pre-render
const ROUTES = [
  "/",
  "/services",
  "/services/it-outsourcing",
  "/services/recruitment",
  "/services/professional",
  "/industries",
  "/industries/banking",
  "/industries/fintech",
  "/industries/government",
  "/industries/software",
  "/about",
  "/contactus",
  "/showcase",
];

// Mime types for the static server
const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".json": "application/json",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};

// Simple static file server that serves dist/ and falls back to index.html (SPA)
function startServer() {
  return new Promise((res) => {
    const server = createServer((req, _res) => {
      let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);
      try {
        const data = readFileSync(filePath);
        const ext = extname(filePath);
        _res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
        _res.end(data);
      } catch {
        // SPA fallback
        const data = readFileSync(join(DIST, "index.html"));
        _res.writeHead(200, { "Content-Type": "text/html" });
        _res.end(data);
      }
    });
    server.listen(PORT, () => {
      console.log(`  Static server on http://localhost:${PORT}`);
      res(server);
    });
  });
}

async function prerender() {
  console.log("\n🚀 Pre-rendering started\n");

  // 1. Start local server
  const server = await startServer();

  // 2. Launch headless browser
  const browser = await launch({ headless: true, args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // 3. Copy assets directory to output
  mkdirSync(OUT, { recursive: true });
  cpSync(join(DIST, "assets"), join(OUT, "assets"), { recursive: true });

  // 4. Pre-render each route
  for (const route of ROUTES) {
    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 15000,
      });

      // Wait a bit for animations to settle
      await new Promise((r) => setTimeout(r, 800));

      // Get the fully rendered HTML
      let html = await page.content();

      // Create directory structure: /about → dist-static/about/index.html
      const dir = join(OUT, route);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, "index.html"), html, "utf-8");

      console.log(`  ✓ ${route}`);
    } catch (err) {
      console.error(`  ✗ ${route} — ${err.message}`);
    }
  }

  // 5. Copy .htaccess for Apache fallback (optional safety net)
  writeFileSync(
    join(OUT, ".htaccess"),
    `# Enable gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml
</IfModule>

# Cache static assets for 1 year (hashed filenames)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
</IfModule>

# Custom 404 page
ErrorDocument 404 /index.html
`
  );

  await browser.close();
  server.close();

  console.log(`\n✅ Done! Static site exported to: ${OUT}`);
  console.log("   Upload the contents of dist-static/ to your public_html/\n");
}

prerender().catch((err) => {
  console.error("Pre-render failed:", err);
  process.exit(1);
});
