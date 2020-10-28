import React from 'react';
import logo from './assets/imagenes/logo.svg';
import './assets/css/App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Mi Primer Proyecto</h1>
        <p>
          Hola Soy Isaias
        </p>
        <nav>
          <ul>
          <a href="">
            menu
          </a>
          </ul>
        </nav>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
