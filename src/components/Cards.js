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
              text='Designing a YB-DCFA Laser Amplification System!'
              label='Photonics, Breakthrough Starshot'
              path='/projects'
            />
            <CardItem
              src='images/Quadcopter.jpg'
              text='Building a Quadcopter!'
              label='Control Systems, C/C++'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/logo-og.png'
              text='Fullstack development hosted on a Home Server'
              label='React, Ubuntu, Apache, SQL-server '
              path='/projects'
            />
            <CardItem
              src='images/circuit-board-23.jpg'
              text='Building a Full Circuit Simulator!'
              label='Circuit Analysis, MATLAB'
              path='/projects'
            />
            <CardItem
              src='images/Machine-Learning-COVID-19-Concept.jpg'
              text='COVID-19 Classifier!'
              label='Machine Learning'
              path='/contact-me'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;