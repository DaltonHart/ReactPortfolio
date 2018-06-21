import React, { Component } from 'react';

class Sponsor extends Component {
    render() {
      return (
            <div className="sponsor card text-center " >
              <img className="card-img-top" src={this.props.sponsor.img} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{this.props.sponsor.name}</h5>
                <p className="card-text">{this.props.sponsor.message}</p>
              </div>
            </div>
      )
    }
  }
  
  export default Sponsor;