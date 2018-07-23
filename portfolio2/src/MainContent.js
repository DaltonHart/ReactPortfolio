import React, { Component } from 'react';
import About from './About.js'
import ProjectList from './ProjectList.js'
import SponsorList from './SponsorList.js'
import Contact from './Contact.js'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor';
import { Parallax } from 'react-scroll-parallax';

 
configureAnchors({offset: 0, scrollDuration: 100})

class MainContent extends Component {
    render() {
      return (
        <section id='main-content' className="col">

        <ScrollableAnchor id={'section1'}>
          <About/>
        </ScrollableAnchor>
        
        <ScrollableAnchor id={'section2'}>
          <ProjectList/>
        </ScrollableAnchor>

        <ScrollableAnchor id={'section3'}>
          <SponsorList/>
        </ScrollableAnchor>
        
        <ScrollableAnchor id={'section4'}>
          <Contact/>
        </ScrollableAnchor>
          
          
          
          

        </section>
      )
    }
  }
  
  export default MainContent;