import React, { Component } from 'react';

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

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    try {
      const response = await Api.get('/products');
      this.setState({ products: response.data });
    } catch (err) {
      console.tron.error(err);
    }
  };

  renderProduct = ({ item: product }) => {
    return (
      <Product key={product.id}>
        <ProductImage source={{ uri: product.image }} />
        <ProductContent>
          <ProductInfo>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductInfo>
          <Button>
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

export default Home;
