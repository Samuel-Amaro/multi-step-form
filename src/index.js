import React from 'react';
import ReactDOM from 'react-dom/client';
import "./normalize.css";
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.querySelector(".main"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

