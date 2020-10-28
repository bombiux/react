import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Noticias from './components/Noticias';
import "./assets/scss/default.scss";
import Cabezera from './components/Cabezera';

ReactDOM.render(
  <React.StrictMode>
    <Cabezera />
    <h1 className="titulares">Nacionales</h1>
    <Noticias />
    <h1 className="titulares">Internacionales</h1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
