import React from 'react';

const ComputerMenu = (props) => {

  return (
    <div className="computer-menu">
      <div onClick={props.scrollToExpertise} className="Skills">{props.isEng ? "Expertise" : "Competenze"}</div>
      <div onClick={props.scrollToExperience} className="Work">{props.isEng ? "Experience" : "Esperienza"}</div>
      <div onClick={props.scrollToProject} className="Projects">{props.isEng ? "Projects" : "Progetti"}</div>
      <div onClick={props.scrollToAbout} className="About">About</div>
    </div>
  );
};

export default ComputerMenu;