import React, { useContext } from 'react';
import { HeaderModalRegionalizerContainer, ModalIconButton } from './styles';
import { useAppDispatch } from '@hooks/storeHooks';
import { setOpenModalRegionalizer } from '@store/regionalizer/slices/regionalizer-slice';
import { AiOutlineClose } from 'react-icons/ai';
import HeaderLocationContext from '@modules/header/sections/header-location/context/header-location-context';

interface Props {
  title?: string;
}

const HeaderModalRegionalizer = ({ title }: Props) => {
  const { onCloseModal } = useContext(HeaderLocationContext)

  return (
    <HeaderModalRegionalizerContainer>
      <ModalIconButton
        onClick={onCloseModal}
      >
        <AiOutlineClose size={20} />
      </ModalIconButton>
      <h3>{title}</h3>
    </HeaderModalRegionalizerContainer>
  );
};

export default HeaderModalRegionalizer;
