import React, { useMemo } from 'react';
import { FiShoppingCart } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import { useCart } from '../../hooks/CartContext';
import { Container } from './styles';

const CartButton: React.FC = () => {
    const { products } = useCart()
    const history = useHistory()

    const totalItensInCart = useMemo(() => {
        const productCount = products.reduce(
            (total, { quantity }) => quantity + total,
            0,
        );
        return productCount;
    }, [products]);

    return (
        <Container type="button" onClick={() => history.push("/cart")} data-testid="cart-button">
            <FiShoppingCart color="white" size={25} /> <span data-testid="cart-value">{totalItensInCart}</span>
        </Container>
    );
}

export default CartButton;