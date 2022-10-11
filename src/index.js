import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AlertContextProvider } from './Context/alert/AlertContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AlertContextProvider>
        <App />
      </AlertContextProvider>
  </React.StrictMode>
);