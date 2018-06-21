import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Social from './Social';

class Contact extends Component {
    render() {
      return (
        <section id="contact-me" className="row">
                    <ContactForm/>
                    <Social/>
            <div id="map"></div>
        </section>
      );
    }
  }
  
  export default Contact;