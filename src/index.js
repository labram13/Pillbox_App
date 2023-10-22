import React from 'react';
import ReactDOM from 'react-dom/client';
import Data from './data/merged-cleaned-drugs.json';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'

//import CSS
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

console.log("hello!");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App drugsList={Data}/>
  </BrowserRouter>
);