'use strict';

import React from 'react';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

class Contact extends React.Component {
  
  render() {
    return (
      <div className="headerCont">

        {/* <Nav /> */}

        <center>
          <a href="https://github.com/kbunn1991"><div className="circlePadding">
              <div className="circleBorder hvr-wobble-vertical">
                <div className="circle hvr-fade">
                  <div className="circleText">
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                </div>
              </div>
            </div>
          </a>
          
          <a href="https://linkedin.com/in/kbunn1991/">
            <div className="circlePadding">
              <div className="circleBorder hvr-wobble-vertical">
                <div className="circle hvr-fade">
                  <div className="circleText">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="mailto:kabunn1991@gmail.com">
            <div className="circlePadding">
            <div className="circleBorder hvr-wobble-vertical">
                <div className="circle hvr-fade">
                  <div className="circleText">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </center>
        
      </div>
    )
  }
}

export default Contact;