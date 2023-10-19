import useWindowDimensions from '@hooks/useWindowDimensions';
import { CgShoppingCart } from 'react-icons/cg';
import { BadgeQuantity, CartContainer, CartText } from './cartButton.styles';
import { CartProps } from './cartButton.types';

const Cart = (props: CartProps) => {
  const { quantity, onClick } = props;

  const { width } = useWindowDimensions();

  return (
    <CartContainer onClick={onClick}>
      {quantity && quantity !== 0 ? (
        <BadgeQuantity>{quantity}</BadgeQuantity>
      ) : null}
      {width < 1026 ? (
        <>
          <CgShoppingCart size={'32px'} />
        </>
      ) : (
        <>
          <CgShoppingCart size={'24px'} />
          <CartText>Mi carro</CartText>
        </>
      )}
    </CartContainer>
  );
};
export default Cart;
