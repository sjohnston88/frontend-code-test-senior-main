import { useReducer, createContext } from "react";
import { useBasketReducer } from "../../hooks/useBasketReducer";
import type { BasketContextReturn, BasketItem } from ".";

export const initialBasketContext = {
  basket: [],
  basketTotal: 0,
  addToBasket: () => null,
};

export const initialBasketState = {
  basket: [],
  basketTotal: 0,
};

export const BasketContext =
  createContext<BasketContextReturn>(initialBasketContext);

export const BasketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(useBasketReducer, initialBasketState);

  const addToBasket = (product: BasketItem) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  return (
    <BasketContext.Provider
      value={{
        basket: state.basket,
        basketTotal: state.basketTotal,
        addToBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
