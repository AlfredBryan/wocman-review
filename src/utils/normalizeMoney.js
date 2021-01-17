
export const normalizeMoney = (value) => {
  const formatter = new Intl.NumberFormat("en-NG", {
    notation: "compact",
    compactDisplay: "short",
    style: "currency",
    currency: "NGN",
  });

  return formatter.format(value);
};
