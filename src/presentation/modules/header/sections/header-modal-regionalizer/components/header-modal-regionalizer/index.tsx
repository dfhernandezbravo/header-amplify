import { useContext } from 'react';
import Image from 'next/image';
import HeaderLocationContext from '@modules/header/sections/header-location/context/header-location-context';
import { HeaderModalRegionalizerContainer, ModalIconButton } from './styles';
import { useAppSelector } from '@hooks/storeHooks';
import ErrorMessage from '@components/atoms/error-message-tooltip';

interface Props {
  title?: string;
  renderIcon?: boolean;
}

const HeaderModalRegionalizer = ({ title, renderIcon = true }: Props) => {
  const { onCloseModal } = useContext(HeaderLocationContext);
  const { errorSetLocation } = useAppSelector((state) => state.regionalizer);

  const Icon = () =>
    renderIcon ? (
      <ModalIconButton onClick={onCloseModal}>
        <Image
          src="/icons/general/close-icon-gray.svg"
          width={16}
          height={16}
          alt="close-icon"
        />
      </ModalIconButton>
    ) : null;

  return (
    <HeaderModalRegionalizerContainer>
      <div className="modal-header">
        <p className="title">{title}</p>
        <Icon />
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
