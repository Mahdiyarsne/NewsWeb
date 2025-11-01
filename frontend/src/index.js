import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bulma/css/bulma.css';
import { AdminContextProvider } from './admin/context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdminContextProvider>
      <App />
    </AdminContextProvider>
  </React.StrictMode>
);
