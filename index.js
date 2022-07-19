
//(index.js)This is the first code initiated initially when js runs on browser
import React from 'react';
import ReactDOM from 'react-dom/client';//here the react dom object is imported from the third party library(react/dom/client)

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));//create root creates the main entry point for the user interface from the reactDOM
//the root in get element by id is taken fro  index.html in public folder as an id 
root.render(<App />);
//syntax called JSX<App />
