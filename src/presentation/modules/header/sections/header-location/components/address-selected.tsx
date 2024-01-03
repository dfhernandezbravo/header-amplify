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

  if (!addressSelected) {
    return (
      <div>
        <p>Ingresa</p>
        <strong>Tu ubicación</strong>
      </div>
    );
  }

  return (
    <div>
      <p>Entrega en</p>
      <strong>{addressSelected?.neighborhood ?? addressSelected?.state}</strong>
    </div>
  );
};

export default AddressSelected;
