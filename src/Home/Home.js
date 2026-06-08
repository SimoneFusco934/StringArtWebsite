import React from 'react';
import './Home.css';

import Banner from './jsComponents/Banner.js';
import About from './jsComponents/About.js';
import Servizi from './jsComponents/Servizi.js';

const Home = (props) => {

  return (
    <div className="home">
      <Banner scrollToContact={props.scrollToContact} />
      <About />
      <Servizi />
    </div>
  )
}

export default Home;