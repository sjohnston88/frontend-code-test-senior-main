import { fetchGraphQL } from "../../graphql";

const getProductQuery = `
  query Product($id: ID!) {
    Product(id: $id) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      model_code
      colour
      img_url
    }
  }
` as string;

async function useProductQuery(id: string): Promise<ProductData> {
  const data = await fetchGraphQL(getProductQuery, { id });
  return data.Product;
}

export default useProductQuery;
