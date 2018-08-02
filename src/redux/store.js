import { createStore } from 'redux';

const initialState = {
    counter: 0,
    other: {

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

        default:
            newState = state;
        break;
    }


    return newState;
}

const store = createStore(reducer)

export default store;