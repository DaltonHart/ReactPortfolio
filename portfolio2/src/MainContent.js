import React, { Component } from 'react';
import About from './About.js'
import ProjectList from './ProjectList.js'
import SponsorList from './SponsorList.js'
import Contact from './Contact.js'

class MainContent extends Component {
    render() {
      return (
        <section id='main-content' className="col">
        
          <About/>
          <ProjectList/>
          <SponsorList/>
          <Contact/>

        </section>
      )
    }
  }
  
  export default MainContent;