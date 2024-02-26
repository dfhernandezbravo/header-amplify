//import useWindowDimensions from '@hooks/useWindowDimensions';
import { BadgeQuantity, CartContainer } from './cartButton.styles';
import { CartProps } from './cartButton.types';
import Image from 'next/image';

const Cart = (props: CartProps) => {
  const { quantity, onClick } = props;

  /* const { width } = useWindowDimensions();
  const widthIcon = width < 1026 ? '32px' : '24px'; */

  return (
    <CartContainer onClick={onClick}>
      {quantity && quantity !== 0 ? (
        <BadgeQuantity>{quantity}</BadgeQuantity>
      ) : null}
      <div className="shoppingcart-icon">
        <Image
          src="/icons/header/cart.svg"
          width={25}
          height={24}
          alt="shoppingcart Icon"
        />
      </div>
    </CartContainer>
  );
};
export default Cart;
