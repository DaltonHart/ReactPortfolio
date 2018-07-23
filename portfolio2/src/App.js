import React, { Component } from 'react';
import './main.css';
import Header from './Header';
import MainContent from './MainContent'
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  
  render() {
    return (
      <main class="whole-container row">
        <Header/>
        <ParallaxProvider>
        <MainContent/>
        </ParallaxProvider>
      </main>
    );
  }
}

export default App;
