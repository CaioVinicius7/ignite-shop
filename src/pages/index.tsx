import Image from "next/future/image";

import tshirt1 from "../assets/t-shirts/1.png";
import tshirt2 from "../assets/t-shirts/2.png";
import { HomeContainer, Product } from "../styles/pages/home";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tshirt1} width={520} height={480} alt="t-shirt" />

        <footer>
          <strong> Camiseta X </strong>
          <span> R$ 79,90 </span>
        </footer>
      </Product>
      <Product>
        <Image src={tshirt2} width={520} height={480} alt="t-shirt" />

        <footer>
          <strong> Camiseta X </strong>
          <span> R$ 79,90 </span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
