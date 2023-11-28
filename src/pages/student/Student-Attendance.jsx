import React from "react";
import { FaPenSquare } from "react-icons/fa";
import StudentSlideBar from "./StudentSlideBar";
import Menu from "../../components/Menu";
function Attendance() {
  return (
    <div>
      <Menu></Menu>
      <StudentSlideBar />
      <div className="pt-32 sm:pr-20 text-white pl-44 sm:pl-72 ">
        <p className=" py-1 pl-4 rounded text-2xl  bg-blue-900 flex justify-normal">
          <FaPenSquare className="h-8 w-8" />

          <span className="pl-11">Attendance</span>
        </p>
      </div>
    </div>
  );
}

export default Attendance;
