import Link from "next/link";
import Image from "next/image";
import { useBasketContext } from "../../hooks/useBasketContext";
import styles from "./Header.module.css";
import localeStrings from "./strings.en-GB.json";

const Header = () => {
  const { basketTotal, openBasketModal } = useBasketContext();

  const handleOpenBasket = () => {
    if (basketTotal > 0) {
      openBasketModal();
    }
  };

  return (
    <div className={styles.header}>
      <Link href="/">
        <Image
          src="/octopus-logo.svg"
          alt={localeStrings.logoAltText}
          width="200"
          height="45"
        />
      </Link>
      <button className={styles.basketIconButton} onClick={handleOpenBasket}>
        <Image
          src="/basket.svg"
          alt={localeStrings.basketAltText}
          width="32"
          height="32"
        />
        {basketTotal > 0 && (
          <span
            className={styles.basketTotalIcon}
            title={localeStrings.basketCount}
          >
            {basketTotal}
          </span>
        )}
      </button>
    </div>
  );
};

export default Header;
