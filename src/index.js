import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './native-es-class-test';

const store = createStore(
  (state, action) => {
    if (action.type === 'UPDATE_FOO') {
      return {
        ...state,
        foo: action.value,
      };
    }

    return state;
  },
  { foo: true, },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
