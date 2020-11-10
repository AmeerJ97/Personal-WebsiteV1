import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './LandingSection.css';
import { Link } from 'react-router-dom';
import { Lutton } from './Lutton'


function LandingSection() {
   return (
    <div className='landing-container'>
       <video src='/videos/mixkit-light-in-the-background-of-a-virtual-3d-database-19630-medium.mp4' autoPlay loop muted />
      
      <h1>Hi I'm Ameer</h1>
      {/* <p>What are you waiting for?</p> */}
      <div className='landing-btns'>
        <Link to=''>
        <Lutton
          className='ltns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          //onClick={window.open('https://www.linkedin.com/in/ameer-i-859837165/')}
        >
          Resume 
        </Lutton>
        </Link>
        <Link to='//www.linkedin.com/in/ameer-i-859837165/'>
        <Lutton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          
          //onClick={}
        >
          LinkedIn  <i class='fab fa-linkedin' />
        </Lutton>
        </Link>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          //onClick={}
        >
          Github <i class='fab fa-github' />
        </Button>

        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default LandingSection;