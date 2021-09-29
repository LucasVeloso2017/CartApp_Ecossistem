import React from 'react';
import { FiShoppingCart } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import { useCart } from '../../hooks/CartContext';
import { Container } from './styles';

const CartButton: React.FC = () => {
    const { totalInCart } = useCart()
    const history = useHistory()

    return (
        <Container type="button" onClick={() => history.push("/cart")} data-testid="cart-button">
            <FiShoppingCart color="white" size={25} /> <span data-testid="cart-value">{totalInCart()}</span>
        </Container>
    );
}

export default CartButton;