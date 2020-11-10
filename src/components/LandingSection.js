import React from 'react';
import '../App.css';
import { Button } from './Button';
import './LandingSection.css';


function LandingSection() {
  return (
    <div className='landing-container'>
       <video src='/videos/mixkit-light-in-the-background-of-a-virtual-3d-database-19630-medium.mp4' autoPlay loop muted />
      
      <h1>Hi I'm Ameer</h1>
      {/* <p>What are you waiting for?</p> */}
      <div className='landing-btns'>
        <Button
          className='btns-resume'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          //onClick={}
        >
          Resume <i class="fas fa-file"></i>
        </Button>
        <Button
          className='btns-linkedin'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          
          //onClick={window.open("https://www.linkedin.com/in/ameer-i-859837165/")}
        >
          LinkedIn  <i class='fab fa-linkedin' />
        </Button>
        <Button
          className='btns-github'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          //onClick={window.open("https://github.com/AmeerJ97")}
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