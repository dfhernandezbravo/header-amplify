import Image from 'next/image';
import { Container } from './styles';

interface ErrorMessageProps {
  title: string;
  description: string;
}

const ErrorMessage = ({ title, description }: ErrorMessageProps) => {
  return (
    <Container>
      <div>
        <Image
          src="/icons/general/error-icon-red.svg"
          width={20}
          height={20}
          alt="error-icon"
          className="error-icon"
        />
      </div>
      <div>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
    </Container>
  );
};

export default ErrorMessage;
