import { ProductCard } from "../../components/ProductCard";
import { ProductDescription } from "../../components/ProductDescription";
import { ProductSpecification } from "../../components/ProductSpecification";

export interface ProductPageProps {
  product: ProductData;
}

const ProductPage = ({ product }: ProductPageProps) => {
  return (
    <div>
      <ProductCard
        id={product.id}
        name={product.name}
        power={product.power}
        quantity={product.quantity}
        price={product.price}
        img_url={product.img_url}
      />
      <ProductDescription description={product.description} />
      <ProductSpecification
        brand={product.brand}
        weight={product.weight}
        dimensions={`${product.height} x ${product.width} x ${product.length}`}
        model_code={product.model_code}
        colour={product.colour}
      />
    </div>
  );
};

export default ProductPage;
