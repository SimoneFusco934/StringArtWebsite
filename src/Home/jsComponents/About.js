import React, { useState } from 'react';
import '../cssComponents/About.css';


import Adamo from './Adamo';

const About = () => {

  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setSliderPos(newValue);
  }

  return (
    <div className="about">

      {/*<Adamo />*/}

      <h1>STRING ART</h1>
      <span></span>
      <p>La String Art è una raffinata tecnica artistica che trasforma linee geometriche in opere d'arte. Il processo ha inizio con una base lignea sulla quale vengono disposti con precisione i chiodi, definendo il perimetro dell'opera. Successivamente, attraverso un lavoro di intreccio manuale con un unico filo continuo, prendono vita forme, sfumature e volumi. Emozioni Intrecciate si pone l'obiettivo di reinterpretare questo artigianato tradizionale in chiave contemporanea. La nostra Start-Up è specializzata nella progettazione e realizzazione di opere uniche e su misura. Ogni pezzo è il risultato di ore di precisione millimetrica, il che garantisce l'assoluta irripetibilità di ogni creazione. Che si tratti di valorizzare uno spazio commerciale, un ufficio o un ambiente domestico, le nostre opere sono pensate per catturare l'attenzione e ridefinire il concetto di decorazione d'interni. Non creiamo semplici quadri, diamo forma alle vostre emozioni attraverso il filo.</p>
      <div className="about-slider-container">
        <div className="slider-image img-before" style={{clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}></div>
        <div className="slider-image img-after"></div>
        <div className="slider-line" style={{left: `${sliderPos}%` }}></div>
        <div className="slider-button" style={{left: `${sliderPos}%` }}>

       
        <svg fill="#000000" width="30px" height="39px" viewBox="0 0 24 24" id="left-right-scroll-bar-2" className="icon line">
          <polyline
            id="primary"
            points="5 10 3 12 5 14"
            style={{
              fill: "none",
              stroke: "#000",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 1.5,
            }}
          />

          <polyline
            id="primary-2"
            data-name="primary"
            points="19 14 21 12 19 10"
            style={{
              fill: "none",
              stroke: "#000",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 1.5,
            }}
          />

          <path
            id="primary-3"
            data-name="primary"
            d="M12,6V18M8,12H3m13,0h5"
            style={{
              fill: "none",
              stroke: "#000",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 1.5,
            }}
          />
        </svg>        

        </div>
        <input type="range" min="0" max="100" value={sliderPos} className="slider" id="image-slider" onChange={handleSliderChange}></input>
      </div>
    </div>
  )
}

export default About;