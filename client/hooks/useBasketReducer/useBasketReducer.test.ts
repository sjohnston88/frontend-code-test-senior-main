import { useBasketReducer } from ".";

test("handles adding a product", () => {
  const state = useBasketReducer(
    { basket: [], basketTotal: 0, isBasketOpen: false },
    {
      type: "ADD_PRODUCT",
      payload: {
        id: "1",
        img_url: "https://i.ibb.co/2nzwxnQ/bulb.png",
        name: "Energy saving light bulb",
        quantity: 1,
      },
    }
  );

  expect(state).toEqual({
    basket: [
      {
        id: "1",
        img_url: "https://i.ibb.co/2nzwxnQ/bulb.png",
        name: "Energy saving light bulb",
        quantity: 1,
      },
    ],
    basketTotal: 1,
    isBasketOpen: true,
  });
});

test("handles opening the modal", () => {
  const state = useBasketReducer(
    { basket: [], basketTotal: 0, isBasketOpen: false },
    { type: "OPEN_MODAL" }
  );

  expect(state).toEqual({
    basket: [],
    basketTotal: 0,
    isBasketOpen: true,
  });
});

test("handles closing the modal", () => {
  const state = useBasketReducer(
    { basket: [], basketTotal: 0, isBasketOpen: true },
    { type: "CLOSE_MODAL" }
  );

  expect(state).toEqual({
    basket: [],
    basketTotal: 0,
    isBasketOpen: false,
  });
});

test("handles unknown actions", () => {
  const state = useBasketReducer(
    { basket: [], basketTotal: 0, isBasketOpen: true },
    { type: "UNKNOWN" }
  );

  expect(state).toEqual({
    basket: [],
    basketTotal: 0,
    isBasketOpen: true,
  });
});
