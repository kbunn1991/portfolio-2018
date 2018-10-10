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
          Hello world! I'm Kait — an ATL-based full-stack developer and designer that makes beautiful, responsive websites and web applications. <span>Let's chat!</span>

          <p className="skillz type-it">let <span>languages</span> = [css, HTML5, javascript, node.js];<br />
          let <span>databases</span> = [sql, mongodb];<br />
          let <span>libraries</span> = [react];</p>
        </div>
      </div>
    )
  }
}

export default Header;