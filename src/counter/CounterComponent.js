import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Body, Right, Left, Title, Content, Text, Grid, Row, Col, Button } from 'native-base';
import { connect } from 'react-redux';

import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';

class CounterComponent extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // Mounting events
  componentWillMount() {
    console.log('COUNTER:: componentWillMount fired');
  }

  componentDidMount() {
    console.log('COUNTER:: componentDidMount fired');
  }

  componentWillUnmount() {
    console.log('COUNTER:: componentWillUnmount fired');
  }

  // Update events
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('COUNTER:: shouldComponentUpdate fired');

  //   return false;
  // }

  componentWillUpdate() {
    console.log('COUNTER:: componentWillUpdate fired');
  }

  componentDidUpdate() {
    console.log('COUNTER:: componentDidUpdate fired');
  }

  increment() {
    const action = {
      type: 'COUNTER_INCREMENT',
      payload: 1
    }

    this.props.dispatch(action);
  }

  decrement() {
    const action = {
      type: 'COUNTER_DECREMENT',
      payload: -1
    }

    this.props.dispatch(action);
  }

  render() {
    console.log('COUNTER:: render fired');

    return (
      <Container>
        <Header>
            <Left />
            <Body>
            <Title>Counter</Title>
            </Body>
            <Right />
        </Header>
        <Content padder>
            <Text>Counter redux example</Text>
            <Grid>
                <Row>
                    <Col>
                        <IncrementButton value={ this.props.counter } increment={ this.increment } />
                    </Col>
                    <Col>
                        <DecrementButton value={ this.props.counter } decrement={ this.decrement } />
                    </Col>
                </Row>
            </Grid>

            <Text>Counter value { this.props.counter }</Text>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('ON CONNECT', state);

  const { counter } = state;

  return {
    counter
  };
}

export default connect(mapStateToProps)(CounterComponent);