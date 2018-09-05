'use strict';

import React from 'react';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

export default function Header(props) {
  
  return (
    <div className="headerCont">

      <Nav />

      <center>
        <div className="circlePadding">
          <div className="circleBorder hvr-wobble-vertical">
            <div className="circle hvr-fade">
              <div className="circleText">
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
          </div>
        </div>
        <div className="circlePadding">
        <div className="circleBorder hvr-wobble-vertical">
            <div className="circle hvr-fade">
              <div className="circleText">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
        </div>
        <div className="circlePadding">
        <div className="circleBorder hvr-wobble-vertical">
            <div className="circle hvr-fade">
              <div className="circleText">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
        </div>
      </center>
      
    </div>
  )
}