import Image from "next/image";
import { useBasketContext } from "../../hooks/useBasketContext";
import localeStrings from "./strings.en-GB.json";
import styles from "./BasketModal.module.css";

const BasketModal = () => {
  const { basket, closeBasketModal } = useBasketContext();

  const handleCheckout = () => {
    window.alert("Not implemented");
  };

  const handleCloseModal = () => {
    closeBasketModal();
  };

  return (
    <div className={styles.basket}>
      <div className={styles.header}>
        <h3>{localeStrings.heading}</h3>
        <button
          className={styles.closeButton}
          onClick={handleCloseModal}
          title={localeStrings.close}
        >
          X
        </button>
      </div>
      <ul className={styles.basketItems}>
        {basket.length &&
          basket.map((item, index) => (
            <li key={item.name + index} className={styles.basketDetail}>
              <Image src={item.img_url} width={64} height={64} />
              <div>
                {item.name} <br /> x {item.quantity}
              </div>
            </li>
          ))}
      </ul>
      <button className={styles.button} onClick={handleCheckout}>
        {localeStrings.callToAction}
      </button>
    </div>
  );
};

export default BasketModal;
