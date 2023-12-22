import { render, screen, fireEvent } from "@testing-library/react";
import localeStrings from "./strings.en-GB.json";
import * as useBasketContextModule from "../../hooks/useBasketContext/useBasketContext";
import { BasketModal } from ".";

jest.mock("../../hooks/useBasketContext/useBasketContext");

const mockCloseBasketModal = jest.fn();

jest.mocked(useBasketContextModule.default).mockReturnValue({
  basket: [
    { id: "1", img_url: "/example.jpg", name: "Item 1", quantity: 2 },
    { id: "2", img_url: "/example2.jpg", name: "Item 2", quantity: 1 },
  ],
  closeBasketModal: mockCloseBasketModal,
  basketTotal: 3,
  isBasketOpen: false,
  addToBasket: jest.fn(),
  openBasketModal: jest.fn(),
}); 

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders a basket modal", () => {
  render(<BasketModal />);
  expect(screen.getByText(localeStrings.heading)).toBeVisible();
  expect(screen.getByText(localeStrings.callToAction)).toBeVisible();
  expect(screen.getAllByRole("listitem")).toHaveLength(2);
  expect(screen.getAllByRole("listitem")[0]).toHaveTextContent("Item 1 x 2");
  expect(screen.getAllByRole("listitem")[1]).toHaveTextContent("Item 2 x 1");
});

test("calls the close handler", () => {
  render(<BasketModal />);
  fireEvent.click(screen.getByTitle("Close"));
  expect(mockCloseBasketModal).toHaveBeenCalledTimes(1);
});

test("calls the checkout handler", () => {
  window.alert = jest.fn();

  render(<BasketModal />);
  fireEvent.click(screen.getByText(localeStrings.callToAction));
  expect(window.alert).toHaveBeenCalledTimes(1);
});
