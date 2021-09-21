import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { View } from 'react-native';
import api from '../../services/api';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
} from './styles';

import { useCallback } from 'react';
import FloatingCart from '../../components/FloatingCart';
import CurrencyFormatter from '../../utils/CurrencyFormatter';
import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useCart } from '../../hooks/CartContext';
import Header from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IProductProps {
  id: string
  name: string
  price: string
  image: string
}

interface IPageProps {
  navigation: StackNavigationProp<ParamListBase, string>
}

const Products: React.FC<IPageProps> = ({ navigation }) => {
  const [products, setProducts] = useState<IProductProps[]>([])
  const { addToCart } = useCart();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<IProductProps[]>('product')
        setProducts(data)
      } catch (error) {

        Alert.alert('Error', 'Erro ao comunicar-se com o servidor')

      }
    })();
  }, [])

  const handleAddToCart = useCallback((item: IProductProps) => {
    addToCart(item);
  }, [addToCart])

  return (
    <SafeAreaView>
      <Container>
        <Header />
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
                <ProductTitle>{item.name}</ProductTitle>
                <PriceContainer>
                  <ProductPrice>
                    <CurrencyFormatter type="BRL" value={Number(item.price)} />
                  </ProductPrice>
                  <ProductButton
                    onPress={() => handleAddToCart(item)}
                  >
                    <FeatherIcon size={25} name="plus" color="#C4C4C4" />
                  </ProductButton>
                </PriceContainer>
              </Product>
            )}
          />
        </ProductContainer>
        <FloatingCart navigation={navigation} />
      </Container>
    </SafeAreaView>

  );
}

export default Products;