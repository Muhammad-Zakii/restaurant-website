import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sweets from './components/CompleteMenu/Sweets/Sweets';
import LunchAndDinner from './components/CompleteMenu/DinnerAndLunch/DinnerLunch';
import BreakFast from './components/CompleteMenu/BreakFast/BreakFast';
import Main from './components/HomePage/index';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Main} />
      <Route path='/sweets' component={Sweets} />
      <Route path='/breakfast' component={BreakFast} />
      <Route path='/lunchanddinner' component={LunchAndDinner} />
      <Footer />
    </Router>
  );
}

export default App;
