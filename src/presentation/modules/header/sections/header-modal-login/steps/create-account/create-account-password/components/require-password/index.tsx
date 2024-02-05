import Image from 'next/image';
import { Container, ValidatorContainer } from './styles';
import { PasswordFormat } from '../../types';

interface RequirePasswordProps {
  validator: PasswordFormat;
}
interface ValidatorProps {
  text: string;
  isValid: boolean;
}

const RequirePassword = ({ validator }: RequirePasswordProps) => {
  const Validator = ({ text, isValid }: ValidatorProps) => {
    return (
      <ValidatorContainer isValid={isValid}>
        <Image
          src={
            isValid
              ? '/icons/general/check-green.svg'
              : '/icons/general/close-circle-red.svg'
          }
          alt=""
          width={20}
          height={20}
        />
        <p>{text}</p>
      </ValidatorContainer>
    );
  };

  return (
    <Container>
      <Validator
        text={validator.hasMinLength.text}
        isValid={validator.hasMinLength.isValid}
      />
      <Validator
        text={validator.hasUppercase.text}
        isValid={validator.hasUppercase.isValid}
      />
      <Validator
        text={validator.hasLowercase.text}
        isValid={validator.hasLowercase.isValid}
      />
      <Validator
        text={validator.hasNumber.text}
        isValid={validator.hasNumber.isValid}
      />
    </Container>
  );
};

export default RequirePassword;
