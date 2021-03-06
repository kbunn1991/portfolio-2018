import React from 'react';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div className="abtCont">
        <div className="whereAmI">Currently Viewing: <span>Projects, 2018</span></div>
        <div className="aboutCont">
          
          <div className="portBoxCont">
            <div className="portBoxRow">
              <div className="portBox pic1">
                <div className="pTitle"><span>Party Up!</span></div>
                <div className="pInfo">A teamfinding app for PS4.<br /><br />
                <span>frontend</span>: react, redux<br />
                <span>backend</span>: node, express, jwt

                <div className="buttonz"><a href="https://partyup-client.herokuapp.com/"><span>live</span></a> <a href="https://github.com/kbunn1991/kaitlin-partyup-client"><span>github</span></a></div>

                </div>
                </div>
              <div className="portBox pic2">
                <div className="pTitle"><span>Overwatch App</span></div>
                <div className="pInfo">Information on Overwatch heroes.<br /> <br />
                <span>frontend</span>: react<br />
                backend: n/a
                
                <div className="buttonz"><a href="https://overwatchapp.herokuapp.com/"><span>live</span></a> <a href="https://github.com/kbunn1991/overwatch-app"><span>github</span></a></div>

              </div>
              </div>
              <div className="portBox pic3">
                <div className="pTitle"><span>Bunny Babbel</span></div>
                <div className="pInfo">
                  A language app coded in a team.<br /> <br />
                  <span>frontend</span>: react, redux<br />
                  <span>backend</span>: node, express, jwt

                  <div className="buttonz"><a href="https://bunneh-client.herokuapp.com/"><span>live</span></a> <a href="https://github.com/kbunn1991/Lapine-DonnyKaitlin-Client"><span>github</span></a></div>

                </div>
              </div>
            </div>
            <div className="portBoxRow">
              <div className="portBox pic4">
                <div className="pTitle"><span>Weather FM</span></div>
                  <div className="pInfo">Mood music app coded in a team.<br /> <br />
                  <span>frontend</span>: react, redux<br />
                  <span>backend</span>: node.js, mongoDB, jwt
                  
                  <div className="buttonz"><a href="https://weatherfm-client.herokuapp.com/"><span>live</span></a> <a href="https://github.com/kbunn1991/WeatherFM-Client-PurpleCobras"><span>github</span></a></div>

                  </div>
              </div>
              <div className="portBox pic5">
              <div className="pTitle"><span>Portfolio 2018</span></div>
                <div className="pInfo">This portfolio coded in React.<br /> <br />
                <span>frontend</span>: react, css<br />
                <span>backend</span>: n/a

                <div className="buttonz"><a href="https://github.com/kbunn1991/portfolio-2018"><span>github</span></a></div>

                </div>
              </div>
              <div className="portBox pic6">
                <div className="pTitle"><span>TBA</span></div>
                <div className="pInfo">Coming soon!<br /> <br />
                <br />
                tba 💕</div>
                </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default About;