import React, { useState } from 'react';

const LanguageSwitch = (props) => {

  return (
    <div className='LanguageSwitch' onClick={() => props.setIsEng(!props.isEng)}>
      <div className={`LanguageSwitch_Circle ${props.isEng ? 'is-eng' : ''}`}>
       
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" class={`bandiera ${props.isEng ? '' : 'hidden'}`}>
          <clipPath id="circleView">
            <circle cx="30" cy="15" r="15" />
          </clipPath>
          <g clip-path="url(#circleView)">
            <rect width="60" height="30" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4"/>
            <path d="M30,0 V30 M0,15 H60" stroke="#fff" stroke-width="10"/>
            <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/>
          </g>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" preserveAspectRatio="xMidYMid slice" className={`bandiera ${props.isEng ? 'hidden' : ''}`}>
          <rect width="1" height="2" fill="#008C45"/>
          <rect width="1" height="2" x="1" fill="#F4F5F0"/>
          <rect width="1" height="2" x="2" fill="#CD212A"/>
        </svg>
      
      </div>
      <div className={`LanguageSwitch_Text ${props.isEng ? '' : 'hidden'} eng`}>
        <p>ENG</p>
      </div>
      <div className={`LanguageSwitch_Text ${props.isEng ? 'hidden' : ''} ita`}>
        <p>ITA</p>
      </div>
    </div>
  )

  /*
  return (
    <div className='LanguageSwitch' onClick={() => setIsEng(!isEng)}>
      <div className={`LanguageSwitch_Circle ${isEng ? 'is-eng' : ''}`}>
        {isEng ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" class="bandiera">
          <clipPath id="circleView">
            <circle cx="30" cy="15" r="15" />
          </clipPath>
          <g clip-path="url(#circleView)">
            <rect width="60" height="30" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4"/>
            <path d="M30,0 V30 M0,15 H60" stroke="#fff" stroke-width="10"/>
            <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/>
          </g>
        </svg>
        ) : (

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" preserveAspectRatio="xMidYMid slice" className="bandiera">
            <rect width="1" height="2" fill="#008C45"/>
            <rect width="1" height="2" x="1" fill="#F4F5F0"/>
            <rect width="1" height="2" x="2" fill="#CD212A"/>
          </svg>
        )}
      </div>
      <div className={`LanguageSwitch_Text ${isEng ? 'visible' : 'hidden'} eng`}>
        <p>ENG</p>
      </div>
      <div className={`LanguageSwitch_Text ${isEng ? 'hidden' : 'visible'} ita`}>
        <p>ITA</p>
      </div>
    </div>
  )
  */
}

export default LanguageSwitch;