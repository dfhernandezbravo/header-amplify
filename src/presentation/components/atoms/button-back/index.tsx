import React from 'react';
import { ButtonBackContainer } from './styles';
import { AiOutlineArrowLeft } from 'react-icons/ai';

interface Props {
  onClick: () => void;
}

const ButtonBack = ({ onClick }: Props) => {
  return (
    <ButtonBackContainer onClick={onClick}>
      <AiOutlineArrowLeft size={24} />
    </ButtonBackContainer>
  );
};

export default ButtonBack;
