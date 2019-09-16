import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProductList = styled(FlatList)`
  flex: 1;
`;

export const Product = styled.View`
  flex-direction: column;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const ProductImage = styled.Image`
  align-self: center;
  height: 240px;
  width: 240px;
`;

export const ProductContent = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  height: 36px;
  min-width: 64px;
  padding-right: 16px;
  padding-left: 12px;
  border-radius: 4px;
  background: #e52f20;
`;

export const ButtonIcon = styled(Icon).attrs({
  name: 'add-shopping-cart',
  color: 'white',
  size: 18,
})`
  margin-right: 8px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;
