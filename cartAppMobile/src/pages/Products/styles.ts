import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface IProductProps {
  id: string
  name: string
  price: string
  image: string
}

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #134074;
`;

export const ProductContainer = styled.View`
  border-radius: 5px;
  margin-top: 20px;
  flex: 1;
  flex-direction: row;
`;

export const ProductList = styled(
  FlatList as new () => FlatList<IProductProps>,
).attrs({
  numColumns: 2,
})`
  flex: 1;
  padding: 0 10px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 16px 16px;
  border-radius: 5px;
  margin: 8px;
  flex: 1;
`;

export const ProductImage = styled.Image`
  height: 122px;
  width: 122px;
  align-self: center;
  border-radius: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  margin-top: 10px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #0B2545;
`;

export const ProductButton = styled.TouchableOpacity`
  background:#061826;
  padding: 5px;
  border-radius: 5px;
`;