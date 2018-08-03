import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function * fetch(action) {
  try {
    const requesting = {
      type: 'POSTS_REQUESTING',
      payload: true
    }

    yield put(requesting);

    // Perform API call

    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //   .then(function (response) {
    //     // handle success
    //     console.log('PROMISE RESPONSE', response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log('PROMISE ERROR', error);
    //   })

    const response = yield axios.get('https://jsonplaceholder.typicode.com/posts');

    console.log('RESPONSE', response)

    const success = {
      type: 'POSTS_FETCH_SUCCESS',
      payload: response.data
    }

    yield put(success);

  } catch (e) {
    const error = {
      type: 'POSTS_FETCH_ERROR',
      payload: e.message
    }

    yield put(error);
  } finally {
    const requesting = {
      type: 'POSTS_REQUESTING',
      payload: false
    }

    yield put(requesting);
  }
}

function * posts() {
  yield takeEvery('PERFORM_POSTS_FETCH', fetch);
}

export default posts;
