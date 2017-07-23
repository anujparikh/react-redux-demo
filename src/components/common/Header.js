import React from 'react';
import {NavLink} from 'react-router-dom';
import img from '../../images/pluralsight-logo.png';

const Header = () => {
  return (
  <div className="container-fluid">
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </button>
          <NavLink to="/" className="navbar-brand">
            <img src={img} alt="Pluralsight Logo"/>
          </NavLink>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/courses">Courses</NavLink></li>
            <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
};

export default Header;