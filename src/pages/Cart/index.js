import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  EmptyState,
  EmptyStateText,
  ProductList,
  Product,
  ProductRemove,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductStock,
  ProductQuantity,
  ProductQuantityButton,
  ProductQuantityInput,
  ProductPrice,
  Order,
  OrderItem,
  OrderLabel,
  OrderTotal,
  CheckoutButton,
  CheckoutButtonText,
} from './styles';

import { formatCurrency } from '../../utils/format';

import {
  updateQuantityRequest,
  removeFromCart,
} from '../../store/modules/cart/actions';

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatCurrency(product.price * product.quantity),
    })),
  );

  const orderValue = useSelector(state =>
    formatCurrency(
      state.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0),
    ),
  );

  function increaseQuantity(product) {
    dispatch(updateQuantityRequest(product.id, product.quantity + 1));
  }

  function decreaseQuantity(product) {
    dispatch(updateQuantityRequest(product.id, product.quantity - 1));
  }

  function handleRemove(id) {
    dispatch(removeFromCart(id));
  }

  if (cart && cart.length <= 0) {
    return (
      <EmptyState>
        <EmptyStateText>Your cart is empty.</EmptyStateText>
      </EmptyState>
    );
  }

  return (
    <Container>
      <ProductList
        data={cart}
        keyExtractor={item => String(item.id)}
        renderItem={({ item: product }) => (
          <Product>
            <ProductRemove onPress={() => handleRemove(product.id)}>
              <Icon name="close" size={24} />
            </ProductRemove>
            <ProductImage source={{ uri: product.image }} />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductStock>1 in stock</ProductStock>
              <ProductQuantity>
                <ProductQuantityButton
                  onPress={() => decreaseQuantity(product)}
                >
                  <Icon name="remove-circle-outline" size={24} />
                </ProductQuantityButton>
                <ProductQuantityInput value={String(product.quantity)} />
                <ProductQuantityButton
                  onPress={() => increaseQuantity(product)}
                >
                  <Icon name="add-circle-outline" size={24} />
                </ProductQuantityButton>
              </ProductQuantity>
            </ProductInfo>
            <ProductPrice>{product.subtotal}</ProductPrice>
          </Product>
        )}
      />
      <Order>
        <OrderItem>
          <OrderLabel>TOTAL</OrderLabel>
          <OrderTotal>{orderValue}</OrderTotal>
        </OrderItem>
      </Order>
      <CheckoutButton>
        <CheckoutButtonText>Proceed to Checkout</CheckoutButtonText>
      </CheckoutButton>
    </Container>
  );
}

Cart.navigationOptions = {
  title: 'Cart',
};

export default Cart;
