import React from 'react';
import { ButtonBackContainer } from './styles';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

interface Props {
  onClick: () => void;
}

const ButtonBack = ({ onClick }: Props) => {
  return (
    <ButtonBackContainer onClick={onClick}>
      <MdOutlineKeyboardArrowLeft size={30} />
      <span>Volver</span>
    </ButtonBackContainer>
  );
};

export default ButtonBack;
