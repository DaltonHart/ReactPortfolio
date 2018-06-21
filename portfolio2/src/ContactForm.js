import React, { Component } from 'react';

class Contact extends Component {
    render() {
      return (
                   <div className="contact-form col">
                            <h2> GET IN TOUCH! </h2>
                        <form className="row">
                            <div className="row clearfix">
                                <div className="row"> 
                                    <input className="name" type="name" name="name" placeholder="NAME"/>
                                </div>
                                <div className="row">
                                    <input className="email" type="text" name="Email Address" placeholder="EMAIL"/>
                                </div>
                                <div className="row">
                                        <input className="name" type="text" name="subject" placeholder="SUBJECT"/>
                                </div>
                            </div>    
                            <div className="row comment">
                                    <textarea className="comment" name="comment" row="8" cols="20" placeholder="COMMENT"></textarea>
                            </div>
                            <div className="row submit">
                                    <input className="sumbitBut" type="submit" value="SUBMIT"/>
                            </div>
                        </form>
                    </div>
      );
    }
  }
  
  export default Contact;