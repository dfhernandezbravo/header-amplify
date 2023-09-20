import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setAddressSelected } from '@store/regionalizer/slices/regionalizer-slice';
import React, { useEffect } from 'react';

interface Props {
  address: AddressShoppingCart | null;
}

const AddressSelected = ({ address }: Props) => {
  const { addressSelected } = useAppSelector((state) => state.regionalizer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (address) dispatch(setAddressSelected(address));
  }, [address, dispatch]);

  return (
    <div>
      <p>¿Dónde entregar tu compra?</p>
      {addressSelected ? (
        <strong>{addressSelected.city}</strong>
      ) : (
        <p>Ingresa tu ubicación</p>
      )}
    </div>
  );
};

export default AddressSelected;
