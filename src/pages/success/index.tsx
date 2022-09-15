import Link from "next/link";

import { ImageContainer, SuccessContainer } from "../../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Caio Vinícius</strong>, sua
        <strong> camiseta Beyond the Limits </strong> já está a caminha da sua
        casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
