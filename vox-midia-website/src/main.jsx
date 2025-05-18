import ReactDOM from 'react-dom/client';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router';


// Esse App contem o retorno do router com os caminhos que configuramos
// O Router Provider está nele
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
