import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
