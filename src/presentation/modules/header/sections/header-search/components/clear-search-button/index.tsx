import Image from 'next/image';
import { Container } from './styles';

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement>;
};
const ClearSearchButton = (props: Props) => {
  const { setSearch, inputRef } = props;

  const handleClick = () => {
    setSearch('');
    setTimeout(() => {
      inputRef?.current?.focus();
    }, 100);
  };

  return (
    <Container id="clean-search" onClick={handleClick}>
      <Image
        width={16}
        height={16}
        src="/icons/general/close-icon.svg"
        alt="clean-icon"
        priority
      />
    </Container>
  );
};

export default ClearSearchButton;
