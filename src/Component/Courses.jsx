import React, { useEffect, useState } from 'react';
import Course from './Course';

const Courses = ({ handleSelect }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);
  return (
    <div className="grid grid-cols-3 w-3/4 gap-5">
      {courses.map(course => (
        <Course
          key={course.id}
          course={course}
          handleSelect={handleSelect}
        ></Course>
      ))}
    </div>
  );
};

export default Courses;
