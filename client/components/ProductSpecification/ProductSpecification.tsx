import localeStrings from "./strings.en-GB.json";
import styles from "./ProductSpecification.module.css";

interface ProductDescriptionProps {
  brand: ProductData["brand"];
  weight: ProductData["weight"];
  dimensions: `${ProductData["height"]} x ${ProductData["width"]} x ${ProductData["length"]}`;
  model_code: ProductData["model_code"];
  colour: ProductData["colour"];
}

const ProductSpecification = (props: ProductDescriptionProps) => {
  return (
    <div className={styles.specification}>
      <h3>{localeStrings.heading}</h3>
      <table>
        <tbody>
          {Object.entries(localeStrings.productSpecifications).map(
            ([key, value]) => {
              return (
                <tr key={value}>
                  <td>{value}</td>
                  <td>{props[key]}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductSpecification;
