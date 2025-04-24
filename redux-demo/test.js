const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').thunk;

const reducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') return state + 1;
  return state;
};

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch((dispatch) => {
  dispatch({ type: 'INCREMENT' });
  console.log('Current state:', store.getState()); // should be 1
});