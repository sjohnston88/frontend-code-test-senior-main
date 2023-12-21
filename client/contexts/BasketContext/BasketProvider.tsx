import { useReducer, createContext } from "react";
import { useBasketReducer } from "../../hooks/useBasketReducer";
import type { BasketContextReturn, BasketItem } from ".";

export const initialBasketContext = {
  basket: [],
  basketTotal: 0,
  isBasketOpen: false,
  addToBasket: () => null,
  openBasketModal: () => null,
  closeBasketModal: () => null,
};

export const initialBasketState = {
  basket: [],
  basketTotal: 0,
  isBasketOpen: false,
};

export const BasketContext =
  createContext<BasketContextReturn>(initialBasketContext);

export const BasketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(useBasketReducer, initialBasketState);

  const addToBasket = (product: BasketItem) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  const openBasketModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  const closeBasketModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <BasketContext.Provider
      value={{
        basket: state.basket,
        basketTotal: state.basketTotal,
        isBasketOpen: state.isBasketOpen,
        addToBasket,
        openBasketModal,
        closeBasketModal,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
