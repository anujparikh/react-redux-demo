import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';

class CoursesPage extends Component {

  /**
   * constructor to initialize state and bind functions for ES6
   * @param props
   * @param context
   */
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {
        title: ''
      }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  /**
   * Child functions called by render
   * @param event
   */
  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({
      course: course
    });
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  /**
   * Normally call the child component with mark ups
   * @returns {XML}
   */
  render() {
    return (
    <div>
      <h1>Courses</h1>
      {this.props.courses.map(this.courseRow)}
      <h2>Add Course</h2>
      <input type="text"
             onChange={this.onTitleChange}
             value={this.state.course.title}
      />

      <input type="submit"
             onClick={this.onClickSave}
             value="Save"
      />
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
