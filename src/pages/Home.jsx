import Footer from "../components/Footer";
import Menu from "../components/Menu";
import image from "../assets/Home2.png";
import certificate from "../assets/Untitled.jpg";
import Tgabu from "../assets/Tgabu.png";
import Abdinak from "../assets/Abdinak.png";
import { Link } from "react-router-dom";
import { FaPenNib, FaRegLightbulb, FaCommentsDollar } from "react-icons/fa";
import CourseCard from "../components/CourseCard";
import { useEffect, useState } from "react";
import { Courses } from "../api/getCourse";
import useAuthStore from "../store/store";
import  useUserStore  from "../store/storeUser";

export default function Home() {
  const [courses, setCourses] = useState();
  var Index = 0;
  const token = useAuthStore((state) => state.token);
  
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
      <Menu />
      <div>
        <div
          className="bg-cover bg-center h-900"
          style={{ backgroundImage: `url(${image})` }}>
          <div className="pt-60">
            <h1 className=" flex justify-center text-slate-300 text-2xl sm:text-5xl font-semibold">
              Shape your career with relevant{" "}
            </h1>
            <h1 className="flex justify-center text-slate-300 text-2xl sm:text-5xl font-semibold">
              scourses on OMISHTU-<span className="text-green-500">J</span>OY.
            </h1>
            <div className="flex justify-center items-center py-11">
              <Link to={"/login"}>
                <button className="border-spacing-3 border border-stone-400 text-stone-400 py-2 px-4 rounded-full sm:text-3xl font-thin border-2">
                  GET STARTED <span className="">-{">"}</span>{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className=" bg-white ">
          <div className=" text-blue-900">
            <h1 className="flex justify-center text-2xl sm:text-5xl py-6 font-semibold">
              Our Top Categories
            </h1>
          </div>
          <div className=" pl-28 sm:pl-0 sm:flex justify-center text-black  text-blue-900">
            <div className="bg-stone-300 h-52 w-52 rounded-2xl m-14">
              <div className="flex flex-col items-center rotate-180 pt-6 text-gray-700">
                <FaPenNib className="h-28 w-20 transform -rotate-45 " />
              </div>
              <div className=" pl-5 text-xl font-semibold pt-8"> Design</div>
              <p className="pl-5">View More</p>
            </div>
            <div className="bg-stone-300 h-52 w-52 rounded-2xl m-14">
              <div className="text-gray-500 flex justify-center pt-8 pb-6">
                <FaRegLightbulb className=" h-20 w-20" />
              </div>
              <h1 className=" pl-5 text-xl font-semibold">Development</h1>
              <p className="pl-5">View More</p>
            </div>
            <div className="bg-stone-300 h-52 w-52 rounded-2xl sm:mt-14 ml-14">
              <div className="flex justify-center pb-8 pt-8">
                <FaCommentsDollar className="h-20 w-20" />
              </div>
              <h1 className=" pl-4 text-xl font-semibold">Business</h1>
              <p className="pl-4">View More</p>
            </div>
          </div>
        </div>

        <div className="bg-white ">
          <h1 className="text-2xl sm:text-6xl flex justify-center py-8  text-blue-900">
            Popular courses for everyone{" "}
          </h1>
          <div className="flex-col sm:flex-row flex justify-evenly p-4 pl-28 sm:pl-0 sm:p-11 ">
            {courses &&
              courses.map((course, index) => {
                if (course.status == "active" || course.status == "closed") {
                  Index++;
                  if (Index < 3) {
                    return (
                      <CourseCard
                        key={index + course.courseName}
                        course={course}
                        token={token}
                      />
                    );
                  }
                }
              })}
          </div>
        </div>

        <div
          className="bg-cover sm:bg-cover  bg-center sm:bg-center w-full sm:w-full h-900"
          style={{ backgroundImage: `url(${certificate})` }}>
          <h1 className=" text-white text-2xl sm:text-5xl p-20">
            Verified Certificate
          </h1>
          <p className="text-stone-300 pl-20">
            Earn recognized certificate upon completion{" "}
          </p>

          <div className="flex justify-center items-center py-11 pb-24">
            <button className="border-spacing-3 border border-stone-400 text-stone-400 py-2 px-4 rounded-full text-3xl font-thin border-2">
              Learn More -{">"}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white ">
        <h1 className="text-2xl sm:text-4xl flex justify-center text-blue-900 pt-14">
          Testimonies
        </h1>
        <div className="p-11">
          <div className="text-black bg-stone-300 rounded-2xl mb-14 flex-col sm:flex-row flex justify-evenly">
            <img className="" src={Abdinak} />
            <p className="p-14">
              "Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
              <br />
              Vestibulum sagittis nisi ac enim fringilla,
              <br />
              nec suscipit arcu pharetra."
              <br />
              <span className="text-cyan-400 text-xl">John Doe</span>
              <br />
              CEO, Company X
            </p>
          </div>
          <div className="text-black bg-stone-300 rounded-2xl mb-14 flex-col sm:flex-row flex justify-evenly">
            <p className="p-14">
              "Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
              <br />
              Vestibulum sagittis nisi ac enim fringilla,
              <br />
              nec suscipit arcu pharetra."
              <br />
              <span className="text-cyan-400 text-xl">John Doe</span>
              <br />
              CEO, Company X
            </p>
            <img className="" src={Tgabu} />
          </div>
        </div>
      </div>

      <div className="bg-blue-950 text-gray-300">
        <h1 className="text-3xl sm:text-5xl flex justify-center pt-14">
          Impact In Number
        </h1>
        <div className="flex justify-evenly p-11 sm:text-2xl">
          <p className="">
            25+ <br />
            Courses
          </p>
          <p className="">
            200+
            <br />
            Learners
          </p>
          <p className="">
            {" "}
            5+
            <br />
            Partners
          </p>
        </div>
        <p className="pl-16 sm:text-2xl ">
          Choose from more than 25+ courses to get the skills you need to
          transform your life
          <br />
          and achieve your goals.
        </p>
        <div className="flex justify-center items-center py-11">
          <button
            onClick={() => {}}
            className="border-spacing-3 border  text-gray-300  text-gray-300
            py-2 px-4 rounded-full text-xl font-thin border-2">
            Explore Courses-{">"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
