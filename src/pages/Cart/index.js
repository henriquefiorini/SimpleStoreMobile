import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
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

class Cart extends Component {
  static navigationOptions = {
    title: 'Cart',
  };

  state = {
    products: [
      {
        id: 1,
        title: 'Product 1',
        price: 100,
        image:
          'https://cdn.shopify.com/s/files/1/0003/5933/3902/products/Bridge_PDP_02_1024x1024.jpg?v=1563409099',
      },
      {
        id: 2,
        title: 'Product 2',
        price: 90,
        image:
          'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2018/09/17/soylent-cult-following-in-the-us-leads-to-uk-launch/8605102-1-eng-GB/Soylent-cult-following-in-the-US-leads-to-UK-launch_wrbm_large.jpg',
      },
    ],
  };

  renderProduct({ item: product }) {
    return (
      <Product>
        <ProductRemove>
          <Icon name="close" size={24} />
        </ProductRemove>
        <ProductImage source={{ uri: product.image }} />
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductStock>1 in stock</ProductStock>
          <ProductQuantity>
            <ProductQuantityButton>
              <Icon name="remove-circle-outline" size={24} />
            </ProductQuantityButton>
            <ProductQuantityInput value="3" />
            <ProductQuantityButton>
              <Icon name="add-circle-outline" size={24} />
            </ProductQuantityButton>
          </ProductQuantity>
        </ProductInfo>
        <ProductPrice>{product.price}</ProductPrice>
      </Product>
    );
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <ProductList
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
        <Order>
          <OrderItem>
            <OrderLabel>TOTAL</OrderLabel>
            <OrderTotal>$300.00</OrderTotal>
          </OrderItem>
        </Order>
        <CheckoutButton>
          <CheckoutButtonText>Proceed to Checkout</CheckoutButtonText>
        </CheckoutButton>
      </Container>
    );
  }
}

export default Cart;
