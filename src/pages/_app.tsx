import { AppProps } from "next/app";

import logoImg from "../assets/logo.svg";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="Logo" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
