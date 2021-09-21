import React, { useMemo } from 'react';
import { ParamListBase } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPrice,
} from './styles';

import { useCart } from '../../hooks/CartContext';
import { StackNavigationProp } from '@react-navigation/stack';
import CurrencyFormatter from '../../utils/CurrencyFormatter';

interface IFloatingCartProps{
  navigation:StackNavigationProp<ParamListBase,string>
}

const FloatingCart: React.FC<IFloatingCartProps> = ({navigation}) => {
  const { products } = useCart();

  const cartTotal = useMemo(() => {
    const totalSum = products.reduce(
      (total, { price, quantity }) => quantity * Number(price) + total,
      0,
    );
    return totalSum;
  }, [products]);

  const totalItensInCart = useMemo(() => {
    const productCount = products.reduce(
      (total, { quantity }) => quantity + total,
      0,
    );
    return productCount;
  }, [products]);

  return (
    <Container>
      <CartButton
        testID="navigate-to-cart-button"
        onPress={() => navigation.navigate("Cart")}
      >
        <FeatherIcon name="shopping-cart" size={24} color="#fff" />
        <CartButtonText>{`${totalItensInCart} itens`}</CartButtonText>
      </CartButton>

      <CartPricing>
        <CartTotalPrice>
          <CurrencyFormatter type="BRL" value={cartTotal}/>
        </CartTotalPrice>
      </CartPricing>
    </Container>
  );
};

export default FloatingCart;