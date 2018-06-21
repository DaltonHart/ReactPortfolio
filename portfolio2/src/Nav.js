import React, { Component } from 'react';

class Nav extends Component {
    render() {
      return (
        <nav className="navBar row">
            <a href="#">
                <img className="svg active" src="/images/Home.svg"/>
            </a>
            <a href="#">
                <img className="svg" src="/images/Floder-1.svg"/>
            </a>
            <a href="#">
                <img className="svg" src="/images/Speech Bubble-9.svg"/>
            </a>
            <a href="#">
                <img className="svg" src="/images/Envelope-1.svg"/>
            </a>
        </nav>
      );
    }
  }
  
  export default Nav;