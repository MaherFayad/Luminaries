export const premiumAppear = {
  initial: { opacity: 0, y: 70 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
};

export const fastAppear = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: "easeOut" },
};
