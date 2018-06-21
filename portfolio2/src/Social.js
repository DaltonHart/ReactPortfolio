import React, { Component } from 'react';

class Social extends Component {
    render() {
      return (
                    <section className="col social">
                        <h2>Join me on Social Media</h2>
                        <div className="row spacer">
                        <section className="icons col-2">
                                <a target="_blank" href="https://www.facebook.com/varenknight" className="row"><img className="svg" src="/images/Facebook.svg"/></a>
                                <a target="_blank" href="https://twitter.com/DaltonJHart" className="row"><img className="svg" src="/images/Twitter-2.svg"/></a>        
                                <a target="_blank" href="https://www.youtube.com/channel/UCFkGHDaH6q9f84_GKqnRzbg" className="row"><img className="svg" src="/images/Youtube.svg"/></a>
                                <a target="_blank" href="https://www.twitch.tv/varenmedia/" className="row"><img className="svg" src="/images/Glitch_Black_RGB.svg"/></a>        
                            </section>
                        <div className="twitterApi col container">
                            <a className="twitter-timeline" href="https://twitter.com/DaltonJHart?ref_src=twsrc%5Etfw" ></a>
                        </div>
                    </div>
                    </section>
      );
    }
  }
  
  export default Social;