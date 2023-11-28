import Course from "../assets/course.png";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Courses } from "../api/getCourse";
import CourseCard from "../components/CourseCard";
import useAuthStore from "../store/store";
function CoursePage() {
  const [courses, setCourses] = useState();
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    Courses()
      .then((res) => {
        setCourses(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Menu />

      <div
        className="bg-cover bg-center h-900 pt-8 rounded-b-lg overflow-hidden"
        style={{ backgroundImage: `url(${Course})` }}>
        <div className="text-white pl-20 pt-4">
          <h1 className="text-2xl sm:text-4xl pb-16 pt-28">
            The Ultimate Technology Courses
          </h1>
          <p className="pb-16 text-xl">
            Learn how to <span className="text-green-500"> start , build</span>{" "}
            and
            <span className="text-green-500"> run</span> technology.{" "}
          </p>
          <input
            type="text"
            name="search"
            className=" text-black px-4 py-2 w-1/2 h-12  border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="What kind of course are looking for ?  "
          />
          <button className=" w-24 h-12   bg-blue-950 text-stone-200 text-center  text-xl font-thin border-none">
            Search{" "}
          </button>
          <div className="pb-28 ">
            {/* <button className="h-12 bg-stone-400 w-1/2  rounded-xl text-black">
             
             <span className=' pl-10 pr-48'> What kind of course are looking for ?</span>
              <button className="rounded-xl w-24 h-12   bg-blue-950 text-stone-200 text-center  text-xl font-thin border-none">
              Search  </button>
              </button> */}
          </div>
        </div>
      </div>
      <div className=" flex justify-evenly p-4 flex-wrap">
        {courses &&
          courses.map((course, index) => {
            return (
              <div key={index} className="">
                <CourseCard course={course} key={index} token={token} />;
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
}

export default CoursePage;
