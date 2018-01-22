import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Display from './Display';
import Details from './Details';
import logo from './sibi.png';

class App extends Component {
  render() {
    return (
      <div>
        <div className='logo-parent' >
          <img className='logo' src={logo} alt=''/>
        </div>
        <Switch>
          <Route exact path='/' component={ Display } />
          <Route path='/details/:id' component={ Details } />
        </Switch>
      </div>
    );
  }
}

export default App;
