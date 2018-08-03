import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'native-base';

class IncrementButton extends Component {
     // Mounting events
  componentWillMount() {
    console.log('DECREMENT:: componentWillMount fired');
  }

  componentDidMount() {
    console.log('DECREMENT:: componentDidMount fired');
  }

  componentWillUnmount() {
    console.log('DECREMENT:: componentWillUnmount fired');
  }

  // Update events
  shouldComponentUpdate(nextProps, nextState) {
    console.log('DECREMENT:: shouldComponentUpdate fired');

    return false;
  }

  componentWillUpdate() {
    console.log('DECREMENT:: componentWillUpdate fired');
  }

  componentDidUpdate() {
    console.log('DECREMENT:: componentDidUpdate fired');
  }

    render() {
        console.log('DECREMENT:: render fired');

        return (
            <Button onPress={ this.props.decrement }>
                <Text>Decrement</Text>
            </Button>
        );
    }
}

export default IncrementButton;