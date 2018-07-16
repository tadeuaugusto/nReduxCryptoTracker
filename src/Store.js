import { Platform } from 'react-native';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
// import devTools from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';
// import devTools from 'redux-devtools-extension';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './Reducers';

/*
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';

import RootReducer from './Reducers';
import devTools from 'remote-redux-devtools';
*/
const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
    RootReducer,
    composeWithDevTools(
    // compose(
        middleware,
        /*
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        }),
        */
    )
);

export default Store;