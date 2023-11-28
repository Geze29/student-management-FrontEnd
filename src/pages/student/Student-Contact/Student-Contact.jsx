import React, { useEffect, useState } from "react";
import StudentSlideBar from "../StudentSlideBar";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../store/store";
import { User } from "../../../api/getUserData";
import Menu from "../../../components/Menu";
function StudentContact() {
  const navigator = useNavigate();
  const [user, setUser] = useState();

  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    const getData = async () => {
      const data = await User(token);
      setUser(data.student.student_contact);
    };
    getData();
  }, []);




  return (
    <div>
      <Menu></Menu>
      <StudentSlideBar />
      <div className="pt-24 sm:pr-20  pl-44 sm:pl-80 ">
        <p className="text-white py-1 pl-4 rounded text-2xl  bg-blue-900 flex justify-normal">
          <FaUser className="h-8 w-8" />

          <span className="pl-11">Contact Information</span>
        </p>
      </div>
      <div className="flex justify-normal sm:pr-20 pl-48 sm:pl-96 pt-5 ">
        <h2 className="pl-24 pr-32 text-2xl text-blue-950 font-semibold" onClick={e=>{navigator('/student')}}>
          Student
        </h2>
        <h2 className=" text-2xl text-blue-950 font-semibold">contact</h2>
      </div>
      <div className="flex justify-normal pt-8 sm:pr20 pl-44 sm:pl-80">
        <div className="flex justify-normal ">
          <div className="pl-8 pr-28 ">
            <p className="text-blue-950 text-xl font-light ">
              First Name:
              {user && (
                <span className="font-bold ml-1">{user.contactFname}</span>
              )}
            </p>
            <p className="text-blue-950 text-xl font-light">
              last Name:
              {user && (
                <span className="font-bold ml-1">{user.contactLname}</span>
              )}
            </p>
            <p className="text-blue-950 text-xl font-light ">
              email:
              {user && (
                <span className="font-bold ml-1">{user.contactEmail}</span>
              )}
            </p>
            <p className="text-blue-950 text-xl font-light ">
              phone:
              {user && (
                <span className="font-bold ml-1">{user.contactPhone}</span>
              )}
            </p>
            <p className="text-blue-950 text-xl font-light ">
              Relation:
              {user && <span className="font-bold ml-1">{user.relation}</span>}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end pb-0 pt-32 pr-20">
        <button
          className="bg-blue-950 px-5 text-white rounded "
          onClick={() => navigator("edit",{state:user && user})}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default StudentContact;
