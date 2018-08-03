import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Header,
    Body,
    Right,
    Left,
    Title,
    Content,
    Text,
    Grid,
    Row,
    Col,
    Button,
    Spinner
} from 'native-base';
import { connect } from 'react-redux';

class SagaComponent extends Component {
  constructor(props) {
    super(props);


    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    const action = {
      type: 'PERFORM_POSTS_FETCH',
      payload: {
        page: 1,
        limit: 100,
        // ...
      }
    }

    this.props.dispatch(action);
  }


  render() {
    const { requesting, error, data } = this.props.posts;

    console.log('ON RENDER SAGA COMPONENT', this.props);
    return (
      <Container>
        <Header>
            <Left />
            <Body>
            <Title>Saga</Title>
            </Body>
            <Right />
        </Header>
        <Content padder>
            <Text>Redux saga example</Text>

            { requesting && <Spinner color='red' /> }

            { error && <Text>{ error }</Text> }

            { data && (
              data.map((post) => {
                return (
                  <Text key={ post.id }>{ post.title }</Text>
                )
              })
            ) }

            <Button onPress={ this.fetch }>
                <Text>Make an effect</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('ON CONNECT', state);

  const { posts } = state;

  return {
    posts
  };
}

export default connect(mapStateToProps)(SagaComponent);