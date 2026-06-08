import React from 'react';
import '../cssComponents/Banner.css';



const Banner = (props) => {

  return (
    <div className="banner">
      {/*<img src={backgroundPhoto} alt="Image"></img>*/}
      {/*<div className="banner-header">*/}
      <h1>HANDMADE</h1>
      <p>Chi dice che la matematica non ha un'anima, non ha mai visto una linea retta trasformarsi in uno sguardo.</p>
      <div className="banner-button" onClick={props.scrollToContact}>CONTATTACI</div>
      {/*</div>*/}
    </div>
  )
}

export default Banner;