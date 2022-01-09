import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
// import { AuthProvider } from '@auth0/auth0-react'
ReactDOM.render(
  <BrowserRouter>
    {/* <AuthProvider> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    {/* </AuthProvider> */}
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
