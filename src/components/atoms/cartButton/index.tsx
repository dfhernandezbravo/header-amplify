import { CartContainer, BadgeQuantity, CartText } from "./cartButton.styles";
import { CgShoppingCart } from 'react-icons/cg'
import { CartProps } from "./cartButton.types";

const Cart = (props: CartProps) => {

    const { quantity } = props;

    return(
        <CartContainer>
            {quantity && quantity !== 0 ? <BadgeQuantity>{quantity}</BadgeQuantity> : null}
            <CgShoppingCart size={'1.8rem'} />
            <CartText>Mi carro</CartText>
        </CartContainer>
    )
}
export default Cart;