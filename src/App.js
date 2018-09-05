import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import ScrollableAnchor from 'react-scrollable-anchor';

export default function App(props) {
  return (
    <div>
      <Header />
      <ScrollableAnchor id={'projects'}><About /></ScrollableAnchor>
      <Contact />
    </div>
  )
}