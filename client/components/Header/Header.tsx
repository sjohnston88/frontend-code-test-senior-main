import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import localeStrings from "./strings.en-GB.json";

const Header = () => {
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
      <button className={styles.basketIconButton}>
        <Image
          src="/basket.svg"
          alt={localeStrings.basketAltText}
          width="32"
          height="32"
        />
      </button>
    </div>
  );
};

export default Header;
