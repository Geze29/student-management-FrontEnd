import React, { useEffect, useState } from "react";
import Abstract from "../../assets/AbstractBackground.jpeg";
import Menu from "../../components/Menu";
import AdminSlideBar from "../../components/AdminSlideBar";
import Profile from "../../assets/Samplepro.png";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/store";
import { User } from "../../api/getUserData";
function Admin() {
  const navigator = useNavigate();

  const [admin, setAdmin] = useState();

  const token = useAuthStore((state) => state.token);
  console.log(token);
  useEffect(() => {
    const getData = async () => {
      const data = await User(token);
      setAdmin(data);
    };
    getData();
  }, []);

  return (
    <div>
      <Menu />

      <AdminSlideBar />
      <div
        className="bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
        <div className="pt-32 sm:pr-20 text-white pl-44 sm:pl-72 ">
          <p className=" py-1 pl-4 rounded text-2xl  bg-blue-900 flex justify-normal">
            <FaUser className="h-8 w-8" />

            <span className="pl-11">Personal Information</span>
          </p>

          <div className="flex justify-normal pt-8">
            <img
              className="rounded-2xl h-44 h-44 "
              src={admin ? admin.imagePath : Profile}
            />
            <div className="pl-6 text-black">
              <p className="sm:pb-2">
                First Name :
                {admin && <span className="font-bold ml-1">{admin.fname}</span>}
              </p>
              <p className="">
                Middle Name :
                {admin && <span className="font-bold ml-1">{admin.mname}</span>}
              </p>
              <p className="sm:pt-2 sm:pb-2">
                Last Name :
                {admin && <span className="font-bold ml-1">{admin.lname}</span>}
              </p>
              <p className="">
                email:
                {admin && <span className="font-bold ml-1">{admin.email}</span>}
              </p>
              <p className="sm:pt-2">
                Date of Birth :
                {admin && (
                  <span className="font-bold ml-1">{admin.birthDate}</span>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end pb-0 sm:pt-32 pr-20">
          <button
            className="bg-blue-950 px-5 text-white rounded"
            onClick={() => navigator("edit", { state: admin && admin })}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
