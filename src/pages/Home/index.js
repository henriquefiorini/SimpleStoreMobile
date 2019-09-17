import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

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

import { formatCurrency } from '../../utils/format';

import { addToCartRequest } from '../../store/modules/cart/actions';

function Home() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await Api.get('/products');
        const data = response.data.map(product => ({
          ...product,
          priceFormatted: formatCurrency(product.price),
        }));
        setProducts(data);
      } catch (err) {
        console.tron.error(err);
      }
    }
    loadProducts();
  }, []);

  function handleAddToCart(id) {
    dispatch(addToCartRequest(id));
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item: product }) => (
          <Product key={product.id}>
            <ProductImage source={{ uri: product.image }} />
            <ProductContent>
              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductInfo>
              <Button onPress={() => handleAddToCart(product.id)}>
                <ButtonIcon />
                <ButtonText>Add to cart</ButtonText>
              </Button>
            </ProductContent>
          </Product>
        )}
      />
    </Container>
  );
}

export default Home;
