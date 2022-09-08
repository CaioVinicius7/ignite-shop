import { AppProps } from "next/app";
import Image from "next/future/image";

import logoImg from "../assets/logo.svg";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="Logo" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
