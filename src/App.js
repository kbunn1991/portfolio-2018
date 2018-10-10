import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import ScrollableAnchor from 'react-scrollable-anchor'

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />

        <ScrollableAnchor id={'home'}>
          <Header />
        </ScrollableAnchor>
        <ScrollableAnchor id={'projects'}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
      </div>
    )
  }
}

export default App;