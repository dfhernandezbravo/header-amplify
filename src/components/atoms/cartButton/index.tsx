import { CartContainer, BadgeQuantity, CartText } from "./cartButton.styles";
import { CgShoppingCart } from 'react-icons/cg'
import { CartProps } from "./cartButton.types";

const Cart = (props: CartProps) => {

    const { quantity, onClick } = props;

    return(
        <CartContainer onClick={onClick}>
            {quantity && quantity !== 0 ? <BadgeQuantity>{quantity}</BadgeQuantity> : null}
            <CgShoppingCart size={'24px'} />
            <CartText>Mi carro</CartText>
        </CartContainer>
    )
}
export default Cart;