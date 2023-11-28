import React, { useState } from "react";
import Abstract from "../../../assets/AbstractBackground.jpeg";
import { FaPlus } from "react-icons/fa";
import AdminSlideBar from "../../../components/AdminSlideBar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuthStore from "../../../store/store";
function CourseDescription() {

  const token = useAuthStore((state) => state.token);

  const navigator = useNavigate();
  const location = useLocation();
  const courseData = location.state;

  const [requirement, setrequirement] = useState();
  const [description, setDescription] = useState();
  const [contents, setContents] = useState();
  const [material, setMaterial] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const CourseDescription = {
        requirement,
        description,
        contents,
        material
    }
    const course = {...courseData , ...CourseDescription};
    try {
        const response = await axios.post("http://localhost:8000/api/course",course,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
        if (response.status === 201) {
            alert('course successfully created')
            navigator('/admin/courses')
        }
    } catch (error) {
        console.log(error.response);
    }
  };
  return (
    <div>
      <div
        className="bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
        <AdminSlideBar />
        <div className="pt-32 sm:pr-20 text-white pl-44 sm:pl-72 ">
          <p className=" py-1 pl-4 rounded sm:text-2xl text-xl sm:font-bold  bg-blue-900 flex justify-normal">
            <FaPlus className="h-8 w-8" />
            <span className="pl-11 "> Add Courses</span>
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className=" flex justify-normal flex-col sm:flex-row">
            <div className="pl-64 sm:pl-80 text-blue-950">
              <div className="">
                <h3 className=" pt-8  sm:text-2xl sm:font-fontawesome">
                  Course Prerequisites
                </h3>
              </div>
              <textarea
                className="bg-white  h-56 w-96  "
                onChange={e=>setrequirement(e.target.value)}
                required
                cols="30"
                rows="10"></textarea>

              <div className="pt-8 ">
                <h3 className=" sm:text-2xl sm:font-fontawesome">
                  Description
                </h3>
              </div>

              <textarea
                className="bg-white  h-56 w-96  "
                onChange={e=>setDescription(e.target.value)}
                required
                cols="30"
                rows="10"></textarea>
            </div>

            <div className="pl-64 sm:pl-20 text-blue-950 pb-8">
              <div className="">
                <h3 className=" pt-8  sm:text-2xl sm:font-fontawesome">
                  What you'll learn
                </h3>
              </div>
              <textarea
                className="bg-white  h-56 w-96  "
                onChange={e=>setContents(e.target.value)}
                required
                cols="30"
                rows="10"></textarea>

              <div className="pt-8  p">
                <h3 className=" sm:text-2xl sm:font-fontawesome">Materials</h3>
              </div>

              <textarea
                className="bg-white  h-56 w-96  "
                onChange={e=>setMaterial(e.target.value)}
                required
                cols="30"
                rows="10"></textarea>

              <div className="pt-11 pl-24 ml-80">
                <button
                  type="submit"
                  className="py-1 px-4 bg-blue-950 text-gray-300 rounded">
                  Done
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourseDescription;
