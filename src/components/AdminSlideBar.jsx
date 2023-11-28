import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import logo from "../assets/Logo-300x180.png";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaReadme,
  FaAngleDown,
  FaPlus,
  FaReceipt,
  FaAngleLeft,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import Logout from "../api/Logout";
function AdminSlideBar() {
  const [isReceptionHidden, setIsReceptionHidden] = useState(true);
  const [isInstructorHidden, setIsInstructorHidden] = useState(true);
  const [isCourseHidden, setIsCourseHidden] = useState(true);

  return (
    <div className="relative z-50">
      <div className="flex justify-normal">
        <div className="bg-blue-950 fixed  h-full">
          <img className="h-11 p-3 ml-3 sm:h-32" src={logo} />
          <div className="flex-col text-gray-200 sm:text-xl pt-20 space-y-6 sm:pl-10 pr-11">
            <div className=" ">
              <div className=" border-b w-fit pb-1 relative mb-3">
                <Link to={"/admin"}>
                  <p className="sm:text-2xl flex justify-normal cursor-pointer">
                    <FaGraduationCap className="h-7 w-7" />
                    <span className="pl-3 pr-3 text-xl">Admin Info</span>
                  </p>
                </Link>
              </div>
            </div>

            <div className=" ">
              <div className=" border-b w-fit pb-2 relative mb-3">
                <p
                  className="sm:text-2xl flex justify-normal cursor-pointer"
                  onClick={() => setIsCourseHidden(!isCourseHidden)}>
                  <FaReadme className="h-7 w-7 pt-1" />
                  <span className="pl-3 pr-3 text-xl">Courses</span>
                  {isCourseHidden ? (
                    <FaAngleLeft className="pt-1" />
                  ) : (
                    <FaAngleDown className="pt-1" />
                  )}
                </p>

                <div className={`ml-7 ${isCourseHidden ? "hidden" : ""}`}>
                  <p className="text-base pb-1 pt-1">
                    <Link to={"/admin/courses"}>
                      <FaWatchmanMonitoring className="h-5 w-5 inline pr-2" />
                      <span>See Courses</span>
                    </Link>
                  </p>

                  <p className="text-base pb-1 pt-1">
                    <Link to={"/admin/courses/addcourse"}>
                      <FaPlus className="h-5 w-5 inline pr-2" />
                      <span>add Course</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Instructor glide effect */}

            <div className=" ">
              <div className=" border-b w-fit pb-2 relative mb-3">
                <p
                  className="sm:text-2xl flex justify-normal cursor-pointer"
                  onClick={() => setIsInstructorHidden(!isInstructorHidden)}>
                  <FaLaptopCode className="h-7 w-7 pt-1" />
                  <span className="pl-3 pr-3 text-xl">Instructor</span>
                  {isInstructorHidden ? (
                    <FaAngleLeft className="pt-1" />
                  ) : (
                    <FaAngleDown className="pt-1" />
                  )}
                </p>

                <div className={`ml-7 ${isInstructorHidden ? "hidden" : ""}`}>
                  <p className="text-base pb-1 pt-1">
                    <Link to={"/admin/instructor"}>
                      <FaWatchmanMonitoring className="h-5 w-5 inline pr-2" />
                      <span>See Instructors</span>
                    </Link>
                  </p>

                  <p className="text-base pb-1 pt-1">
                    <Link to={"/admin/instructor/addinstructor"}>
                      <FaPlus className="h-5 w-5 inline pr-2" />
                      <span>add Instructor</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className=" ">
              <div className=" border-b w-fit pb-1 relative mb-3">
                <Link to={"/admin/students"}>
                  <p className="sm:text-2xl flex justify-normal cursor-pointer">
                    <FaGraduationCap className="h-7 w-7" />
                    <span className="pl-3 pr-3 text-xl">Students</span>
                  </p>
                </Link>
              </div>
            </div>

            <div className=" ">
              <div className=" border-b w-fit pb-2 relative mb-3">
                <p
                  className="sm:text-2xl flex justify-normal cursor-pointer"
                  onClick={() => setIsReceptionHidden(!isReceptionHidden)}>
                  <FaReceipt className="h-7 w-7 pt-1" />
                  <span className="pl-3 pr-3 text-xl">Reception</span>
                  {isReceptionHidden ? (
                    <FaAngleLeft className="pt-1" />
                  ) : (
                    <FaAngleDown className="pt-1" />
                  )}
                </p>

                <div className={`ml-7 ${isReceptionHidden ? "hidden" : ""}`}>
                  <p className="text-base pb-1 pt-1">
                    <Link to={"/admin/reception"}>
                      <FaWatchmanMonitoring className="h-5 w-5 inline pr-2" />
                      <span>See Receptions</span>
                    </Link>
                  </p>

                  <p className="text-base pb-1 pt-1">
                    <Link to={"/admin/reception/addReception"}>
                      <FaPlus className="h-5 w-5 inline pr-2" />
                      <span>add Reception</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Logout></Logout>
        </div>
      </div>
    </div>
  );
}

export default AdminSlideBar;
