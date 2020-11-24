import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './LandingSection.css';




function LandingSection() {
   return (
    <div className='landing-container'>
       <video src='/videos/mixkit-light-in-the-background-of-a-virtual-3d-database-19630-medium.mp4' autoPlay loop muted />
      
      <h1>Hello World!</h1>
       <p> I'm Ameer, an Electrical Engineer graduating from McGill Univseity.</p> 
       <p2> I'm passionate about building systems. </p2>      
      </div>
    
  );
}

export default LandingSection;