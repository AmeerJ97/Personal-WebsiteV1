import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Breakthroughstarshot - Copy.jfif'
              text='Designing a YB-DCFA Laser Amplification System'
              label='Photonics, Breakthrough Starshot'
              path='/projects/laser-amplifier'
            />
            <CardItem
              src='images/Quadcopter1.jpg'
              text='Building a Quadcopter'
              label='Control Systems, C/C++'
              path='/projects/quadcopter'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/circuit-board-23.jpg'
              text='Building a Full Circuit Simulator'
              label='Circuit Analysis, MATLAB'
              path='/projects/circuit-simulator'
            />
             <CardItem
              src='images/MachineLearninginMarketing-1621x1000.jpg'
              text='Softmax Regressor to analyze Cardiotocography Data'
              label='Machine Learning, Data Science'
              path='/projects/softmax-cardiotocography'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;