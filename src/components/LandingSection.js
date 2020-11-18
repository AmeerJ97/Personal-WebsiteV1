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
       <p> I'm Ameer, an Electrical Engineer graduating from McGill Univseity.</p> 
       <p2> I'm passionate about building systems. </p2>
         {/* <p2> I have strong interests in Networks, Data Science, and Photonics.</p2>
         <p2> I'm currently looking for my first fulltime position, idealy in a company that</p2>
         <p2> provides me with the opportunity to work on and learn from interesting projects.</p2> */}
      
    
      
        
        
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