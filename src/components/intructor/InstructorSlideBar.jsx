import React, { useState } from "react";
import {
  FaUser,
  FaCalculator,
  FaRegCalendarCheck,
  FaAngleDown,
  FaPlus,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/DarkBlue.jpeg";
import Logout from "../../api/Logout";
function InstructorSlideBar() {
  const [showlist, setshowlist] = useState("hidden");
  const navigator = useNavigate();
  return (
    <div>
      <div className="bg-blue-950 fixed h-full">
        <div
          className="fixed top-0 left-0 h-full pt-20  "
          style={{ backgroundImage: `url(${backgroundImage})` }}>
          {/* <img src={Logo}/> */}
          <div className="flex-col text-gray-200 sm:text-xl pt-20 sm:pl-10 pr-11">
            <div className="">
              <Link to="/instructor">
                <p className=" underline rounded sm:text-2xl flex justify-normal">
                  <FaUser className="h-8 w-8" />
                  <span className="pl-3">Teacher INFO.</span>
                </p>
              </Link>
              <br />
            </div>
            <Link to="">
              <p
                className=" underline  sm:text-2xl flex justify-normal"
                onClick={() => {
                  if (showlist == "hidden") {
                    setshowlist("");
                  } else {
                    setshowlist("hidden");
                  }
                }}>
                <FaUser className="h-8 w-8" />
                <span className="pl-3 pr-3">Courses</span>
                <FaAngleDown className="h-9" />
                <br />
              </p>

              <Link to="/instructor/grade">
                <p className={`${showlist} flex justify-normal text-sm`}>
                  <FaPlus className="h-5" />
                  <span>My Course</span>
                </p>
              </Link>

              <Link to="/instructor/attendance">
                <p className={`${showlist} flex justify-normal text-sm`}>
                  <FaPlus className="h-5" />
                  <span>Attendances</span>
                </p>
              </Link>
            </Link>

            <div className="">
              <Link to="/instructor/createExam">
                <p className="underline sm:text-2xl flex justify-normal">
                  <FaCalculator className="h-8 w-8" />
                  <span className="pl-3">Exams</span>
                </p>
              </Link>
              <br />
            </div>

            <div className="">
              <Link to="/instructor/schedule">
                <p className="underline sm:text-2xl flex justify-normal">
                  <FaRegCalendarCheck className="h-8 w-8" />
                  <span className="pl-3">Schedule</span>
                </p>
              </Link>
            </div>
          <Logout></Logout>
            <div className="pt-5"></div>
          </div>
          {/* <div className="pl-10 sm:pl-20 pt-10 pb-10">
            <button className="text-white rounded text-xl border-spacing-3 py-1 px-5 border-2  border border-white" onClick={() =>{navigator('/')}}>Logout</button>
           </div> */}
        </div>
      </div>
    </div>
  );
}

export default InstructorSlideBar;
