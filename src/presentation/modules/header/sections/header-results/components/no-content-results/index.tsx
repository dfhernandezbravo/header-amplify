import Image from 'next/image';
import { Container, ContainerIcon, ContainerText } from './no-content-styles';

const NoContentResults = () => {
  return (
    <Container>
      <ContainerIcon>
        <Image
          width={68}
          height={68}
          src="/icons/header/no-content.svg"
          priority
          alt="Sin sugerencias"
        />
      </ContainerIcon>
      <ContainerText>
        <h4>Sin sugerencias</h4>
        <p>
          Revisa si tu búsqueda está bien escrita, intenta con otro término o
          navega entre las categorías.
        </p>
      </ContainerText>
    </Container>
  );
};

export default NoContentResults;
