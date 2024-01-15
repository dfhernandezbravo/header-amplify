import { CancelButtonContainer } from './styles';

interface Props {
  onClick: () => void;
}

const CancelButton = ({ onClick }: Props) => {
  return (
    <CancelButtonContainer onClick={onClick}>Cancelar</CancelButtonContainer>
  );
};

export default CancelButton;
