import { CartContainer, BadgeQuantity, CartText } from "./cartButton.styles";
import { CgShoppingCart } from 'react-icons/cg'
import { CartProps } from "./cartButton.types";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const Cart = (props: CartProps) => {

    const { quantity, onClick } = props;

    const { width } = useWindowDimensions();

    return(
        <CartContainer onClick={onClick}>
            {quantity && quantity !== 0 ? <BadgeQuantity>{quantity}</BadgeQuantity> : null}
            {width < 1026 
                ? <><CgShoppingCart size={'32px'} /></> 
                :   <>
                        <CgShoppingCart size={'24px'} />
                        <CartText>Mi carro</CartText>
                    </>}
        </CartContainer>
    )
}
export default Cart;