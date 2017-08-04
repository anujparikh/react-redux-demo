import React, {PropTypes, Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from '../routes';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container-fluid">
          <Header
            loading={this.props.loading}
          />
          <Routes/>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
