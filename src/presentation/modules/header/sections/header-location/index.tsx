import React from 'react';
import Image from 'next/image';
import { RegionalizerContainer } from './styles';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setOpenModalRegionalizer } from '@store/regionalizer/slices/regionalizer-slice';

const HeaderLocation = () => {
  const { addressSelected } = useAppSelector((state) => state.regionalizer);
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(setOpenModalRegionalizer(true));
  };

  return (
    <RegionalizerContainer onClick={handleOnClick}>
      <Image
        src="https://easycl.vtexassets.com/arquivos/white-location-icon.svg"
        width={19}
        height={25}
        alt="Location Icon"
      />
      <div>
        <p>¿Dónde entregar tu compra?</p>
        {addressSelected ? (
          <strong>{addressSelected.city}</strong>
        ) : (
          <p>Ingresa tu ubicación</p>
        )}
      </div>
    </RegionalizerContainer>
  );
};

export default HeaderLocation;
