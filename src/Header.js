'use strict';

import React from 'react';
import Nav from './Nav';
import './Header.css';

class Header extends React.Component {
  
  render() {
    return (
      <div className="headerCont">

        <h1>
          kait<span>lin</span> &lt;/&gt;
        </h1>
        <div className="underInfo">
          Hello world! I'm Kait — an ATL-based full-stack developer and designer that makes beautiful, responsive websites and web applications. <a href="#contact"><span>Let's chat!</span></a>

          <p className="skillz type-it">const <span>languages</span> = [css, HTML5, javascript, node.js];<br />
          const <span>databases</span> = [sql, mongodb];<br />
          const <span>libraries</span> = [react, redux];<br />
          const <span>tools</span> = [developer tools, github, postman]</p>
        </div>
      </div>
    )
  }
}

export default Header;