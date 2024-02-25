// Importing React and ReactDOM from 'react' and 'react-dom/client' respectively

import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the main styling for the application

import './index.css';

// Importing the main component of the application

import App from './App';
import reportWebVitals from './reportWebVitals';

// Importing FontAwesome icons and adding the 'faAngleDown' icon to the library

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDown)

// Creating a root using ReactDOM.createRoot and rendering the main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
