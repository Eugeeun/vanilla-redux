import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

const root = document.querySelector('#root');

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
