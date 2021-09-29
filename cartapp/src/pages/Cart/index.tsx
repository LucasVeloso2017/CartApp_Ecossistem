import React from 'react';
import CartCard from '../../components/CartCard';
import Header from '../../components/Header';
import { useCart } from '../../hooks/CartContext';

import { Body, Container } from './styles';

const Cart: React.FC = () => {
  const { products } = useCart()

  return (
    <Container>
      <Header isBack={true} />
      <Body>
        <div className="product-grid">
          {
            products.map(({ id, image, name, price, quantity }, index) => {
              return (
                <div key={id} id="card-container">
                  <CartCard
                    product={{
                      id,
                      image,
                      name,
                      price,
                      quantity,
                      productIndex: index
                    }}
                  />
                </div>
              )
            })
          }
        </div>
      </Body>
    </Container>
  );
}

export default Cart;