import { FaGraduationCap } from "react-icons/fa";
import Profile from "../../../assets/Samplepro.png";
import Abstract from "../../../assets/AbstractBackground.jpeg";
import Menu from "../../../components/Menu";
import AdminSlideBar from "../../../components/AdminSlideBar";
import useAuthStore from "../../../store/store";
import { useEffect, useState } from "react";
import { Student } from "../../../api/getUserData";
import { StudentCard } from "../../../components/student/Student-Card";
function StudentList() {
  const token = useAuthStore((state) => state.token);
  const [students, setStudents] = useState();

  useEffect(() => {
    Student(token)
      .then((res) => {
        setStudents(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${Abstract})` }}>
        <Menu />
        <AdminSlideBar />
        <div className="pt-32 sm:pr-20 text-slate-300 pl-44 sm:pl-72 ">
          <p className=" py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal">
            <FaGraduationCap className="h-8 w-8" />

            <span className="pl-11 font-semibold">students</span>
          </p>
        </div>
        <div className="pl-48 pt-4 sm:pl-96">
          <input
            type="text"
            name="search"
            value=""
            className=" text-black px-4  w-1/2 h-12  border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Search anyone from here.  "
          />
          <button className=" w-24 h-12   bg-blue-950 text-stone-200 text-center  text-xl font-thin border-none">
            Search{" "}
          </button>
        </div>
        
        <div>
          {students && students.map((student , index)=>{
            return <StudentCard key={index} student={student}/>
          })}
        </div>

      </div>
    </div>
  );
}

export default StudentList;
