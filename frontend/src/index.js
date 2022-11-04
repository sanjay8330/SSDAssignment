import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-qnou8xkfjg4shami.us.auth0.com'
      clientId='Nn7jSBVbAsjsPXXTciX5tLc6COZ6O0pP'
      redirectUri={window.location.origin}
      audience='Unique identifier'
      scope='openid profile email'
    >
      <App />
    </Auth0Provider>

  </React.StrictMode>
);
