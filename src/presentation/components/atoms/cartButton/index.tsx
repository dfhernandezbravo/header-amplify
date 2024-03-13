import Image from 'next/image';
import { CartProps } from './cartButton.types';
import { BadgeQuantity, CartContainer } from './cartButton.styles';

const Cart = ({ quantity, onClick }: CartProps) => (
  <CartContainer onClick={onClick}>
    {quantity > 0 && <BadgeQuantity>{quantity}</BadgeQuantity>}

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

export default Cart;
