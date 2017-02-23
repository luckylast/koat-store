import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
  return (
    <div className="col-md-4">
      <div className="thumbnail">
        <a href="" target="_blank">
          <img src={course.image} alt="Lights" className="product-thumbnail" />
          <div className="caption">
            <p>
              <Link to={'/course/' + course.id}>{course.title}</Link><br/>
              {course.category}<br/>
              {course.price}<br/>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;
