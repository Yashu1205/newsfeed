import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  { Provider } from 'react-redux'
import configurStore from './store/configureStore'


const store = configurStore()

store.subscribe(() => {
  store.getState()
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

