import { fireEvent, render, screen } from "@testing-library/react";
import * as useBasketContextModule from "../../hooks/useBasketContext/useBasketContext";
import localeStrings from "./strings.en-GB.json";
import { Header } from ".";

jest.mock("next/link", () => ({ children, ...rest }) => (
  <a {...rest}>{children}</a>
));

jest.mock("../../hooks/useBasketContext/useBasketContext");

const mockOpenBasketModal = jest.fn();

jest.mocked(useBasketContextModule.default).mockReturnValue({
  basket: [],
  closeBasketModal: jest.fn(),
  basketTotal: 0,
  isBasketOpen: false,
  addToBasket: jest.fn(),
  openBasketModal: mockOpenBasketModal,
}); 

test("renders the company logo", () => {
  render(<Header />);

  expect(screen.getByAltText(localeStrings.logoAltText)).toBeVisible();
  expect(screen.getByRole("link")).toHaveAttribute("href", "/");
});

test("renders the basket icon", () => {
  render(<Header />);

  expect(screen.getByAltText(localeStrings.basketAltText)).toBeVisible();
});

test("does not open modal when basket is empty", () => {
  render(<Header />);

  fireEvent.click(screen.getByAltText(localeStrings.basketAltText));

  expect(mockOpenBasketModal).not.toHaveBeenCalled();
});

test("opens modal when basket is populated", () => {
  jest.mocked(useBasketContextModule.default).mockReturnValue({
    basket: [
      { id: "1", img_url: "/example.jpg", name: "Item 1", quantity: 2 },
      { id: "2", img_url: "/example2.jpg", name: "Item 2", quantity: 1 },
    ],
    closeBasketModal: jest.fn(),
    basketTotal: 3,
    isBasketOpen: false,
    addToBasket: jest.fn(),
    openBasketModal: mockOpenBasketModal,
  }); 
  render(<Header />);

  fireEvent.click(screen.getByTitle(localeStrings.basketCount));

  expect(mockOpenBasketModal).toHaveBeenCalled();
});
