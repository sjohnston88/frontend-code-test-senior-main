import { fireEvent, render, screen } from "@testing-library/react";
import * as useBasketContextModule from "../../hooks/useBasketContext/useBasketContext";
import localeStrings from "./strings.en-GB.json";
import { Header } from ".";

jest.mock("next/link", () => ({ children, ...rest }) => (
  <a {...rest}>{children}</a>
));

jest.mock("../../hooks/useBasketContext/useBasketContext");

const mockOpenBasketModal = jest.fn();
useBasketContextModule.default.mockReturnValue({
  basketTotal: 0,
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
  useBasketContextModule.default.mockReturnValue({
    basketTotal: 3,
    openBasketModal: mockOpenBasketModal,
  });
  render(<Header />);

  fireEvent.click(screen.getByTitle(localeStrings.basketCount));

  expect(mockOpenBasketModal).toHaveBeenCalled();
});
