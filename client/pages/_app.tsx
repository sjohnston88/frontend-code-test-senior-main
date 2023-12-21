import { BasketProvider } from "../contexts/BasketContext";
import { useBasketContext } from "../hooks/useBasketContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BasketModal } from "../components/BasketModal";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const Application = ({ Component, pageProps }: AppProps) => {
  const { isBasketOpen } = useBasketContext();

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      {isBasketOpen && <BasketModal />}
    </>
  );
};

const WithProviders = (props: AppProps) => {
  return (
    <BasketProvider>
      <Application {...props} />
    </BasketProvider>
  );
};

export default WithProviders;
