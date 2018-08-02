import React, { Component } from 'react';
import { ListItem, Left, Right, Body, Text, Thumbnail, Button, Icon } from 'native-base';
import PropTypes from 'prop-types';

class CartListItemComponent extends Component {
    constructor(props) {
      super(props);

      this.updateQuantityMinusOne = this.updateQuantityMinusOne.bind(this);
      this.updateQuantityPLusOne = this.updateQuantityPLusOne.bind(this);
    }

    removeItem() {
      const { item } = this.props;

      this.props.onRemove(item);
    }

    updateQuantityMinusOne() {
      this.updateItem(-1);
    }

    updateQuantityPLusOne() {
      this.updateItem(1);
    }

    updateItem(quantity) {
      const { item } = this.props;
      item.quantity += quantity;
      item.total = item.quantity * item.unit_price;

      this.props.updateItem(item);
    }

    render() {
      const { item } = this.props;
      console.log('Props on CartListItemComponent: ', this.props)
        return (
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: 'https://via.placeholder.com/350x350' }} />
            </Left>
            <Body>
              <Text>{ item.quantity } - { item.description }</Text>
              <Text note numberOfLines={1}>Subtotal ${ item.total }</Text>
            </Body>
            <Right>

              <Button transparent onPress={ this.updateQuantityMinusOne }>
                <Icon name='remove' />
              </Button>
              <Button transparent onPress={ this.updateQuantityPLusOne }>
                <Icon name='add' />
              </Button>
              <Button
                transparent
                onPress={ this.removeItem }
                >
                <Icon name='trash' />
              </Button>
            </Right>
          </ListItem>
        );
    }
}

export default CartListItemComponent;