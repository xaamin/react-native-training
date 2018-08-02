import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Body, Right, Left, Title, Content, Text, Grid, Row, Col, Button } from 'native-base';
import { connect } from 'react-redux';

class CounterComponent extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
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
    console.log('ON RENDER COUNTER COMPONENT', this.props);
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
                        <Button onPress={ this.increment }>
                            <Text>Increment</Text>
                        </Button>
                    </Col>
                    <Col>
                        <Button onPress={ this.decrement }>
                            <Text>Decrement</Text>
                        </Button>
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