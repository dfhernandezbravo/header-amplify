import React from 'react';
import { HeaderModalRegionalizerContainer, ModalIconButton } from './styles';
import { useAppDispatch } from '@hooks/storeHooks';
import { setOpenModalRegionalizer } from '@store/regionalizer/slices/regionalizer-slice';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
  title?: string;
}

const HeaderModalRegionalizer = ({ title }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <HeaderModalRegionalizerContainer>
      <ModalIconButton
        onClick={() => dispatch(setOpenModalRegionalizer(false))}
      >
        <AiOutlineClose size={20} />
      </ModalIconButton>
      <h3>{title}</h3>
    </HeaderModalRegionalizerContainer>
  );
};

export default HeaderModalRegionalizer;
