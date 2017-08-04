import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';
import CourseList from './CourseList';
import {BrowserRouter as Router} from 'react-router-dom';

class CoursesPage extends Component {

  /**
   * constructor to initialize state and bind functions for ES6
   * @param props
   * @param context
   */
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  /**
   * Child functions called by render
   * @param course
   * @param index
   */
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    Router.push('/course');
  }

  /**
   * Normally call the child component with mark ups
   * @returns {XML}
   */
  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses}/>
      </div>
    );
  }
}

/**
 * For validation
 * @type {{actions: (*), courses: (*)}}
 */
CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

/**
 * Redux related functions to connect component with state changes
 * @param state
 * @param ownProps
 * @returns {{courses: *}}
 */
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
