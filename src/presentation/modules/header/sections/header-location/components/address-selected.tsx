import { AddressShoppingCart } from '@entities/shopping-cart/shopping-cart.entity';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setAddressSelected } from '@store/regionalizer/slices/regionalizer-slice';
import { useEffect } from 'react';

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
        <span>Ingresa tu ubicación</span>
      )}
    </div>
  );
};

export default AddressSelected;
