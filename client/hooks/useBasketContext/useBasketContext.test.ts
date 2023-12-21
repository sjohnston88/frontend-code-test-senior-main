import { renderHook } from "@testing-library/react-hooks";
import { useBasketContext } from ".";

test("returns the correct context values", () => {
  const { result } = renderHook(() => useBasketContext());

  expect(result.current).toEqual({
    addToBasket: expect.any(Function),
    basket: [],
    basketTotal: 0,
  });
});
