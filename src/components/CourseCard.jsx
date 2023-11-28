import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckEnrollment, Enroll } from "../api/getEnrollment";
import { User } from "../api/getUserData";
import useCourse from "../store/storeCourse";

export default function CourseCard({ course, token }) {
  const navigator = useNavigate();
  const setCourse_id = useCourse((state) => state.setCourse_id);

  const handleEnrollment = async () => {
    if (token) {
      if (course.status == "active") {
        const user = await User(token);
        if (user.role === "student") {
          const data = {
            student_id: user.student.id,
            course_id: course.id,
          };
          const checkEnrollment = await CheckEnrollment(data, token);
          if (checkEnrollment.status === 200) {
            const Data = {
              email: user.email,
              fname: user.fname,
              lname: user.lname,
              amount: course.fee,
            };
            const response = await Enroll(Data, token);
            if (response.status === 200) {
              setCourse_id(course.id);
              window.location.href = response.data.url;
            }
          } else if (checkEnrollment.status === 402) {
            alert("You already Enrolled This course try another");
          }
        } else {
          alert("only students can enroll");
        }
      } else {
        alert("sorry, course not active");
      }
    } else {
      navigator("/login");
    }
  };
  return (
    <div>
      <div className=" bg-slate-300 w-80 h-96 rounded-2xl mb-8 sm:mb-0">
        <div className="relative">
          <img className="w-80 h-44 rounded-2xl" src={course.backgroundURL} />
          <div className="w-fit z-0 bg-slate-900  h-1/4 rounded-tl-2xl shadow-sm shadow-black absolute top-0">
            <div className="text-orange-700 text-3xl font-serif py-1 px-4">
              {course && course.status}
            </div>
          </div>
        </div>
        <div className="pl-6">
          <h3 className="text-xl pb-8">{course.courseName}</h3>
          <div className="flex">
            <p className="text-2xl">{course.dayTaken}</p>
          </div>
          <div className=" items-center py-11 ">
            <span className="pr-11">
              <button
                onClick={() => {
                  navigator(`/course/${course.id}`);
                }}
                className="rounded w-36 border-spacing-3 border border-gray-900 text-gray-900  text-2xl font-normal border-2">
                learn more
              </button>
            </span>
            <button
              onClick={handleEnrollment}
              className="rounded w-24 border-spacing-3 bg-gray-900 text-stone-400 text-center  text-2xl font-normal border-2">
              Enroll
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
