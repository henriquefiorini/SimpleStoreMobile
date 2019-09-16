import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Row, Section, ActionItem, Logo } from './styles';

function Header({ navigation }) {
  return (
    <Container>
      <Row>
        <Section>
          <Logo>Simple Store</Logo>
        </Section>
        <Section>
          <ActionItem onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-cart" size={24} />
          </ActionItem>
        </Section>
      </Row>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Header;
