import {applyMiddleware, compose, createStore} from 'redux';
import {Map} from 'immutable';
import createSagaMiddleware from 'redux-saga';
import createReducer from './state';
import devTools from 'remote-redux-devtools';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState = Map({})) {
    const middlewares = [
        sagaMiddleware,
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    if (__DEV__) {
        enhancers.push(devTools());
    }

    const store = createStore(
        createReducer(),
        initialState,
        compose(...enhancers)
    );

    // Extensions
    store.runSaga = sagaMiddleware.run;

    return store;
}

module.exports = configureStore;
