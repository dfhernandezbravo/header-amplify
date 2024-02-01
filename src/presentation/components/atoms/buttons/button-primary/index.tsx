import React, { ButtonHTMLAttributes } from 'react';
import { Button, ButtonContainer } from './styles';

interface Props
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  isLoading?: boolean;
}

const ButtonPrimary: React.FC<Props> = ({ title, isLoading, ...rest }) => {
  return (
    <ButtonContainer isLoading={isLoading ?? false}>
      <Button className="custom-btn" {...rest} ref={null}>
        {title}
      </Button>
    </ButtonContainer>
  );
};

export default ButtonPrimary;
