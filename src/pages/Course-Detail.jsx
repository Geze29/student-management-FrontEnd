import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Course } from "../api/getCourse";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { User } from "../api/getUserData";
import { CheckEnrollment, Enroll } from "../api/getEnrollment";
import useCourse from "../store/storeCourse";
import useAuthStore from "../store/store";

export default function CourseDetail() {
  const token = useAuthStore(state=>state.token);
  const { id } = useParams();
  const [course, setCourse] = useState();
  const navigator = useNavigate();
  const setCourse_id = useCourse((state) => state.setCourse_id);

  useEffect(() => {
    Course(id)
      .then((res) => {
        setCourse(res);
      })
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, []);

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
      <Menu />
      <div className="mx-0 p-0 bg-slate-800 h-20"></div>
      <div className="bg-cover bg-center h-screen w-full">
        <div
          className="flex items-center bg-cover mb-4 bg-center bg-no-repeat bg-gradient-to-t w-screen h-2/4 rounded-b-md shadow-slate-500 shadow-md"
          style={{
            backgroundImage: `url(${course && course.backgroundURL})`,
          }}>
          <div className="p-11 w-2/6">
            <div className="font-bold text-white text-4xl font-mono border w-fit p-2 shadow-xl">
              {course && course.courseName}
            </div>

            <div className="shadow bg-slate-900 rounded-b-md h-12 w-2/3">
              <div className="text-orange-700 text-3xl font-serif py-1 px-4">
                {course && course.status}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-grayish-156 mx-auto my-2 h-14 w-2/5 flex rounded shadow-sm shadow-blue-800">
          <div className="h-14 w-9/12 flex pl-6 items-center">
            <div className="text-xl text-blue-950 font-serif font-light">
              Would you like to take the course ?
            </div>
          </div>
          <div
            className="bg-blue-950 h-14 w-1/4 rounded-r cursor-pointer"
            onClick={handleEnrollment}>
            <div className="flex items-center h-14 justify-center">
              <div className="text-white font-extralight text-2xl font-serif tracking-wider">
                Enroll
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between p-11 h-fit">
          <div className="flex flex-col w-full mr-11">
            <div className="w-fit border-b border-blue-900 tracking-wide text-blue-900 p-1 font-bold text-2xl ">
              Description
            </div>
            <div className="pt-3 pr-11 tracking-wide text-base">
              <div>{course && course.description[0].description}</div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="w-fit ml-16 border-b border-blue-900 tracking-wide text-blue-900 p-1 font-bold text-2xl ">
              what{"'"}ll learn
            </div>
            <div className="pt-3 pr-11 tracking-wide text-base">
              <div>{course && course.description[0].contents}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-11 h-fit">
          <div className="w-fit border-b border-blue-900 tracking-wide text-blue-900 p-1 font-bold text-2xl ">
            Course Detail
          </div>
          <div className="flex w-full mr-11">
            <div className="flex flex-col w-full mr-11">
              <div className="text-blue-900 p-2 border-blue-900 text-md">
                Course Name :{" "}
                <span className="text-slate-800 pl-6">
                  {course && course.courseName}
                </span>
              </div>
              <div className="text-blue-900 p-2 border-blue-900 text-md">
                Class Start Date :{" "}
                <span className="text-slate-800 pl-6">
                  {course && course.classStartDate}
                </span>
              </div>
              <div className="text-blue-900 p-2 border-blue-900 text-md">
                Class End Date :{" "}
                <span className="text-slate-800 pl-6">
                  {course && course.classEndDate}
                </span>
              </div>
              <div className="text-blue-900 p-2 border-blue-900 text-md">
                Course Length :{" "}
                <span className="text-slate-800 pl-6">
                  {course && course.dayTaken}
                </span>
              </div>
            </div>

            <div className="flex flex-col w-full mr-44">
              <div className="text-blue-900 p-2 border-blue-900 text-md">
                Capacity :{" "}
                <span className="text-slate-800 pl-6">
                  {course && course.maxCapacity + "  Students"}
                </span>
              </div>

              <div className="text-blue-900 p-2 border-blue-900 text-md">
                Course Fee :{" "}
                <span className="text-slate-800 pl-6">
                  {course && course.fee + "  Birr"}
                </span>
              </div>

              <div className="text-blue-900 p-2 border-blue-900 text-md">
                Course Fee :{" "}
                <span className="text-slate-800 pl-6">
                  {course && course.fee + "  Birr"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-grayish-156 mx-auto my-2 h-14 w-2/5 flex rounded shadow-sm shadow-blue-800">
          <div className="h-14 w-9/12 flex pl-6 items-center">
            <div className="text-xl text-blue-950 font-serif font-light">
              Would you like to take the course ?
            </div>
          </div>
          <div
            className="bg-blue-950 h-14 w-1/4 rounded-r cursor-pointer"
            onClick={handleEnrollment}>
            <div className="flex items-center h-14 justify-center">
              <div className="text-white font-extralight text-2xl font-serif tracking-wider">
                Enroll
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between p-11 h-fit">
          <div className="flex flex-col w-full ">
            <div className="w-fit border-b border-blue-900 tracking-wide text-blue-900 p-1 font-bold text-2xl ">
              Requirements
            </div>
            <div className="pt-3 pr-11 tracking-wide text-base pr-80">
              <div>{course && course.description[0].requirement}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mr-11 pb-11 mb-11 h-fit">
          <div className="w-fit ml-11 border-b border-blue-900 tracking-wide text-blue-900 p-1 font-bold text-2xl ">
            Materials
          </div>
          <div className="pt-3 tracking-wide text-base pl-11 pr-80">
            <div>{course && course.description[0].material}</div>
          </div>
        </div>

        <div className="bg-grayish-156 mx-auto my-2 h-14 w-2/5 flex rounded shadow-sm shadow-blue-800">
          <div className="h-14 w-9/12 flex pl-6 items-center">
            <div className="text-xl text-blue-950 font-serif font-light">
              Would you like to take the course ?
            </div>
          </div>
          <div
            className="bg-blue-950 h-14 w-1/4 rounded-r cursor-pointer"
            onClick={handleEnrollment}>
            <div className="flex items-center h-14 justify-center">
              <div className="text-white font-extralight text-2xl font-serif tracking-wider">
                Enroll
              </div>
            </div>
          </div>
        </div>

        
        <Footer></Footer>
      </div>
    </div>
  );
}
