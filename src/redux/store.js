import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import posts from './sagas';

const initialState = {
    counter: 0,
    other: { },
    posts: {
        requesting: false,
        data: null,
        error: null
    }
}

const reducer = (state = initialState, action) => {
    console.log('REDUCER CALLED WITH', action);

    let newState = null;

    switch (action.type) {
        case 'COUNTER_INCREMENT':
            newState = {
                ...state,
                counter: state.counter + action.payload
            }
        break;

        case 'COUNTER_DECREMENT':
            newState = {
                ...state,
                counter: state.counter + action.payload
            }
        break;

        case 'POSTS_REQUESTING':
            newState = {
                ...state,
                posts: {
                    ...state.posts,
                    requesting: action.payload,
                }
            }
        break;

        case 'POSTS_FETCH_SUCCESS':
            newState = {
                ...state,
                posts: {
                    ...state.posts,
                    data: action.payload
                }
            }
        break;

        case 'POSTS_FETCH_ERROR':
            newState = {
                ...state,
                posts: {
                    ...state.posts,
                    error: action.payload
                }
            }
        break;

        default:
            newState = state;
        break;
    }


    return newState;
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(posts)

export default store;