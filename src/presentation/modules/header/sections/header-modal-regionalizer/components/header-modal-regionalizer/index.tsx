import React from 'react';
import { HeaderModalRegionalizerContainer, ModalIconButton } from './styles';
import { useAppDispatch } from '@hooks/storeHooks';
import { setOpenModalRegionalizer } from '@store/regionalizer/slices/regionalizer-slice';
import { AiOutlineClose } from 'react-icons/ai';

const HeaderModalRegionalizer = () => {
  const dispatch = useAppDispatch();

  return (
    <HeaderModalRegionalizerContainer>
      <ModalIconButton
        onClick={() => dispatch(setOpenModalRegionalizer(false))}
      >
        <AiOutlineClose size={20} />
      </ModalIconButton>
    </HeaderModalRegionalizerContainer>
  );
};

export default HeaderModalRegionalizer;
