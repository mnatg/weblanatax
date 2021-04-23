// React
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

// Component
import AppRouter from './routers/AppRouter';
//Auth
import { FirebaseAppProvider } from 'reactfire';
import fireConfig from './firebase-config';


ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={fireConfig}>
      <Suspense>
        <AppRouter />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();