import localeStrings from "./strings.en-GB.json";
import styles from "./Footer.module.css";

const Footer = () => {
  return <div className={styles.footer}>{localeStrings.footer}</div>;
};

export default Footer;
