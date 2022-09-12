import { useRouter } from "next/router";

import {
  ImageContainer,
  ProductContainer,
  ProductDetails
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1> Camiseta X </h1>
        <span> R$ 79,90 </span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          consequuntur eligendi doloremque modi et. Molestiae cupiditate quod
          aspernatur impedit, debitis, ducimus hic reprehenderit quam porro
          similique animi commodi doloremque nam.
        </p>

        <button> Comprar Agora </button>
      </ProductDetails>
    </ProductContainer>
  );
}
