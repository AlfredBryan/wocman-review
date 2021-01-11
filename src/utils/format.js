export const formatAsMoney = (amount, locale = "en-NG", currency = "NGN") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
};
