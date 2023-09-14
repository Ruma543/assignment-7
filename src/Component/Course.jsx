import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { TfiMoney } from 'react-icons/Tfi';

const Course = ({ course }) => {
  console.log(course);
  const { image, course_name, course_details, course_price, course_credit } =
    course;
  return (
    <div className="px-3 py-6 rounded-lg shadow-lg h-100 space-y-3">
      <img className="h-40" src={image} alt="" />
      <h3 className="text-lg font-semibold  text-left">{course_name}</h3>
      <p className="text-sm text-left h-15 ">{course_details}</p>
      <div className="flex justify-between ">
        <div className="flex gap-2">
          <span>
            <TfiMoney></TfiMoney>
          </span>
          <p>Price: {course_price}</p>
        </div>
        <div className="flex gap-2">
          <span className="text-sm">
            <FaBookOpen></FaBookOpen>
          </span>
          <p>Credit: {course_credit}</p>
        </div>
      </div>
      <button className="w-full py-2 bg-blue-400 rounded-lg text-white">
        Select
      </button>
    </div>
  );
};

export default Course;
