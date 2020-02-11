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

function r4nge(to=10, from=0, by=1) {
    const result = [];
    if (from < to) {
        for (let i=from; i<=to; i+=by) {
            result.push(i);
        }
    } else {
        for (let i=from; i>to; i-=by) {
            result.push(i);
        }
    }
    return result;
}
const defaultFactor = .19;
const howMany = 25;
const beginning = 0;
const step = 3;
const end = step * howMany;


function scaleBy(howMuch, factor=defaultFactor) {
    return ({
        transform: `
            scale(${howMuch * factor})            
        `
    });
}

function CounterApp() {
    return (
        <Provider store={store}>
                {
                    r4nge(beginning, end, step).map(i => <div style={scaleBy(i)}><Display /></div>)
                }
            <Counter />
                {
                    r4nge(end, beginning, step).map(i => <div style={scaleBy(i)}><Display /></div>)
                }


        </Provider>
    );

}

export default CounterApp;