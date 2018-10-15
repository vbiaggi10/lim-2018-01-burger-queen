import React, { Component } from 'react';
import './App.css';
import TakeName from './components/take_name/TakeName';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="lime lighten-1">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo center">🍔 BURGER QUEEN 👑</a>
            </div>
          </nav>
          <TakeName />
      </div>
    );
  }
}

export default App;
