import React from 'react';
import '../App.css';
import { Button } from './Button';
import './LandingSection.css';
import { Button_github } from './Button_github';
import { Button_linkedin } from './Button_linkedin';

function LandingSection() {
  return (
    <div className='landing-container'>
       <video src='/videos/mixkit-light-in-the-background-of-a-virtual-3d-database-19630-medium.mp4' autoPlay loop muted />
      
      <h1>Hi I'm Ameer</h1>
      {/* <p>What are you waiting for?</p> */}
      <div className='landing-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          //onClick={}
        >
          Resume
        </Button>
        
        <Button_linkedin
          className='btn-linkedin'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          //onClick={}
        >
          LinkedIn
        </Button_linkedin>
        <Button_github
          className='btn-github'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          //onClick={}
        >
          Github
        </Button_github>

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