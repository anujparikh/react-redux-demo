import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from '../routes';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container-fluid">
          <Header />
          <Routes/>
        </div>
      </Router>
    );
  }
}

export default App;
