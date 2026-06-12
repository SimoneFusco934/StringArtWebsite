import React from 'react';
import './Home.css';

import Banner from './jsComponents/Banner.js';
import Evento from './jsComponents/Evento.js';
import About from './jsComponents/About.js';
import Servizi from './jsComponents/Servizi.js';

const Home = (props) => {

  return (
    <div className="home">
      <Banner scrollToContact={props.scrollToContact} />
      <Evento />
      <About />
      <Servizi />
    </div>
  )
}

export default Home;