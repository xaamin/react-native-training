import React, { Component } from 'react';
import { Alert } from 'react-native';
import { View, H3, Fab, Button, Text } from 'native-base';
import PropTypes from 'prop-types';

import CartListComponent from './CartListComponent';
import CardCheckoutComponent from './CartCheckoutComponent';

class CartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          description: 'Teclado logitech',
          quantity: 1,
          unit_price: 100.00,
          total: 100.00
        },
        {
          id: 2,
          description: 'Mouse logitech',
          quantity: 1,
          unit_price: 50.00,
          total: 50.00
        }
      ]
    }

    this.addItem = this.addItem.bind(this);
    //this.removeItem = this.removeItem.bind(this);
    this.confirmItemRemove = this.confirmItemRemove.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  addItem() {
    const items = this.state.items.map((item) => item);

    const item = {
      id: (items.length + 1),
      description: 'Producto ' + (items.length + 1),
      quantity: 1,
      unit_price: 50.00,
      total: 50.00
    };

    items.push(item);

    console.log('ITEMS', items)

    this.setState({
      items
    });
  }

  confirmItemRemove(item) {
    Alert.alert(
      'Confirm',
      'Confirma eliminar ' + item.quantity + ' - ' + item.description + '????',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'), style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => this.removeItem(item)
        },
      ],
      {
        cancelable: false
      }
    )
  }

  removeItem(item) {
    const items = this.state.items.filter((_item) => _item.id !== item.id);

    this.setState({
      items
    });
  }

  updateItem(item) {
    const items = this.state.items.map((_item) => {
      return _item.id === item.id ? item : _item;
    });

    this.setState({
      items
    });
  }

  cartCheckout() {

  }

  render() {
    const { items } = this.state;

      return (
        <View>
          <H3>
              Items in your cart
          </H3>

          <CartListComponent
            onRequestItemRemove={ this.confirmItemRemove }
            updateItem={ this.updateItem }
            items={ items }/>

          <Button
            success
            onPress={ this.addItem }>
            <Text>Add item</Text>
          </Button>

          <CardCheckoutComponent items={ items } />
        </View>
      );
  }
}

export default CartComponent;