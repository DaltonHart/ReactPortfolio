import React, { Component } from 'react';
import './main.css';
import Header from './Header';
import MainContent from './MainContent'

class App extends Component {
  
  render() {
    return (
      <main class="whole-container row">
        <Header/>
        <MainContent/>
      </main>
    );
  }
}

export default App;
