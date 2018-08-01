import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import CartListItemComponent from './CartListItemComponent';

class CartListComponent extends Component {
  renderItem({ item }) {
    return (
      <CartListItemComponent item={ item } />
    )
  }

  keyExtractor(item, index) {
    return String(item.id);
  }

  render() {
      const { items } = this.props;

      return (
        <FlatList
          data={ items }
          keyExtractor={ this.keyExtractor }
          renderItem={ this.renderItem }
        />
      );
  }
}

export default CartListComponent;