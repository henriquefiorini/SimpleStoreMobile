import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Container,
  ProductList,
  Product,
  ProductImage,
  ProductContent,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  Button,
  ButtonIcon,
  ButtonText,
} from './styles';

import { Api } from '../../services';

import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
  };

  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    try {
      const response = await Api.get('/products');
      const products = response.data.map(product => ({
        ...product,
        priceFormatted: `$${product.price}`,
      }));
      this.setState({ products });
    } catch (err) {
      console.tron.error(err);
    }
  };

  handleAddToCart = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  renderProduct = ({ item: product }) => {
    return (
      <Product key={product.id}>
        <ProductImage source={{ uri: product.image }} />
        <ProductContent>
          <ProductInfo>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.priceFormatted}</ProductPrice>
          </ProductInfo>
          <Button onPress={() => this.handleAddToCart(product.id)}>
            <ButtonIcon />
            <ButtonText>Add to cart</ButtonText>
          </Button>
        </ProductContent>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <ProductList
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Home);
