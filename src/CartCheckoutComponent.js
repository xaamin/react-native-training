import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Button } from 'native-base';
import PropTypes from 'prop-types';

class CartCheckoutComponent extends Component {

  getTotal() {
    const { items } = this.props;
    let total = 0;

    for (const key in items) {
        const element = items[key];

        total += element.total;
    }

    return total;
  }

    render() {
        return (
          <Card>
          <CardItem header>
            <Text>Checkout</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Total: { this.getTotal() }
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Button>
              <Text>Checkout</Text>
            </Button>
          </CardItem>
       </Card>
        );
    }
}

export default CartCheckoutComponent;