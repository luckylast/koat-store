import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
  return (
    <div className="rows">
      {courses.map(course =>
        <CourseListRow key={course.id} course={course}/>
      )}
    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
