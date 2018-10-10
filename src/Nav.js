import React from 'react';
import './Nav.css'

class Nav extends React.Component {
  render() {
    return (
      <h3>
        <a href="#home">home</a> // <a href="#projects">projects</a> // <a href="#contact">contact</a>
      </h3>
    )
  }
}

export default Nav;