import {
  createStore, compose,applyMiddleware
} from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducer'
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
  );
  const store = createStore(reducer, enhancer);
// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
// const store = createStore(reducer, /* preloadedState, */ compose(
//     applyMiddleware(...composeEnhancers)
//   ));
// const store = createStore(reducer,composeEnhancers())
export default store;
