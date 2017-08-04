import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

const Routes = () => {
  return (
    <div>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/course/:id" component={ManageCoursePage} />
        </Switch>
      </div>
    </div>
  );
};

export default Routes;
