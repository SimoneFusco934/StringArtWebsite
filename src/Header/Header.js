import React from 'react';
import LanguageSwitch from './jsComponents/LanguageSwitch';
import ComputerMenu from './jsComponents/ComputerMenu';
import MobileMenu from './jsComponents/MobileMenu';
import './Header.css';
import './cssComponents/MobileMenu.css';
import './cssComponents/LanguageSwitch.css';
import './cssComponents/ComputerMenu.css';

import Logo from '../assets/LOGO.png';

const Header = (props) => {
  return (
    <div className='header'>
      <img src={Logo} className="header-img"></img>
      {/*<LanguageSwitch isEng={props.isEng} setIsEng={props.setIsEng} />*/}
      {/*<MobileMenu isEng={props.isEng} scrollToExpertise={props.scrollToExpertise} scrollToExperience={props.scrollToExperience} scrollToProject={props.scrollToProject} scrollToAbout={props.scrollToAbout} />
      <ComputerMenu isEng={props.isEng} scrollToExpertise={props.scrollToExpertise} scrollToExperience={props.scrollToExperience} scrollToProject={props.scrollToProject} scrollToAbout={props.scrollToAbout} />*/}
    </div>
  )
}

export default Header;