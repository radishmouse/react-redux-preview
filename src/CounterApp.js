import React from 'react';

import {
    createStore,
    combineReducers,
} from 'redux';

import { Provider } from 'react-redux'

import { count } from './reducers';
import Counter from './containers/CounterContainer';


const rootReducer = combineReducers({
    count
});
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

store.subscribe(async () => {
    // do axios stuff here
    // (: if you're not rate-limited :)
});

// NAUGHTY! DO NOT SHIP TO PRODUCTION!
window.store = store;
// NAUGHTY! DO NOT SHIP TO PRODUCTION!

function CounterApp() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );

}

export default CounterApp;