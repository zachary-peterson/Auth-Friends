import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login';
import { Boop } from './components/Boop';
import PrivateRoute from './components/PrivateRoute';
import { Protected } from './components/Protected';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <br />
        <Link to='/protected'>Protected Page</Link>
      </nav>

      <Switch>
        <PrivateRoute path='/protected' component={Protected} />
        <Route exact path='/login' component={Login} />
        <Route exact component={Boop} />
      </Switch>
    </div>
  );
}

export default App;
