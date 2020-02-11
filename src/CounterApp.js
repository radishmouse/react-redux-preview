import React from 'react';

import {
    createStore,
    combineReducers,
} from 'redux';

import { Provider } from 'react-redux'

import { count } from './reducers';
import Counter from './containers/CounterContainer';
import Display from './containers/DisplayContainer';

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
            <h2>
                <Display />    
            </h2>
            <h3>
                <Display />    
            </h3>
            <h4>
                <Display />    
            </h4>
            <h5>
                <Display />    
            </h5>
            <h6>
                <Display />    
            </h6>
            <Counter />
        </Provider>
    );

}

export default CounterApp;