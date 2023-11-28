import React from "react";

export default function MyCourse({course , index}) {
  return (
    <div>
      <div className="pb-6">
        <p className="bg-grayish-156 py-2 pl-2 sm:rounded-l-lg rounded-tr-lg  sm:text-xl font-light">
          <span className="px-3">{index} </span> {course.course.courseName}{" "}
          <span className="px-6 sm:px-20">{course.course.enrollmentType}</span>{" "}
          <span className="px-6 sm:px-32">{course.status}</span>
          <span className="sm:pl-14">A</span>
        </p>
        <div className="sm:pl-16">
          <div className="bg-grayish-156 flex justify-normal sm:rounded-b-lg flex-col sm:flex-row border-spacing-2 border border-gray-400 border-1">
            <div className="pl-6 py-4">
              <img
                className="sm:h-24 w-20 sm:w-32 rounded-xl"
                src={course.course.backgroundURL}
              />
            </div>
            <div className="pr-20 py-4 px-8">
              <p className="">
                Instructor Name :<span className="pl-3">{}</span>
              </p>
              <p className="">
                Class start Date : <span>{course.course.classStartDate}</span>
              </p>
              <p className="">
                Class end Date :<span>{course.course.classEndDate}</span>
              </p>
            </div>
            <div className="pl-8 py-4 ">
              <p className="">
                Course Fee :<span>{course.course.fee}</span>
              </p>
              <p className="pb-3">
                Registered :<span></span>
              </p>
              <button className="bg-blue-950 text-white rounded py-1 px-2">
                About Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
