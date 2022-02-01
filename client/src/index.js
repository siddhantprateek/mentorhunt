import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { getConfig } from './config';
import history from './utils/history';
const onRedirectCallback = (appState) => {
  history.pushState(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  )
}


const config = getConfig();
ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain={config.domain}
      clientId={config.domain}
      audience={config.audience ? config.audience : null}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
