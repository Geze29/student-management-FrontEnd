import { FaReadme } from "react-icons/fa";
import Abstract from "../../../assets/AbstractBackground.jpeg";
import Menu from "../../../components/Menu";
import AdminSlideBar from "../../../components/AdminSlideBar";
import CourseItem from "../../../components/CourseItem";
import { useEffect, useState } from "react";
import { Courses } from "../../../api/getCourse";
function AdminCourses() {
  const [courses, setCourses] = useState();

  useEffect(() => {
    Courses()
      .then((res) => {
        setCourses(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div
        className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
        <Menu></Menu>
        <AdminSlideBar />
        <div className="pt-32 sm:pr-20 text-white pl-44 sm:pl-72 ">
          <p className=" py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal ">
            <FaReadme className="h-8 w-8" />

            <span className="pl-11 font-semibold">Courses</span>
          </p>
        </div>

        <div className="flex justify-evenly pl-48 sm:pl-52 pt-8 pb-6 text-blue-950 sm:text-2xl ">
          <div className="">
            <button className="font-bold">All Courses </button>
          </div>

          <div className="">
            <button className="">Open Courses</button>
          </div>

          <div className="">
            <button className="">Closed Courses</button>
          </div>
        </div>
        <div className=" flex justify-normal pl-44 sm:pl-80 text-blue-950 sm:text-xl sm:font-bold">
          <div className="pl-4">
            <h3 className="">Course Name</h3>
          </div>
          <div className="px-32">
            <h3 className="">Enrollment type</h3>
          </div>
          <div className="">
            <h3 className="">Status</h3>
          </div>
        </div>
        <div className="sm:pr-24 pl-48 sm:pl-72 ">
          <div className="border-t-2 border-grayish-156 pb-8 "></div>
        </div>
        <div className="pl-48  sm:pl-72 sm:pr-32">
          {courses && courses.map((course , index)=>{
            return <CourseItem key={index} course={course} index={index+1}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminCourses;
