import { fireEvent, render, screen } from "@testing-library/react";
import * as useBasketContextModule from "../../hooks/useBasketContext/useBasketContext";
import localeStrings from "./strings.en-GB.json";
import { ProductCard } from ".";

jest.mock("../../hooks/useBasketContext/useBasketContext");

const mockAddToBasket = jest.fn();
useBasketContextModule.default.mockReturnValue({
  addToBasket: mockAddToBasket,
});

const mockProps = {
  id: "1",
  name: "Energy saving light bulb",
  power: "25W",
  price: 1299,
  quantity: 4,
  img_url: "https://i.ibb.co/2nzwxnQ/bulb.png",
};

test("renders the product information", () => {
  render(<ProductCard {...mockProps} />);
  expect(screen.getByText(localeStrings.callToAction)).toBeVisible();
  expect(screen.getByText(mockProps.name)).toBeVisible();
  expect(screen.getByText("25W // Packet of 4")).toBeVisible();
  expect(screen.getByText("£12.99")).toBeVisible();
});

test("cannot use negative quantity", () => {
  render(<ProductCard {...mockProps} />);

  fireEvent.click(screen.getByTitle(localeStrings.decrement));

  expect(screen.getByTitle(localeStrings.decrement)).toBeDisabled();
  expect(screen.getByTitle(localeStrings.currentQuantity)).toHaveTextContent(
    "1"
  );
});

test("cannot use more than 10 quantity", () => {
  render(<ProductCard {...mockProps} />);

  fireEvent.click(screen.getByTitle(localeStrings.increment));
  fireEvent.click(screen.getByTitle(localeStrings.increment));
  fireEvent.click(screen.getByTitle(localeStrings.increment));
  fireEvent.click(screen.getByTitle(localeStrings.increment));
  fireEvent.click(screen.getByTitle(localeStrings.increment));
  fireEvent.click(screen.getByTitle(localeStrings.increment));
  fireEvent.click(screen.getByTitle(localeStrings.increment));
  fireEvent.click(screen.getByTitle(localeStrings.increment));
  fireEvent.click(screen.getByTitle(localeStrings.increment));

  expect(screen.getByTitle(localeStrings.increment)).toBeDisabled();
  expect(screen.getByTitle(localeStrings.currentQuantity)).toHaveTextContent(
    "10"
  );
});

test("adds products to the cart", () => {
  render(<ProductCard {...mockProps} />);

  fireEvent.click(screen.getByText(localeStrings.callToAction));

  expect(mockAddToBasket).toHaveBeenCalledTimes(1);
  expect(mockAddToBasket).toHaveBeenCalledWith({
    id: "1",
    img_url: "https://i.ibb.co/2nzwxnQ/bulb.png",
    name: "Energy saving light bulb",
    quantity: 1,
  });
});
