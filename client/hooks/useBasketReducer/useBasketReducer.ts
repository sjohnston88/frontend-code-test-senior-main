import { Reducer, ReducerAction } from "react";
import type { BasketState } from "../../contexts/BasketContext";

const useBasketReducer = (
  state: BasketState,
  action: ReducerAction<Reducer<any, any>>
) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        basket: [...state.basket, action.payload],
        basketTotal: state.basketTotal + action.payload.quantity,
      };
    default:
      return state;
  }
};

export default useBasketReducer;
