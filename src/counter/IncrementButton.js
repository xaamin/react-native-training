import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'native-base';

class IncrementButton extends Component {
    // Mounting events
  componentWillMount() {
    console.log('INCREMENT:: componentWillMount fired');
  }

  componentDidMount() {
    console.log('INCREMENT:: componentDidMount fired');
  }

  componentWillUnmount() {
    console.log('INCREMENT:: componentWillUnmount fired');
  }

  // Update events
  shouldComponentUpdate(nextProps, nextState) {
    console.log('INCREMENT:: shouldComponentUpdate fired');

    return nextProps.value === 5;
  }

  componentWillUpdate() {
    console.log('INCREMENT:: componentWillUpdate fired');
  }

  componentDidUpdate() {
    console.log('INCREMENT:: componentDidUpdate fired');
  }

    render() {
        console.log('INCREMENT:: render fired');

        return (
            <Button onPress={ this.props.increment }>
                <Text>Increment</Text>
            </Button>
        );
    }
}

export default IncrementButton;