import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';


export default function configureStore(preloadedState = {}) {
  const middlewares = [];

  middlewares.push(thunkMiddleware);
  const loggerMiddleware = createLogger({
    // eslint-disable-next-line
    predicate: () => process.env.NODE_ENV === 'development'
  });
  middlewares.push(loggerMiddleware);
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}