import React, { useState } from "react";
import { StudentCard } from "../student/Student-Card";
import { UpdateEnrollment } from "../../api/getEnrollment";

export default function CourseTakeStudent({ student, index, token }) {
  const [isHidden, setIsHidden] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [status, setStatus] = useState(student.status);

  return (
    <>
      <div className="flex py-1 my-1 h-11 bg-grayish-156 rounded-md text-blue-950 font-semibold text-base items-center ml-2 mr-4 px-4">
        <p className="w-11">{index}.</p>
        <p
          className="w-72 "
          onClick={() => {
            setIsHidden(!isHidden);
          }}>
          {student.student.user.fname} {student.student.user.mname}
        </p>

        <div className="w-44 ">
          <p className={`${isEdit ? "hidden" : ""}`}>{student.status}</p>

          <div className={`${isEdit ? "" : "hidden"}`}>
            <select
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}>
              <option value="inprogress">inprogress</option>
              <option value="enrolled">enrolled</option>
              <option value="dropped">dropped</option>
              <option value="completed">completed</option>
            </select>
          </div>
        </div>

        <p className="w-44 ">{student.grade ? student.grade : "-"}</p>
        <p className="w-44 ">Paid</p>
        <div
          className="bg-blue-800 text-white py-1 px-2 rounded-md cursor-pointer font-light"
          onClick={() => {
            setIsEdit(!isEdit);
          }}>
          <p className={`${isEdit ? "hidden" : ""}`}>Edit</p>
          <p
            className={`${isEdit ? "" : "hidden"}`}
            onClick={() => {
              UpdateEnrollment(status, token, student.status)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}>
            Done
          </p>
        </div>
      </div>
      <div className={`${isHidden ? "" : "hidden"} rounded-sm mt-0`}>
        <StudentCard student={student.student} />
      </div>
    </>
  );
}
