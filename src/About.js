import React from 'react';
import './About.css';

export default function About(props) {
  return (
    <div className="abtCont">
      <div className="whereAmI">Currently Viewing: <span>Projects, 2018</span></div>
      <div className="aboutCont">
        
        <div className="portBoxCont">
          <div className="portBoxRow">
            <div className="portBox pic1">
              <div className="pTitle"><span>Party Up!</span></div>
              <div className="pInfo">A teamfinding app for PS4.<br /><br />
              <span>frontend</span>: react<br />
              <span>backend</span>: blah blah</div>
              </div>
            <div className="portBox pic2">
              <div className="pTitle"><span>Overwatch App</span></div>
              <div className="pInfo">Information on Overwatch heroes.<br /> <br />
              <span>frontend</span>: react<br />
              backend: n/a</div>
            </div>
            <div className="portBox pic3">
              <div className="pTitle"><span>Noteful</span></div>
              <div className="pInfo">
                A notes app to create and store.<br /> <br />
                <span>frontend</span>: html5, css<br />
                backend: n/a
              </div>
            </div>
          </div>
          <div className="portBoxRow">
            <div className="portBox pic4"></div>
            <div className="portBox pic5"></div>
            <div className="portBox pic6"></div>
          </div>
        </div>

      </div>
    </div>
  )
}

let languages = ['bla', 'bla', 'bla']

languages