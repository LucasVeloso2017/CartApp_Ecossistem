import React, { useMemo } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { View } from 'react-native';

import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductPriceContainer,
  ProductSinglePrice,
  TotalContainer,
  ProductPrice,
  ProductQuantity,
  ActionContainer,
  ActionButton,
  TotalProductsContainer,
  TotalProductsText,
  SubtotalValue,
} from './styles';

import { useCart } from '../../hooks/CartContext';
import CurrencyFormatter from '../../utils/CurrencyFormatter';
import Header from '../../components/Header';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { useCallback } from 'react';

interface IPageProps {
  navigation: StackNavigationProp<ParamListBase, string>
}

const Cart: React.FC<IPageProps> = ({navigation}) => {
  const { increment, decrement, products } = useCart();

  const handleIncrement = useCallback((id: string) => {
    increment(id);
  }, [increment])

  const handleDecrement = useCallback((id: string)=> {
    decrement(id);
  },[decrement])

  const cartTotal = useMemo(() => {

    const totalSum = products
    .reduce((total, { price, quantity }) => quantity * Number(price) + total,0);

    return totalSum;
  }, [products]);

  const totalItensInCart = useMemo(() => {

    const productCount = products
    .reduce((total, { quantity }) => total + quantity, 0);

    return productCount;
  }, [products]);

  return (
    <Container>
      <Header isBack={true} navigation={navigation}/>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitleContainer>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductPriceContainer>
                  <ProductSinglePrice>
                    <CurrencyFormatter type="BRL" value={Number(item.price)}/>
                  </ProductSinglePrice>

                  <TotalContainer>

                    <ProductQuantity>{`Itens: ${item.quantity} `}</ProductQuantity>
                    
                    <ProductPrice>
                      <CurrencyFormatter type="BRL" value={Number(item.price) * item.quantity}/>
                    </ProductPrice>

                  </TotalContainer>
                  
                </ProductPriceContainer>
              </ProductTitleContainer>
              <ActionContainer>
                <ActionButton
                  testID={`increment-${item.id}`}
                  onPress={() => handleIncrement(item.id)}
                >
                  <FeatherIcon name="plus" color="white" size={20} />
                </ActionButton>
                <ActionButton
                  testID={`decrement-${item.id}`}
                  onPress={() => handleDecrement(item.id)}
                >
                  <FeatherIcon name="minus" color="white" size={20} />
                </ActionButton>
              </ActionContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <TotalProductsContainer>
        <FeatherIcon name="shopping-cart" color="#fff" size={24} />
        <TotalProductsText>{`${totalItensInCart} itens`}</TotalProductsText>
        <SubtotalValue><CurrencyFormatter type="BRL" value={cartTotal}/></SubtotalValue>
      </TotalProductsContainer>
    </Container>
  );
};

export default Cart;