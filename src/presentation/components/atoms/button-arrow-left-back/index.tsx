import React from 'react';

import { ButtonBackContainer } from './styles';
import ArrowLeftBackIcon from '@components/icons/ArrowLeftBackIcon';

interface Props {
  onClick: () => void;
}

const ButtonArrowLeftBack = ({ onClick }: Props) => {
  return (
    <ButtonBackContainer onClick={onClick}>
      <ArrowLeftBackIcon />
    </ButtonBackContainer>
  );
};

export default ButtonArrowLeftBack;
