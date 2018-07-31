/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, FlatList } from 'react-native';
import { Container, Header, Left, Icon, Button, Body, Right, Title, Content, H3, Text, ListItem, Thumbnail, Card, CardItem }  from 'native-base';

import CartComponent from './src/CartComponent';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
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
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='cart' />
            </Button>
          </Left>
          <Body>
            <Title>
              Shopping cart
            </Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <CartComponent />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
