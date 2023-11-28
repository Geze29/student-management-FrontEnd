import axios from "axios";
import useAuthStore from "../../store/store";
import { useEffect, useState } from "react";
import { User } from "../../api/getUserData";
import { FaReadme } from "react-icons/fa";
import StudentSlideBar from "./StudentSlideBar";
import Menu from "../../components/Menu";
import Abstract from "../../assets/AbstractBackground.jpeg";
import MyCourse from "../../components/student/Student-My-Course";
import { EnrolledCourses } from "../../api/getEnrollment";
import  useUserStore  from "../../store/storeUser";

export default function StudentCourse() {
  const [courses, setCourses] = useState();
  const token = useAuthStore((state) => state.token);
  const user = useUserStore((state)=>state.user);
  const student = JSON.parse(user);

  useEffect(() => {
    EnrolledCourses(token, student.student.id)
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${Abstract})` }}>
        <Menu />
        <StudentSlideBar />
        <div className="pt-32 sm:pr-20 text-slate-400 pl-44 sm:pl-72 ">
          <p className=" py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal">
            <FaReadme className="h-8 w-8" />

            <span className="pl-11 font-bold">My Courses</span>
          </p>
        </div>

        <div className=" flex justify-evenly pl-48 sm:pl-52 text-gray-600 sm:text-2xl font-bold pt-8">
          <div className="">
            <h3 className="">Course Name</h3>
          </div>
          <div className="">
            <h3 className="">Enrollment type</h3>
          </div>
          <div className="">
            <h3 className="">Status</h3>
          </div>
          <div>Grade</div>
        </div>
        <div className="sm:pr-24 pl-48 sm:pl-72 ">
          <div className="border-t-2 border-grayish-156 pb-8 "></div>
        </div>

        <div className="pl-48 sm:pl-72 sm:pr-24">
          {courses &&
            courses.map((course, index) => {
              return <MyCourse key={index} course={course} index={index + 1} />;
            })}
        </div>
      </div>
    </div>
  );
}
