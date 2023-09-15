import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { TfiMoney } from 'react-icons/Tfi';

const Course = ({ course, handleSelect }) => {
  // console.log(course);
  // console.log(handleSelect);
  const { image, course_name, course_details, course_price, course_credit } =
    course;
  return (
    <div className="px-3 py-6 rounded-lg shadow-lg h-100 space-y-3 ">
      <img className="h-40" src={image} alt="" />
      <h3 className="text-lg font-semibold  text-left">{course_name}</h3>
      <div className="h-20">
        <p className="text-sm text-left ">{course_details}</p>
      </div>
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <span>
            <TfiMoney></TfiMoney>
          </span>
          <p>Price: {course_price}</p>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-sm">
            <FaBookOpen></FaBookOpen>
          </span>
          <p>Credit: {course_credit}</p>
        </div>
      </div>
      <button
        onClick={() => handleSelect(course)}
        className="w-full py-2 bg-blue-400 rounded-lg text-white hover:bg-blue-900"
      >
        Select
      </button>
    </div>
  );
};

export default Course;
