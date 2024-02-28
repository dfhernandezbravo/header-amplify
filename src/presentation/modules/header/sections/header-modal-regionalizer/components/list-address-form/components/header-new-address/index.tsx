import Image from 'next/image';
import { HeaderNewAddressContainer } from '../../styles';

type Step = 'list-address' | 'new-address';

interface Props {
  setStep: (value: Step) => void;
  onCloseModal: () => void;
}

const HeaderNewAddress = ({ setStep, onCloseModal }: Props) => (
  <HeaderNewAddressContainer>
    <div className="image-title-container">
      <Image
        src="/icons/general/left-arrow-gray.svg"
        width={16}
        height={16}
        alt="left-arrow"
        onClick={() => setStep('list-address')}
      />
      <h3 className="newaddress-title">Ingresa tu ubicación</h3>
    </div>
    <div>
      <Image
        src="/icons/general/close-icon-gray.svg"
        width={16}
        height={16}
        alt="close-icon"
        onClick={() => onCloseModal()}
      />
    </div>
  </HeaderNewAddressContainer>
);

export default HeaderNewAddress;
