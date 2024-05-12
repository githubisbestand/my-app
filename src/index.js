import React from 'react';
import ReactDOM from 'react-dom/client';
import Apps from './Apps';
//import { Provider } from "react-redux";
//import { store } from './react-crud/store/store.js';
//import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Apps />
);

/*
 <React.StrictMode>
  <Provider store={store}>
      <App />
  </Provider>
</React.StrictMode>
*/