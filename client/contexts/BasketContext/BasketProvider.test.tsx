import { render } from "@testing-library/react";
import { useBasketContext } from "../../hooks/useBasketContext";
import { BasketProvider, defaultFunction } from "./BasketProvider";
import { BasketContextReturn } from "./types";

test("returns the full context", () => {
  let result: BasketContextReturn;

  const TestComponent = () => {
    result = useBasketContext();
    return null;
  };

  render(
    <BasketProvider>
      <TestComponent />
    </BasketProvider>
  );

  expect(result).toEqual({
    addToBasket: expect.any(Function),
    basket: [],
    basketTotal: 0,
    closeBasketModal: expect.any(Function),
    isBasketOpen: false,
    openBasketModal: expect.any(Function),
  });
});

test("adds a product to the basket", () => {
  let result: BasketContextReturn;

  const TestComponent = () => {
    result = useBasketContext();
    return null;
  };

  render(
    <BasketProvider>
      <TestComponent />
    </BasketProvider>
  );

  result.addToBasket({
    id: "1",
    img_url: "/example.jpg",
    name: "Item 1",
    quantity: 2,
  });

  expect(result.basket).toEqual([
    { id: "1", img_url: "/example.jpg", name: "Item 1", quantity: 2 },
  ]);
  expect(result.basketTotal).toEqual(2);
});

test("opens the modal", () => {
  let result: BasketContextReturn;

  const TestComponent = () => {
    result = useBasketContext();
    return null;
  };

  render(
    <BasketProvider>
      <TestComponent />
    </BasketProvider>
  );

  result.openBasketModal();

  expect(result.isBasketOpen).toBe(true);
});

test("closes the modal", () => {
  let result: BasketContextReturn;

  const TestComponent = () => {
    result = useBasketContext();
    return null;
  };

  render(
    <BasketProvider>
      <TestComponent />
    </BasketProvider>
  );

  result.closeBasketModal();

  expect(result.isBasketOpen).toBe(false);
});
