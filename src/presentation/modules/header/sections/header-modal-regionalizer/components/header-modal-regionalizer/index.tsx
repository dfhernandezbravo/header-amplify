import { HeaderModalRegionalizerContainer } from './styles';
import { useAppSelector } from '@hooks/storeHooks';
import ErrorMessage from '@components/atoms/error-message-tooltip';

interface Props {
  title?: string;
}

const HeaderModalRegionalizer = ({ title }: Props) => {
  const { errorSetLocation } = useAppSelector((state) => state.regionalizer);

  return (
    <HeaderModalRegionalizerContainer>
      <div className="modal-header center">
        <p className="title">{title}</p>
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
