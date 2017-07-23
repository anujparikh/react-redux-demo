import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';

const Routes = () => {
  return (
    <div>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
        </Switch>
      </div>
    </div>
  );
};

export default Routes;