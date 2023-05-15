/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image';
import Search from '../../organisms/search';
import { useEffect, useState } from 'react';
import { CartItemModel } from '@/store/cart/cart.type';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import {
  HeaderBottom,
  HeaderCart,
  HeaderContainer,
  HeaderContent,
  HeaderLeft,
  HeaderLink,
  HeaderRight,
  HeaderTop,
  HeaderTopItem,
  MenuCategories,
  MenuLocation,
  UserLogin,
} from './header.styles';
import Cart from '@/components/atoms/cartButton';
import useEventListener from '@/hooks/eventListenerHooks';
import cartSlice from '@/store/cart';
import { customDispatchEvent } from '@/store/events/dispatchEvents';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import Link from 'next/link';

const Header = () => {
  // hooks
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const { width } = useWindowDimensions();

  // states
  const [quantityOnCart, setQuantityOnCart] = useState<number>(0);

  // constants
  const topBrands = [
    {
      name: 'Paris',
      image:
        'https://easycl.vtexassets.com/_v/public/assets/v1/published/easycl.custom-blocks@4.0.21/public/react/413f160b9c794687fdf789913dd18663.svg',
      link: 'https://www.paris.cl',
    },
    {
      name: 'Jumbo',
      image:
        'https://easycl.vtexassets.com/_v/public/assets/v1/published/easycl.custom-blocks@4.0.21/public/react/4a7dba45da83e507aa4c3480aaf4eb06.svg',
      link: 'https://www.jumbo.cl',
    },
    {
      name: 'Santa Isabel',
      image:
        'https://easycl.vtexassets.com/_v/public/assets/v1/published/easycl.custom-blocks@4.0.21/public/react/be6020963789abdcaf77e3778631e150.svg',
      link: 'https://www.santaisabel.cl/',
    },
    {
      name: 'Mundo experto',
      link: 'https://mundoexperto.cl/',
    },
    {
      name: 'Puntos Cencosud',
      link: 'https://www.puntoscencosud.cl/puntos/',
    },
    {
      name: 'Tarjeta Cencosud',
      link: 'https://www.santaisabel.cl/',
    },
    {
      name: 'Centro de ayuda',
      link: 'https://ayuda.easy.cl/',
    },
    {
      name: 'Mis compras',
      link: 'https://ayuda.easy.cl/ayuda/transacciones',
    },
    {
      name: 'Tiendas',
      link: 'https://www.easy.cl/tiendas',
    },
  ];
  const logoURL =
    'https://easycl.vtexassets.com/assets/vtex.file-manager-graphql/images/97740859-8d6b-4562-ad02-d6fd37c14e32___bab6e437e21af76315174bd3b460d74a.svg';
  const { setAddProductInCart, setRemoveProductInCart } = cartSlice.actions;

  // methods
  const methods = {
    initialize: () => {
      if (typeof window !== 'undefined') {
        useEventListener(
          document,
          'ADD_PRODUCT_IN_CART',
          methods.handleAddNewProductEvent
        );
        useEventListener(
          document,
          'REMOVE_PRODUCT_FROM_CART',
          methods.handleRemoveProductEvent
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
        0
      )
    );
  }, [cartItems]);

  const HandleSelectLocation = (e: React.MouseEvent<HTMLElement>) =>{
    e.preventDefault();
  };

  return (
    <HeaderContainer>
      <HeaderTop
        data-hidden={width < 1026}
      >
        {topBrands.map((brand) => (
          <HeaderTopItem key={brand.name}>
            <HeaderLink
              aria-label={`${brand.name} link`}
              href={brand.link}
              target='_blank'
              image={brand.image}
            >
              {!brand.image && brand.name}
            </HeaderLink>
          </HeaderTopItem>
        ))}
      </HeaderTop>
      <HeaderContent>

        <HeaderLeft>
          <Link className='logo' href="https://www.easy.cl/">
            <Image
              src={logoURL}
              alt='Easy'
              width={60}
              height={60}
              title='Easy Home'
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
              alt='Location Icon'
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
              alt='User Icon'
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

      </HeaderContent>
      <HeaderBottom>
        <div>
          <a href='/tiendas'>Horarios y tiendas</a>
        </div>
        <div>
          <span>
            Todo <strong>Easy.cl</strong> hasta en{' '}
            <strong>6 cuotas sin interés</strong>
          </span>
          <Image
            src='https://easycl.vteximg.com.br/arquivos/medios-pago2.svg'
            width='113'
            height='21'
            alt=''
          />
        </div>
      </HeaderBottom>
    </HeaderContainer>
  );
};
export default Header;
