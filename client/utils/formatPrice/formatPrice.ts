const formatPrice = new Intl.NumberFormat("en-GB", {
  currency: "GBP",
  style: "currency",
}).format;

export default formatPrice;
