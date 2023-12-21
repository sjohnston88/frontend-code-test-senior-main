import { useContext } from "react";
import { BasketContext } from "../../contexts/BasketContext";

const useBasketContext = () => {
  const context = useContext(BasketContext);
  return context;
};

export default useBasketContext;
