import React from 'react';
// import logo from './logo.svg';
import './index.css';
import { Switch, HashRouter, Route } from 'react-router-dom';
import Home from '../Home';
import Profile from '../Profile';
import Behavior from '../Workshop/behavior';
import Ai from '../Workshop/ai';

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/cognitive-behavior-coaching-for-leaders" component={Behavior} exact />
          <Route path="/artifical-intelligence-for-business-leaders" component={Ai} exact />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
