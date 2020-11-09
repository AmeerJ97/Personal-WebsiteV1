import React from 'react';
import '../App.css';
import { Button } from './Button';
import './LandingSection.css';

function LandingSection() {
  return (
    <div className='landing-container'>
       <video src='/videos/video-2.mp4' autoPlay loop muted />
      
      <h1>Hi I'm Ameer</h1>
      {/* <p>What are you waiting for?</p> */}
      <div className='landing-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Resume
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