import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import ContactMe from './components/pages/ContactMe';
import Resume from './components/pages/Resume';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/about' exact component={About} />
          <Route path='/contact-me' exact component={ContactMe} />
          <Route path='/resume' exact component={Resume} />
         
        </Switch>
      </Router>
    </>
  );
}

export default App;

/*

 <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
*/