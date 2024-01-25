import Desktop from '@components/layout/desktop';
import { AddressShoppingCart } from '@entities/shopping-cart/shopping-cart.entity';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setAddressSelected } from '@store/regionalizer/slices/regionalizer-slice';
import { useEffect } from 'react';
import { ContainerDesktop } from './styles';

export interface AddressProps {
  address: AddressShoppingCart | null;
}

const AddressSelected = ({ address }: AddressProps) => {
  const { addressSelected } = useAppSelector((state) => state.regionalizer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (address) dispatch(setAddressSelected(address));
  }, [address, dispatch]);

  if (!addressSelected) {
    return (
      <Desktop>
        <ContainerDesktop>
          <p>Ingresa</p>
          <strong>Tu ubicación</strong>
        </ContainerDesktop>
      </Desktop>
    );
  }

  return (
    <Desktop>
      <ContainerDesktop>
        <p>Entrega en</p>
        <strong>
          {addressSelected?.neighborhood ?? addressSelected?.city}
        </strong>
      </ContainerDesktop>
    </Desktop>
  );
};

export default AddressSelected;
