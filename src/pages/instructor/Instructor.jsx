import React, { useEffect, useState } from "react";
import profile from "../../assets/Samplepro.png";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Abstract from "../../assets/AbstractBackground.jpeg";
import Menu from "../../components/Menu";
import InstructorSlideBar from "../../components/intructor/InstructorSlideBar";
import useAuthStore from "../../store/store";
import { User } from "../../api/getUserData";
function Instructor() {
  const navigator = useNavigate();
  const [user, setUser] = useState();

  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    const getData = async () => {
      const data = await User(token);
      setUser(data);
    };
    getData();
  }, []);
  return (
    <div>
      <div
        className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
        <Menu></Menu>
        <InstructorSlideBar></InstructorSlideBar>
        <div className="pt-24 sm:pr-20 pl-44 sm:pl-80 ">
          <p className="text-slate-400 py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal">
            <FaUser className="h-8 w-8" />

            <span className="pl-11">Teacher Information </span>
          </p>
        </div>
        <div className="flex justify-normal sm:pr-20 pl-96 pt-5 "></div>
        <div className="flex-col sm:flex-row flex justify-normal pt-8 sm:pt-20 sm:pr20 pl-44 sm:pl-80">
          <div className="flex justify-normal ">
            <img
              className="  rounded-2xl h-48 w-48"
              src={user ? user.imagePath : profile}
            />
            <div className="pl-4 sm:pl-8 pr-28 ">
              <p className="text-gray-700 sm:text-xl font-medium ">
                First Name:
                <span className="font-semibold px-4">{user && user.fname}</span>
              </p>
              <p className="text-gray-700 sm:text-xl font-medium ">
                Middle Name:
                <span className="font-semibold px-4">{user && user.mname}</span>
              </p>
              <p className="text-gray-700 sm:text-xl font-medium ">
                last Name:
                <span className="font-semibold px-4">{user && user.lname}</span>
              </p>
              <p className="text-gray-700 sm:text-xl font-medium ">
                email:
                <span className="font-semibold px-4">{user && user.email}</span>
              </p>
              <p className="text-gray-700 sm:text-xl font-medium ">
                Date of birth:
                <span className="font-semibold px-4">
                  {user && user.birthDate}
                </span>
              </p>
            </div>
          </div>
          <div className="pl-4 sm:pl-0">
            <p className="text-gray-700 sm:text-xl font-medium ">
              phone:
              <span className="font-semibold px-4">
                {user && user.phoneNumber}
              </span>
            </p>
            <p className="text-gray-700 sm:text-xl font-medium ">
              Gender:
              <span className="font-semibold px-4">{user && user.gender}</span>
            </p>
            <p className="text-gray-700 sm:text-xl font-medium ">
              Address:
              <span className="font-semibold px-4">{user && user.address}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-end  sm:py-32 py-4 pr-20">
          <button
            className="bg-blue-950 px-5 text-white rounded"
            onClick={() => navigator("/instructor/edit")}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
