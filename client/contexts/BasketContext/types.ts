export type BasketItem = {
  id: string;
  name: string;
  quantity: number;
  img_url: string;
};

export type BasketContextReturn = {
  basket: BasketItem[];
  basketTotal: number;
  addToBasket: (product: BasketItem) => void;;
};

export type BasketState = {
  basket: BasketItem[];
  basketTotal: number;
};
