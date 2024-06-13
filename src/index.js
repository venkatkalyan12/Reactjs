
import React from 'react';
import { createRoot } from 'react-dom/client'; // Correctly import createRoot from react-dom/client
import App from './App'; // Correct path to your App component
import './styles.css';


const container = document.getElementById('root'); // Ensure this matches the id of your root HTML element
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
