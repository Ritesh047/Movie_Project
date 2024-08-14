import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Adjust the import path as necessary
import { Provider } from 'react-redux';
import store from './redux/store'; // Adjust the import path as necessary

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
