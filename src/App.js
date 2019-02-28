import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div class="welcome-text">Sapota</div>
        </header>
        <main className="App-main">
          <div class="top-main">Chao cac ban. Toi la <strong class="yellow-radius">Sapota</strong> Front end developer</div>
          <div>Hien nay toi dang nghien cuu ve ReactJs va day la bai tap ve nha cua toi.fdsdfsddfds</div>
        </main>
      </div>
    );
  }
}

export default App;
