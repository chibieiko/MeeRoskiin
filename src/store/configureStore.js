import {createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'remote-redux-devtools';

let middleware = [thunk];

if (__DEV__) {
    const logger = createLogger({collapsed: true});

    middleware = [...middleware, logger];
} else {
    middleware = [...middleware];
}

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}