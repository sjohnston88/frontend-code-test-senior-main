import { BasketProvider } from "../contexts/BasketContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const Application = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
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
