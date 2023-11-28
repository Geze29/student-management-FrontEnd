import React from "react";
import Profile from "../../assets/Samplepro.png";
export default function InstructorCard({ instructor }) {
  return (
    <div>
      <div className="flex-col sm:flex-row flex justify-normal pt-8 sm:pr20 pl-44 sm:pl-80">
        <div className="bg-grayish-156 flex justify-normal flex-col sm:flex-row sm:rounded-3xl">
          <div className="flex justify-normal pl-4 pt-4 ">
            <div className="py-8">
              <img
                className="  rounded-2xl  sm:h-28 sm:w-28"
                src={instructor.user.imagePath}
              />
            </div>
            <div className="pl-4 sm:pl-8 sm:pr-28 ">
              <p className="text-blue-950 font-light  ">
                Full Name:{" "}
                <span className="pl-3 font-normal">
                  {" "}
                  {instructor.user.fname} {instructor.user.mname}{" "}
                  {instructor.user.lname}
                </span>
              </p>
              <p className="text-blue-950  font-light ">
                Date of berth:{" "}
                <span className="pl-3 font-normal">
                  {instructor.user.birthDate}
                </span>
              </p>
              <p className="text-blue-950 font-light">
                email:{" "}
                <span className="pl-3 font-normal">
                  {instructor.user.email}
                </span>
              </p>
              <p className="text-blue-950 font-light  ">
                Phone:{" "}
                <span className="pl-3 font-normal">
                  {" "}
                  {instructor.user.phoneNumber}
                </span>
              </p>
              <p className="text-blue-950  font-light ">
                Education level :{" "}
                <span className="pl-3 font-normal">
                  {" "}
                  {instructor.user.educationLevel}{" "}
                </span>
              </p>
              <p className="text-blue-950 font-light  ">
                Salary :{" "}
                <span className="pl-3 font-normal"> {instructor.salary} </span>
              </p>
            </div>
          </div>

          <div className="pl-4 sm:pl-0 pt-4 ">
            <p className="text-blue-950  ">
              Gender: <span className="pl-3">{instructor.user.gender}</span>
            </p>
            <p className="text-blue-950   ">
              Address: <span className="pl-3">{instructor.user.address}</span>
            </p>
            <p className="text-blue-950  ">
              Admission Date{" "}
              <span className="pl-3">{instructor.created_at.slice(0, 10)}</span>
            </p>
            <p className="text-blue-950  ">
              Experience : Date{" "}
              <span className="pl-3">{instructor.experience}</span>
            </p>
            <p className="pt-5">
              <span className="text-blue-500 cursor-pointer">course taken</span>
              <span className="text-red-500 pl-48 pr-12 cursor-pointer">Delete</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
