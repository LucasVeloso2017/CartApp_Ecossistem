import React from 'react';
import { useCallback } from 'react';
import { FiPlus } from 'react-icons/fi'
import { useCart } from '../../hooks/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';

import { AddButton, CardBody, CardHeader, Container } from './styles';

interface IProduct {
  id: string
  name: string
  price: string
  image: string
}

interface ICardProps {
  product: IProduct
}

const ProductCard: React.FC<ICardProps> = ({ product }) => {
  const { addOrIncrementToCart } = useCart()

  const add = useCallback((product: IProduct) => {
    addOrIncrementToCart(product)
  }, [addOrIncrementToCart])

  return (
    <Container data-testid="product-card">
      <CardHeader>
        <img src={product.image} alt={product.name} />
      </CardHeader>
      <CardBody>
        <p className="name" data-testid="product-card-name">{product.name}</p>
        <p className="price">{formatCurrency(Number(product.price), "pt-Br", "BRL")}</p>
        <AddButton
          onClick={() => add({
            id: product.id,
            image: product.image,
            name: product.name,
            price: product.price,
          })}
          data-testid="product-card-add"
        >
          <FiPlus color="white" size={25} /> Adicionar
        </AddButton>
      </CardBody>
    </Container>
  );
}

export default ProductCard;