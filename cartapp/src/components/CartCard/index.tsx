import React from 'react';
import { useCart } from '../../hooks/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { CardBody, CardHeader, Container, ControlButton } from './styles';
interface IProduct {
    id: string
    name: string
    price: string
    image: string
    quantity: number
    productIndex: number
}

interface ICardProps {
    product: IProduct
}

const CartCard: React.FC<ICardProps> = ({ product }) => {
    const { decrement, increment } = useCart()

    return (
        <Container data-testid="cart-card">
            <CardHeader>
                <img src={product.image} alt={product.name} />
            </CardHeader>
            <CardBody>
                <div className="product-info">
                    <p className="name">{product.name}</p>
                    <p className="price">{formatCurrency(Number(product.price), "pt-Br", "BRL")}</p>
                    <p className="subtotal">{formatCurrency((Number(product.price) * product.quantity), "pt-Br", "BRL")}</p>
                </div>
                <div className="product-control">
                    <ControlButton data-testid="cart-card-increment" onClick={() => increment(product.productIndex)} >+</ControlButton>
                    <p className="quantity" data-testid="cart-card-quantity">{product.quantity}</p>
                    <ControlButton onClick={() => decrement(product.productIndex)} data-testid="cart-card-decrement">-</ControlButton>
                </div>
            </CardBody>
        </Container>
    );
}

export default CartCard