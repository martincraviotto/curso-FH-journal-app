import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { JuornalApp } from './JuornalApp';
import { store } from './store';

import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JuornalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

