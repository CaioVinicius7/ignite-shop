import { useKeenSlider } from "keen-slider/react";
import Image from "next/future/image";

import tshirt1 from "../assets/t-shirts/1.png";
import tshirt2 from "../assets/t-shirts/2.png";
import tshirt3 from "../assets/t-shirts/3.png";
import tshirt4 from "../assets/t-shirts/4.png";
import { HomeContainer, Product } from "../styles/pages/home";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.75,
      spacing: 48
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={tshirt1} width={520} height={480} alt="t-shirt" />

        <footer>
          <strong> Camiseta X </strong>
          <span> R$ 79,90 </span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tshirt2} width={520} height={480} alt="t-shirt" />

        <footer>
          <strong> Camiseta X </strong>
          <span> R$ 79,90 </span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tshirt3} width={520} height={480} alt="t-shirt" />

        <footer>
          <strong> Camiseta X </strong>
          <span> R$ 79,90 </span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tshirt4} width={520} height={480} alt="t-shirt" />

        <footer>
          <strong> Camiseta X </strong>
          <span> R$ 79,90 </span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
