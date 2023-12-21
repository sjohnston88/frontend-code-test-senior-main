export type BasketItem = {
  id: string;
  name: string;
  quantity: number;
  img_url: string;
};

export type BasketContextReturn = {
  basket: BasketItem[];
  basketTotal: number;
  isBasketOpen: boolean;
  addToBasket: (product: BasketItem) => void;
  openBasketModal: () => void;
  closeBasketModal: () => void;
};

export type BasketState = {
  basket: BasketItem[];
  basketTotal: number;
  isBasketOpen: boolean;
};
