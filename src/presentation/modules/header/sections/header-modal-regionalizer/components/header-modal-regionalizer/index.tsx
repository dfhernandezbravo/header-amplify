import HeaderLocationContext from '@modules/header/sections/header-location/context/header-location-context';
import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HeaderModalRegionalizerContainer, ModalIconButton } from './styles';
import { useAppSelector } from '@hooks/storeHooks';
import ErrorMessage from '@components/atoms/error-message';

interface Props {
  title?: string;
}

const HeaderModalRegionalizer = ({ title }: Props) => {
  const { onCloseModal } = useContext(HeaderLocationContext);
  const { errorSetLocation } = useAppSelector((state) => state.regionalizer);

  return (
    <HeaderModalRegionalizerContainer>
      <div className="modal-header">
        <p className="title">{title}</p>
        <ModalIconButton onClick={onCloseModal}>
          <AiOutlineClose size={20} />
        </ModalIconButton>
      </div>
      {errorSetLocation && (
        <ErrorMessage
          title="Error al actualizar ubicación"
          description="Inténtalo nuevamente"
        />
      )}
    </HeaderModalRegionalizerContainer>
  );
};

export default HeaderModalRegionalizer;
