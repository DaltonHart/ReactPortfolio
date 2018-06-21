import React, { Component } from 'react';
import Nav from './Nav.js'

class Header extends Component {
    render() {
      return (
        <div>
            <header className="side-container col-2">
                <img id="logo" src="/images/personallogo.png"/>
                    <Nav />
                    <div className=" footer row">
                        <span>&copy;DaltonH 2018</span>
                    </div>
                </header>
        </div>
      );
    }
  }
  
  export default Header;