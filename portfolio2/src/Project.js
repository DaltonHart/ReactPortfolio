import React, { Component } from 'react';

class Project extends Component {
    render() {
      return (
            <div className="card text-center" >
              <img className="card-img-top" src={this.props.project.img} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{this.props.project.title}</h5>
                <p className="card-text">{this.props.project.description}</p>
                <a href={this.props.project.url} className="btn btn-primary">Github</a>
              </div>
            </div>
      )
    }
  }
  
  export default Project;