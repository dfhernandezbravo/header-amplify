import { useEffect } from 'react';
import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '@hooks/storeHooks';
import { AddressProps } from './address-selected';
import { setAddressSelected } from '@store/regionalizer/slices/regionalizer-slice';
import Mobile from '@components/layout/mobile';
import { YourLocationText } from './styles';

const AddressSelectedMobile = ({ address }: AddressProps) => {
  const { addressSelected } = useAppSelector((state) => state.regionalizer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (address) dispatch(setAddressSelected(address));
  }, [address, dispatch]);

  if (!addressSelected) {
    return (
      <Mobile>
        <YourLocationText>Tu ubicación</YourLocationText>
        <Image
          src="/icons/general/chevron-right.svg"
          width={10}
          height={10}
          alt="chevron-right"
        />
      </Mobile>
    );
  }

  return (
    <Mobile>
      <strong>{addressSelected?.neighborhood ?? addressSelected?.state}</strong>
    </Mobile>
  );
};

export default AddressSelectedMobile;
