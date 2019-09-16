import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

import * as CartActions from '../../store/modules/cart/actions';

class Cart extends Component {
  static navigationOptions = {
    title: 'Cart',
  };

  static propTypes = {
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        title: PropTypes.string,
        quantity: PropTypes.number,
        subtotal: PropTypes.string,
      }),
    ).isRequired,
    orderValue: PropTypes.string.isRequired,

    updateQuantityRequest: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
  };

  increaseQuantity = product => {
    const { updateQuantityRequest } = this.props;
    updateQuantityRequest(product.id, product.quantity + 1);
  };

  decreaseQuantity = product => {
    const { updateQuantityRequest } = this.props;
    updateQuantityRequest(product.id, product.quantity - 1);
  };

  handleRemove = id => {
    const { removeFromCart } = this.props;
    removeFromCart(id);
  };

  renderProduct = ({ item: product }) => {
    return (
      <Product>
        <ProductRemove onPress={() => this.handleRemove(product.id)}>
          <Icon name="close" size={24} />
        </ProductRemove>
        <ProductImage source={{ uri: product.image }} />
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductStock>1 in stock</ProductStock>
          <ProductQuantity>
            <ProductQuantityButton
              onPress={() => this.decreaseQuantity(product)}
            >
              <Icon name="remove-circle-outline" size={24} />
            </ProductQuantityButton>
            <ProductQuantityInput value={String(product.quantity)} />
            <ProductQuantityButton
              onPress={() => this.increaseQuantity(product)}
            >
              <Icon name="add-circle-outline" size={24} />
            </ProductQuantityButton>
          </ProductQuantity>
        </ProductInfo>
        <ProductPrice>{product.subtotal}</ProductPrice>
      </Product>
    );
  };

  render() {
    const { cart, orderValue } = this.props;

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
          renderItem={this.renderProduct}
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
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: `$${product.price * product.quantity}`,
  })),
  orderValue: `$${state.cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0)}`,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
