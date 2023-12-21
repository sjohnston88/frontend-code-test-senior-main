import { formatPrice } from ".";

test("formats numbers to GBP", () => {
  const price = 1999 / 100;
  const formattedPrice = formatPrice(price);
  expect(formattedPrice).toEqual("£19.99");
});
