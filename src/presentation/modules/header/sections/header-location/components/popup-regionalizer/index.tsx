import ButtonPrimary from '@components/atoms/buttons/button-primary';
import Desktop from '@components/layout/desktop';
import { AiOutlineClose } from 'react-icons/ai';
import {
  Arrow,
  ModalIconButton,
  PopupContainer,
  PopupDescription,
  PopupWrapper,
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
    <Desktop>
      <PopupContainer>
        <PopupWrapper>
          <Arrow />
          <PopupDescription>
            <div className="header">
              <p>Selecciona una ubicación</p>
              <ModalIconButton onClick={handleOnClose}>
                <AiOutlineClose size={20} />
              </ModalIconButton>
            </div>
            <span>Y conoce la disponibilidad de productos</span>
          </PopupDescription>
          <ButtonPrimary title="Ingresa ubicación" onClick={onClick} />
        </PopupWrapper>
      </PopupContainer>
    </Desktop>
  );
};

export default PopupRegionalizer;
