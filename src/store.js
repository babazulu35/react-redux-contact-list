import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './reducers';

const middleware = composeWithDevTools(applyMiddleware(promise(), thunk, logger));

export default createStore(rootReducer, middleware);