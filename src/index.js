import React from 'react';
import ReactDOM from 'react-dom/client';
import { JuornalApp } from './JuornalApp';

import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JuornalApp />
  </React.StrictMode>
);

