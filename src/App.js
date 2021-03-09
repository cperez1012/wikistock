import logo from './WikiStock.png';
import './App.css';
import React from 'react';
// import { Route } from 'react-router-dom';
// import Stocks from './components/Stocks.js';

class App extends React.Component{

  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>

          <p>
            The leading stock information site on the web.
          </p>
        </header>
        
      </div>
    );
  }
}

export default App;
