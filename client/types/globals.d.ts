export {};

declare global {
  type ProductData = {
    id: string;
    name: string;
    power: string;
    description: string;
    price: number;
    quantity: number;
    brand: string;
    weight: number;
    height: number;
    width: number;
    length: number;
    model_code: string;
    colour: string;
    img_url: string;
  };
}
