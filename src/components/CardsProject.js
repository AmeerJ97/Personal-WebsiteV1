import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards_project() {
  return (
    <div className='cards'>
      <h1>Here are my featured projects</h1>
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
          <h1> Other noteworthy projects</h1>
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
              label='Machine Learning, Data Science, Python'
              path='/projects/softmax-cardiotocography'
            />
              <CardItem
              src='images/Machine-Learning-COVID-19-Concept.jpg'
              text='K-NN Covid-19 Regressor'
              label='Machine Learning, Data Science, Python'
              path='/projects/KNN-covid-19'
            />
              <CardItem
              src='images/madmax---copy.png'
              text='Autonomous Search-and-Recover Robot'
              label='Robotics / Java'
              path='/projects/autonomous-search-and-recover'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards_project;