
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/style.scss';

// view
import Nav from './common/nav/Nav';
import HomeVC from './home/vc/HomeVC';
import UserHomeVC from './user/vc/UserHomeVC';

class App extends Component<{}, {}> {
  render() {
    return (<div className='app'>
      <Nav />
      <Switch>
        <Route exact path='/' component={HomeVC} />
        <Route path='/user' component={UserHomeVC} />
      </Switch>
    </div>
    );
  }
}

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
