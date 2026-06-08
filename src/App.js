import React, { useState } from 'react';
import './App.css';

import Header from './Header/Header.js';
import Home from './Home/Home.js';
import Contact from './Contact/Contact.js';
import Footer from './Footer/Footer.js';
import { useSmoothScroll } from './scorrimentoSmooth.js';

function App() {

  const [contactRef, scrollToContact] = useSmoothScroll();

  return (
    <div className="App">
      {/*<Header />*/}
      <Home scrollToContact={scrollToContact} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
