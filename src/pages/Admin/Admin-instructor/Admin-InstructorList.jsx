import React, { useEffect, useState } from "react";
import Abstract from "../../../assets/AbstractBackground.jpeg";
import { FaLaptopCode } from "react-icons/fa";
import Profile from "../../../assets/Samplepro.png";
import Menu from "../../../components/Menu";
import AdminSlideBar from "../../../components/AdminSlideBar";
import InstructorCard from "../../../components/intructor/Instructor-Card";
import { Instructor } from "../../../api/getUserData";
import useAuthStore from "../../../store/store";

function InstructorList({ onSreach }) {
  const token = useAuthStore((state) => state.token);
  const [instructors, setInstractors] = useState();

  useEffect(() => {
    Instructor(token)
      .then((res) => {
        setInstractors(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [query, setquery] = useState("");
  const handleQueryChange = (e) => {
    setquery(e.target.value);
  };
  const handleSearch = (e) => {
    onSreach(query);
  };

  return (
    <div>
      <Menu />
      <AdminSlideBar />
      <div
        className="bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
        <div className="pt-32 sm:pr-20 text-white pl-44 sm:pl-72 ">
          <p className=" py-1 pl-4 rounded text-2xl  bg-blue-900 flex justify-normal">
            <FaLaptopCode className="h-8 w-8" />
            <span className="pl-11">Instructor - List</span>
          </p>
        </div>
        <div className="pl-48 pt-4 sm:pl-96">
          <input
            type="text"
            name="search"
            value={query}
            onChange={handleQueryChange}
            className=" text-black px-4  w-1/2 h-12  border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Search anyone from here. "
          />
          <button
            className=" w-24 h-12   bg-blue-950 text-stone-200 text-center  text-xl font-thin border-none"
            onClick={handleSearch}>
            Search{" "}
          </button>
        </div>

        <div>
          {instructors &&
            instructors.map((instructor, index) => {
              return <InstructorCard key={index} instructor={instructor} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default InstructorList;
