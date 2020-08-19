import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Login from './components/Login';
import { Boop } from './components/Boop';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact component={Boop} />
    </Switch>
  );
}

export default App;
