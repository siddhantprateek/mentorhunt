import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { getConfig } from './config';
import history from './utils/history';

//!todo check whether it is unnecessary
import * as serviceWorker from "./serviceWorker";

const onRedirectCallback = (applicationState) => {
  history.push(
    applicationState && applicationState.returnTo ? applicationState.returnTo : window.location.pathname
  );
};

const config = getConfig();
const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider {...providerConfig}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();

reportWebVitals();
