import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import { setOpenModalRegionalizer } from '@store/regionalizer/slices/regionalizer-slice';
import { openCategories } from '@store/category/slices/category-slice';
import { RegionalizerContainer } from './styles';

const HeaderLocation = () => {
  const { addressSelected } = useAppSelector((state) => state.regionalizer);
  const { isLogged } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const { sendEventAnalytics } = useAnalytics();

  const handleOnClick = () => {
    dispatch(openCategories(false));
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones componente regionalizador',
      action: 'Click selección ingresa tu ubicación',
      tag: isLogged ? 'Usuario Logeado' : 'Usuario Guest',
    });
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
