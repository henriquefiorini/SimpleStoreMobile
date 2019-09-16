import styled from 'styled-components/native';
import { FlatList, RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const EmptyState = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyStateText = styled.Text`
  color: #00000099;
  font-size: 16px;
`;

export const ProductList = styled(FlatList)``;

export const Product = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 16px;
`;

export const ProductRemove = styled.TouchableOpacity`
  align-self: center;
  margin-right: 16px;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
  margin-right: 16px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #000000de;
  font-size: 16px;
`;

export const ProductStock = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #00000099;
  font-size: 14px;
`;

export const ProductQuantity = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const ProductQuantityButton = styled.TouchableOpacity``;

export const ProductQuantityInput = styled.TextInput.attrs({
  editable: false,
})`
  height: 32px;
  width: 36px;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
`;

export const ProductPrice = styled.Text`
  margin-left: 8px;
  color: #00000099;
  font-size: 18px;
`;

export const Order = styled.View`
  flex-shrink: 0;
  border-top-width: 1px;
  border-top-color: #eee;
`;

export const OrderItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const OrderLabel = styled.Text`
  color: #00000099;
  font-size: 14px;
  line-height: 24px;
`;

export const OrderTotal = styled.Text`
  color: #000000de;
  font-size: 24px;
  line-height: 24px;
`;

export const CheckoutButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 48px;
  margin: 16px;
  border-radius: 4px;
  background: #e52f20;
`;

export const CheckoutButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;
