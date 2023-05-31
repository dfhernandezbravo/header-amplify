/* eslint-disable react-hooks/rules-of-hooks */
import Cart from '@components/atoms/cartButton';
import useEventListener from '@hooks/eventListenerHooks';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useWindowDimensions from '@hooks/useWindowDimensions';
import cartSlice from '@store/cart';
import { CartItemModel } from '@store/cart/cart.type';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  HeaderBottom,
  HeaderCart,
  HeaderContainer,
  HeaderContent,
  HeaderLeft,
  HeaderRight,
  MenuCategories,
  MenuLocation,
  UserLogin,
} from './styles/header.styles';
import HeaderTopSection from './sections/header-top/header-top';
import Search from './sections/search';

const breackpoint = 1026;

const logoURL =
  'https://easycl.vtexassets.com/assets/vtex.file-manager-graphql/images/97740859-8d6b-4562-ad02-d6fd37c14e32___bab6e437e21af76315174bd3b460d74a.svg';

const Header = () => {
  // hooks
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const { width } = useWindowDimensions();

  // states
  const [quantityOnCart, setQuantityOnCart] = useState<number>(0);

  const { setAddProductInCart, setRemoveProductInCart } = cartSlice.actions;

  // methods
  const methods = {
    initialize: () => {
      if (typeof window !== 'undefined') {
        useEventListener(
          document,
          'ADD_PRODUCT_IN_CART',
          methods.handleAddNewProductEvent,
        );
        useEventListener(
          document,
          'REMOVE_PRODUCT_FROM_CART',
          methods.handleRemoveProductEvent,
        );
      }
    },
    handleAddNewProductEvent: (event: Event) => {
      event.preventDefault();
      const customEvent = event as CustomEvent;
      dispatch(setAddProductInCart(customEvent.detail));
    },
    handleRemoveProductEvent: (event: Event) => {
      event.preventDefault();
      const customEvent = event as CustomEvent;
      dispatch(setRemoveProductInCart(customEvent.detail));
    },
    handleOnClickCart: () => {
      console.log('dispatch TOGGLE_CART_ASIDE');
      customDispatchEvent({
        name: 'TOGGLE_CART_ASIDE',
        detail: { open: true },
      });
    },
  };
  methods.initialize();

  // on load cart
  useEffect(() => {
    setQuantityOnCart(
      cartItems?.reduce(
        (acc: number, cur: CartItemModel) => acc + (cur?.quantity || 0) || 0,
        0,
      ),
    );
  }, [cartItems]);

  const HandleSelectLocation = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <HeaderContainer>
      <HeaderTopSection />
      <HeaderContent>
        {width < 1026 ? (
          <>
            <HeaderLeft>
              <MenuCategories data-mobile="true">
                <div className="menuHamburg">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>Menú</p>
              </MenuCategories>
              <Link className="logo" href="https://www.easy.cl/">
                <Image
                  src={logoURL}
                  alt="Easy"
                  width={50}
                  height={50}
                  title="Easy Home"
                />
              </Link>
            </HeaderLeft>

            <HeaderRight data-mobile={width < breackpoint}>
              <UserLogin>
                <div>
                  <p>Inicia sesión</p>
                </div>
              </UserLogin>
              <HeaderCart>
                <Cart
                  quantity={quantityOnCart}
                  onClick={methods.handleOnClickCart}
                />
              </HeaderCart>
            </HeaderRight>
          </>
        ) : (
          <>
            <HeaderLeft>
              <Link className="logo" href="https://www.easy.cl/">
                <Image
                  src={logoURL}
                  alt="Easy"
                  width={60}
                  height={60}
                  title="Easy Home"
                />
              </Link>
              <MenuCategories>
                <div className="menuHamburg">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>Categorías</p>
              </MenuCategories>
              <MenuLocation>
                <Image
                  src="https://easycl.vtexassets.com/arquivos/white-location-icon.svg"
                  width={19}
                  height={25}
                  alt="Location Icon"
                />
                <div>
                  <p>¿Dónde entregar tu compra?</p>
                  <p onClick={HandleSelectLocation}>Ingresa tu ubicación</p>
                </div>
              </MenuLocation>
            </HeaderLeft>

            <Search />

            <HeaderRight>
              <UserLogin>
                <Image
                  src="https://easycl.vtexassets.com/arquivos/new-desktop-user-icon.svg"
                  width={25}
                  height={25}
                  alt="User Icon"
                />
                <div>
                  <p>¡Hola!</p>
                  <p>Inicia sesión</p>
                </div>
              </UserLogin>
              <HeaderCart>
                <Cart
                  quantity={quantityOnCart}
                  onClick={methods.handleOnClickCart}
                />
              </HeaderCart>
            </HeaderRight>
          </>
        )}
      </HeaderContent>
      {width < breackpoint ? <Search /> : <></>}
      <HeaderBottom>
        <div>
          <a href="/tiendas">Horarios y tiendas</a>
        </div>
        <div>
          <span>
            Todo <strong>Easy.cl</strong> hasta en{' '}
            <strong>6 cuotas sin interés</strong>
          </span>
          <Image
            src="https://easycl.vteximg.com.br/arquivos/medios-pago2.svg"
            width="113"
            height="21"
            alt=""
          />
        </div>
      </HeaderBottom>
    </HeaderContainer>
  );
};
export default Header;
