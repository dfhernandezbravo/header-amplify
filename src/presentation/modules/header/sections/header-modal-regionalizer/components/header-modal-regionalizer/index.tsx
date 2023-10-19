import HeaderLocationContext from '@modules/header/sections/header-location/context/header-location-context';
import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HeaderModalRegionalizerContainer, ModalIconButton } from './styles';

interface Props {
  title?: string;
}

const HeaderModalRegionalizer = ({ title }: Props) => {
  const { onCloseModal } = useContext(HeaderLocationContext);

  return (
    <HeaderModalRegionalizerContainer>
      <ModalIconButton onClick={onCloseModal}>
        <AiOutlineClose size={20} />
      </ModalIconButton>
      <h3>{title}</h3>
    </HeaderModalRegionalizerContainer>
  );
};

export default HeaderModalRegionalizer;
