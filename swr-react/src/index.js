import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';
import axios from 'axios';

import reportWebVitals from './reportWebVitals';
import App from './App';

const host = "https://api.chucknorris.io";
const fetcher = async (path) => await axios.get(`${host}/${path}`).then(response => response.data);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SWRConfig value={{
    fetcher,
    isValidating: false
  }}>
    <App />
  </SWRConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
