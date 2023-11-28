import React from "react";
import Abstract from '../../assets/AbstractBackground.jpeg'
import { FaCalculator } from "react-icons/fa";
import { useState } from "react";
import Menu from "../../components/Menu";
import InstructorSlideBar from "../../components/intructor/InstructorSlideBar";

function CreateExam() {
  const [courseId, setcouresId] = useState("");
  const [totalMark, settotalMark] = useState("");
  const [error, seterror] = useState(false);
  const handlesubmitChages = (e) => {
    e.preventDefault();
    if (courseId === 0) {
      seterror(true);
      return;
    }
    //const handlemark =0;
    if (totalMark <= 0) {
      seterror(true);
      return;
    }
  };
  return (
    <div>
      <div
        className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
        <InstructorSlideBar />
        <Menu />
        <div className="pt-24 sm:pr-20 pl-44 sm:pl-80 ">
          <p className="text-slate-400 py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal">
            <FaCalculator className="h-8 w-8" />
            <span className="pl-11">Create Exam </span>
          </p>
        </div>
        <div className=" pl-44 sm:pl-80">
          <form
            onSubmit={handlesubmitChages}
            className=" pl-20 py-20 font-semibold">
            <div className="px-20">
              <label className="sm:text-xl  text-gray-700">Courses ID</label>{" "}
              <br />
              <input
                className=" border-spacing-3 border border-gray-800 px-3 py-2"
                type="text"
                name="courses_id"
                onChange={(e) => setcouresId(e.target.value)}
              />
              {error && courseId.length <= 0 ? (
                <p className="text-red-500">course Id is required</p>
              ) : (
                ""
              )}
              <br />
            </div>
            <div className="py-4 px-20">
              <label className="sm:text-xl  text-gray-700">Total mark</label>
              <br />
              <input
                className=" border-spacing-3 border border-gray-800 px-3 py-2"
                type="number"
                name="total_marks"
                min={0}
                onChange={(e) => settotalMark(e.target.value)}
              />
              <br />
              {error && totalMark <= 0 ? (
                <p className="text-red-500 ">Total mark is required </p>
              ) : (
                ""
              )}
              <br />
            </div>
            <div className="flex justify-normal px-20">
              <div className="">
                <label className="sm:text-xl  text-gray-700">Exam Date</label>
                <br />
                <input
                  className=" border-spacing-3 border border-gray-800 px-10 py-2"
                  type="date"
                  name="exam_date"
                />
                <br />
              </div>
              <div className="sm:pl-32 py-36">
                <button className="py-1 px-4 bg-blue-950 text-gray-300 rounded">
                  Create{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateExam;
