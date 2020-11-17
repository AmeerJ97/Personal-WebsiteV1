import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './LandingSection.css';
import { Link } from 'react-router-dom';



function LandingSection() {
   return (
    <div className='landing-container'>
       <video src='/videos/mixkit-light-in-the-background-of-a-virtual-3d-database-19630-medium.mp4' autoPlay loop muted />
      
      <h1>Hello World!</h1>
      { <p></p> }
      
        
        
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    
  );
}

export default LandingSection;