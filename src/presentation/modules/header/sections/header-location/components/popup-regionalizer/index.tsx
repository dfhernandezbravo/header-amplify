import ButtonPrimary from '@components/atoms/buttons/button-primary';
import Desktop from '@components/layout/desktop';
import Mobile from '@components/layout/mobile';
import { AiOutlineClose } from 'react-icons/ai';
import {
  Arrow,
  ModalIconButton,
  PopupContainer,
  PopupDescription,
  PopupWrapper,
  Title,
  Subtitle,
} from './styles';
import { useCookies } from 'react-cookie';

interface Props {
  onClick: () => void;
}

const PopupRegionalizer = ({ onClick }: Props) => {
  const [cookie, setCookie] = useCookies();

  const handleOnClose = () => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);

    setCookie('popup-regionalizer', false, {
      expires: expirationDate,
    });
  };

  if (cookie['popup-regionalizer']) return null;

  return (
    <PopupContainer>
      <PopupWrapper>
        <Arrow />
        <PopupDescription>
          <div className="header">
            <Title>
              <Desktop>Selecciona una ubicación</Desktop>
              <Mobile>
                Selecciona tu ubicación para conocer la disponibilidad de
                productos
              </Mobile>
            </Title>
            <ModalIconButton onClick={handleOnClose}>
              <AiOutlineClose size={24} />
            </ModalIconButton>
          </div>
          <Desktop>
            <Subtitle>Y conoce la disponibilidad de productos</Subtitle>
          </Desktop>
        </PopupDescription>
        <Desktop>
          <ButtonPrimary title="Ingresar ubicación" onClick={onClick} />
        </Desktop>
      </PopupWrapper>
    </PopupContainer>
  );
};

export default PopupRegionalizer;
