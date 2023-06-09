import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);