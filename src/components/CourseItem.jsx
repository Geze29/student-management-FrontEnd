import React from "react";
import { useNavigate } from "react-router-dom";

export default function CourseItem({ course, index }) {
  const navigator = useNavigate();

  return (
    <div className="pb-6">
      <div className="">
        <div className="bg-grayish-156 py-2 pl-2 sm:rounded-l-lg rounded-tr-lg  sm:text-xl font-light ">
          <span className="sm:pr-6">
            {index}. {course.courseName}
          </span>
          <span className="px-3 sm:px-28">{course.enrollmentType}</span>
          <span className="px-3 sm:px-16"> {course.status} </span>
          <button
            onClick={() => {navigator(`students/${course.id}`)}}
            className="bg-blue-950 text-white  rounded px-2">
            See Students
          </button>
        </div>
      </div>
      <div className="sm:pl-16">
        <div className="bg-grayish-156 flex justify-normal sm:rounded-b-lg flex-col sm:flex-row">
          <div className="pl-6 py-4">
            <img className="sm:h-24  w-20 sm:w-32" src={course.backgroundURL} />
          </div>
          <div className="pr-20 py-4 px-5 sm:text-xl sm:font-light  ">
            <p className="">
              Instructor Name :
              <span className="pl-3"> {course.instructor.user.fname}</span>
            </p>
            <p className="">
              Class start Date : <span>{course.classStartDate}</span>
            </p>
            <p className="">
              Class end Date :<span>{course.classEndDate}</span>
            </p>
          </div>
          <div className="pl-8 py-4 sm:text-xl sm:font-light ">
            <p className="">
              Course Fee :<span>{course.fee}</span>
            </p>
            <p className="pb-3">
              Registered :
              <span>
                {course.enrollmentNumber} : {course.maxCapacity}
              </span>
            </p>
            <button
              onClick={() => {
                navigator(`/course/${course.id}`);
              }}
              className="bg-blue-950 text-gray-400 rounded py-1 px-2">
              About Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
