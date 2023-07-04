import React, { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';

interface Props
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
}

const ButtonPrimary: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <Button {...rest} ref={null}>
      {title}
    </Button>
  );
};

export default ButtonPrimary;
