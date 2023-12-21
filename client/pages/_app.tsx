import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default Application;
