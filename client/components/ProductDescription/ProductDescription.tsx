import localeStrings from "./strings.en-GB.json";
import styles from "./ProductDescription.module.css";

interface ProductDescriptionProps {
  description: ProductData["description"];
}

const ProductDescription = ({ description }: ProductDescriptionProps) => {
  return (
    <div className={styles.description}>
      <h3>{localeStrings.heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductDescription;
