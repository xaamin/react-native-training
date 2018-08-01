import React, { Component } from 'react';
import { ListItem, Left, Right, Body, Text, Thumbnail, Button, Icon } from 'native-base';
import PropTypes from 'prop-types';

class CartListItemComponent extends Component {
    constructor(props) {
      super(props);

      this.removeItem = this.removeItem.bind(this);
    }

    removeItem() {
      const { item } = this.props;

      this.props.onRemove(item);
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