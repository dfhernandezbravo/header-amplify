import { AddressShoppingCart } from '@entities/shopping-cart/shopping-cart.entity';
import { useAppDispatch } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import { closeCategories } from '@store/category/slices/category-slice';
import Image from 'next/image';
import { useContext } from 'react';
import AddressSelected from './components/address-selected/address-selected';
import PopupRegionalizer from './components/popup-regionalizer';
import HeaderLocationContext from './context/header-location-context';
import { ButtonRegionalizer, RegionalizerContainer } from './styles';
import AddressSelectedMobile from './components/address-selected/address-selected-mobile';

interface Props {
  addressSelected: AddressShoppingCart | null;
}

const HeaderLocationContainer = ({ addressSelected }: Props) => {
  const { sendEventAnalytics } = useAnalytics();
  const dispatch = useAppDispatch();
  const { isUserLogged, onOpenModal } = useContext(HeaderLocationContext);

  const handleOnClickRegionalizer = () => {
    dispatch(closeCategories());
    onOpenModal();
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones componente regionalizador',
      action: 'Click selección ingresa tu ubicación',
      tag: isUserLogged ? 'Usuario Logeado' : 'Usuario Guest',
    });
  };

  return (
    <RegionalizerContainer>
      <ButtonRegionalizer onClick={handleOnClickRegionalizer}>
        <Image
          src="/icons/header/location-icon.svg"
          width={18}
          height={22}
          alt="Location Icon"
        />
        <AddressSelected address={addressSelected} />
        <AddressSelectedMobile address={addressSelected} />
      </ButtonRegionalizer>
      {!addressSelected && (
        <PopupRegionalizer onClick={handleOnClickRegionalizer} />
      )}
    </RegionalizerContainer>
  );
};

export default HeaderLocationContainer;
