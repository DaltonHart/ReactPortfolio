import React, { Component } from 'react';
import Project from './Project'

class ProjectList extends Component {
  
    render() {
      let projectsList = [
        {
          img: '/images/monument.png',
          title: 'Monument Mock Up',
          description: 'For this project I took a full mockup and recreated it into a full functioning website.',
          url: 'https://github.com/DaltonHart/Monument-Mockup'
        },
        {
          img: '/images/geoquake.png',
          title: 'Geoquakes',
          description: 'A fun project to combine two apis into a website. Combined the google maps Api and and earthquake information into a live map showing earthquake locations.',
          url: 'https://github.com/DaltonHart/Geoquakes'
        },
        {
          img: '/images/website.png',
          title: 'Portfolio Site',
          description: 'This entire website was made by myself. Feel free to check out the Github!',
          url: 'https://github.com/DaltonHart/Personal-Site'
        },
        {
          img: '/images/website.png',
          title: 'Portfolio Site',
          description: 'This entire website was made by myself. Feel free to check out the Github!',
          url: 'https://github.com/DaltonHart/Personal-Site'
        },
        {
          img: '/images/website.png',
          title: 'Portfolio Site',
          description: 'This entire website was made by myself. Feel free to check out the Github!',
          url: 'https://github.com/DaltonHart/Personal-Site'
        },
      ];

      const refactoredProjectsList = projectsList.map(project => {
        return <Project project={project} />;
      });

      return (
        <section id="projects" className="row">
            <h2>Projects</h2>
                <section className="row cardSection">
                {refactoredProjectsList}
                </section>
        </section>
      )
    }
  }
  
  export default ProjectList;