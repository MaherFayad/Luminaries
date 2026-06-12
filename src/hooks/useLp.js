import { useNavigate, useLocation } from "react-router-dom";

const getLang = (pathname) =>
  pathname.startsWith("/ar") ? "ar" : "en";

/** Returns a path-builder that prepends the current language prefix if it's not English */
export const useLp = () => {
  const { pathname } = useLocation();
  const lang = getLang(pathname);
  return (path) => lang === "ar" ? `/ar${path}` : path;
};

/** Returns a navigate function that prepends the current language prefix if it's not English */
export const useLn = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const lang = getLang(pathname);
  return (path, options) => navigate(lang === "ar" ? `/ar${path}` : path, options);
};
