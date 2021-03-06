import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface IProductProps {
    id: string
    name: string
    price: string
    image: string
    quantity:number
}

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #134074;
`;

export const ProductContainer = styled.View`
  border-radius: 5px;
  margin-top: 60px;
  flex: 1;
  flex-direction: row;
`;

export const ProductList = styled(FlatList as new () => FlatList<IProductProps>)`
  flex: 1;
  padding: 0 10px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 15px 10px;
  border-radius: 5px;
  margin: 5px;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  height: 92px;
  width: 92px;
  border-radius: 5px;
`;

export const ProductTitleContainer = styled.View`
  font-size: 16px;
  margin-left: 5px;
  padding: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: column;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const ProductSinglePrice = styled.Text`
  font-size: 14px;
  color: #061826;
  margin-top: 8px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  margin-top: 5px;
  font-size: 16px;
  color: #061826;
`;

export const ProductQuantity = styled.Text`
  font-weight: bold;
  margin-top: 5px;
  margin-right: 10px;
  font-size: 16px;
  color: #061826;
`;

export const ActionContainer = styled.View`
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
`;

export const ActionButton = styled.TouchableOpacity`
  background: #061826;
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
`;

export const TotalProductsContainer = styled.View`
  position: absolute;
  bottom: 0px;
  flex-direction: row;
  background: #061826;
  padding: 20px 40px;
  justify-content: space-between;
  align-items: center;
`;

export const TotalProductsText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 15px;
  flex: 1;
  font-weight: bold;
`;

export const SubtotalValue = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;