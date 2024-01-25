import React from 'react';
import { ButtonBackContainer } from './styles';
import { IoIosArrowBack } from 'react-icons/io';

interface Props {
  onClick: () => void;
}

const ButtonBack = ({ onClick }: Props) => {
  return (
    <ButtonBackContainer onClick={onClick}>
      <IoIosArrowBack size={20} color="#485760" />
      Volver
    </ButtonBackContainer>
  );
};

export default ButtonBack;
