import React from 'react';
import ReactDOM from 'react-dom/client';

import MaterialTheme from './core/material/materialThems';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<MaterialTheme><App /></MaterialTheme>)

