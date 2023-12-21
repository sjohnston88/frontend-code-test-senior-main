import Image from "next/image";
import { useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import styles from "./ProductCard.module.css";
import localeStrings from "./strings.en-GB.json";

interface ProductCardProps {
  id: ProductData["id"];
  name: ProductData["name"];
  power: ProductData["power"];
  quantity: ProductData["quantity"];
  price: ProductData["price"];
  img_url: ProductData["img_url"];
}

const ProductCard = ({
  id,
  name,
  power,
  quantity,
  price,
  img_url,
}: ProductCardProps) => {
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleIncrement = () => {
    if (currentQuantity < 10) {
      setCurrentQuantity((previousQuantity) => previousQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (currentQuantity > 1) {
      setCurrentQuantity((previousQuantity) => previousQuantity - 1);
    }
  };

  const handleAddToBasket = () => {
    window.alert("Not Implemented!");
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={img_url}
          layout="responsive"
          width="600"
          height="600"
        />
      </div>
      <div>
        <h1>{name}</h1>
        <p className={styles.detail}>
          {power} // {localeStrings.quantityPlural} {quantity}
        </p>
        <div className={styles.container}>
          <span className={styles.price}>{formatPrice(price / 100)}</span>

          <div className={styles.quantityContainer}>
            {localeStrings.quantity}
            <div className={styles.quantity}>
              <button
                title={localeStrings.decrement}
                className={styles.quantityButton}
                disabled={currentQuantity === 1}
                onClick={handleDecrement}
              >
                -
              </button>
              <span
                title={localeStrings.currentQuantity}
                className={styles.currentQuantityContainer}
              >
                {currentQuantity}
              </span>
              <button
                title={localeStrings.increment}
                className={styles.quantityButton}
                disabled={currentQuantity === 10}
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button className={styles.button} onClick={handleAddToBasket}>
          {localeStrings.callToAction}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
