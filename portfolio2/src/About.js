import React, { Component } from 'react';

class About extends Component {
    render() {
      return (
            <section id="home" className="row clearfix ">
                        <section className="collage col-4 clearfix">
                            <section className="collage-col row clearfix">
                            <section className="left col-6 clearfix">
                                    <img className="row" src="/images/19390625_1473492146031059_8680993486334767572_o.jpg"/>
                                    <img className="row" src="/images/22730618_1581368945243378_8102404034698418713_n.jpg"/>
                                    <img className="row" src="/images/27858257_1684415764938695_4971176944652139299_n.jpg"/>
                            </section>
                            <section className="right col-6 clearfix">
                                    <img className="row" src="/images/24312459_1622220974491508_1544465324666752224_n.jpg"/>
                                    <img className="row" src="/images/29597433_1733822883331316_3515013680891218003_n.jpg"/>
                                    <img className="row" src="/images/31949686_1768416326538638_9136480776827699200_o.jpg"/>
                            </section>
                        </section>
                        </section>

                        <article className="about col-4">
                            <section className="name">
                            <h1>Dalton Hart</h1>
                            <h2>Fullstack Web Developer</h2>
                            <h4>Graphic Designer - Geek at Heart</h4>
                            </section>
                            <section className="aboutMe">
                                <p>“Let your design and leadership influence the world around you in a positive way.” </p>
                            <p>As a Full Stack Developer that has a degree in Graphic Design, I work to help evolve the living ecosystem that is the web. My previous experience have lead me to excel at Sales, Customer Interaction, Data Analytics, and Responsive Customer Forward Design.</p>
                            <p>Skills:</p>
                            <ul>
                                <li>Languages: HTML5, CSS3, React, Javascript, Python, Django,Redux,Solidity</li>
                                <li>Platforms & Frameworks: Node.js,, Express, AngularJS</li>
                                <li>Databases:MongoDB, Mongoose.js</li>
                                <li>Technologies: AJAX, Bootstrap,Github/Git, jQuery,GETH,ETH</li>
                            </ul>
                            </section>
                            
                        </article>

                        <div id="particles-js" className="col-4"></div>
                </section>
      )
    }
  }
  
  export default About;