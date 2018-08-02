import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import CartListItemComponent from './CartListItemComponent';

class CartListComponent extends Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({ item }) {
    return (
      <CartListItemComponent
        item={ item }
        onRemove={ this.props.onRequestItemRemove }
        updateItem={ this.props.updateItem }/>
    )
  }

  keyExtractor(item, index) {
    return String(item.id);
  }

  render() {
      const { items } = this.props;
      console.log('Props on CartListComponent', this.props)
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