import { useAppDispatch } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import { openCategories } from '@store/category/slices/category-slice';
import Image from 'next/image';
import { useContext } from 'react';
import AddressSelected from './components/address-selected';
import HeaderLocationContext from './context/header-location-context';
import { RegionalizerContainer } from './styles';

interface Props {
  addressSelected: AddressShoppingCart | null;
}

const HeaderLocationContainer = ({ addressSelected }: Props) => {
  const { sendEventAnalytics } = useAnalytics();
  const dispatch = useAppDispatch();
  const { isUserLogged, onOpenModal } = useContext(HeaderLocationContext);

  const handleOnClickRegionalizer = () => {
    dispatch(openCategories(false));
    onOpenModal();
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones componente regionalizador',
      action: 'Click selección ingresa tu ubicación',
      tag: isUserLogged ? 'Usuario Logeado' : 'Usuario Guest',
    });
  };

  return (
    <RegionalizerContainer onClick={handleOnClickRegionalizer}>
      <Image
        src="https://easycl.vtexassets.com/arquivos/white-location-icon.svg"
        width={19}
        height={25}
        alt="Location Icon"
      />
      <AddressSelected address={addressSelected} />
    </RegionalizerContainer>
  );
};

export default HeaderLocationContainer;
