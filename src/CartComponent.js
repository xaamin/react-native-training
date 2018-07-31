import React, { Component } from 'react';
import { View, H3 } from 'native-base';
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
  }

  render() {
    const { items } = this.state;

      return (
        <View>
          <H3>
              Items in your cart
          </H3>

          <CartListComponent items={ items }/>
          <CardCheckoutComponent items={ items } />
        </View>
      );
  }
}

export default CartComponent;