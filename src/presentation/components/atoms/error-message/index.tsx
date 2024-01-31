import { useEffect } from 'react';
import { useAppDispatch } from '@hooks/storeHooks';
import Image from 'next/image';
import { Container, ErrorText } from './styles';
import { setError } from '@store/error/slices/error-slice';
interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setError(null));
    }, 10000);
  }, []);

  return (
    <Container>
      <Image
        src="/icons/general/error-icon-red.svg"
        alt="error"
        width={20}
        height={20}
      />
      <ErrorText>{message}</ErrorText>
    </Container>
  );
};

export default ErrorMessage;
