import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/HomePage/index';
import Footer from './components/Footer';

const Sweets = lazy(() => import('./components/CompleteMenu/Sweets/Sweets'));
const LunchAndDinner = lazy(() => import('./components/CompleteMenu/DinnerAndLunch/DinnerLunch'));
const BreakFast = lazy(() => import('./components/CompleteMenu/BreakFast/BreakFast'));



const CenteredFallback = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Take the full height of the viewport
    }}
  >
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <Route exact path='/' component={Main} />

      <Suspense fallback={<CenteredFallback/>}>
        <Route path='/sweets' component={Sweets} />
        <Route path='/breakfast' component={BreakFast} />
        <Route path='/lunchanddinner' component={LunchAndDinner} />
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
