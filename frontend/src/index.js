import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bulma/css/bulma.min.css';
import { AdminContextProvider } from './admin/context/context';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminContextProvider>
        <App />
      </AdminContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
