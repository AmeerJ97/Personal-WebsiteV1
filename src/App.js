import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import ContactMe from './components/pages/ContactMe';
import Project_photonics from './components/pages/Project_photonics'
import Project_quadcopter from './components/pages/Project_quadcopter'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/about-me' exact component={About} />
          <Route path='/contact-me' exact component={ContactMe} />
          <Route path='/projects/laser-amplifier' exact component={Project_photonics} />
          <Route path='/projects/quadcopter'exact component={Project_quadcopter} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

