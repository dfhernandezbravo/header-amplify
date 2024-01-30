import useWindowDimensions from '@hooks/useWindowDimensions';
import { CgShoppingCart } from 'react-icons/cg';
import { BadgeQuantity, CartContainer } from './cartButton.styles';
import { CartProps } from './cartButton.types';

const Cart = (props: CartProps) => {
  const { quantity, onClick } = props;

  const { width } = useWindowDimensions();
  const widthIcon = width < 1026 ? '32px' : '24px';

  return (
    <CartContainer onClick={onClick}>
      {quantity && quantity !== 0 ? (
        <BadgeQuantity>{quantity}</BadgeQuantity>
      ) : null}
      <div className="shoppingcart-icon">
        <CgShoppingCart size={widthIcon} />
      </div>
    </CartContainer>
  );
};
export default Cart;
