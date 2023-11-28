import Menu from "../../../components/Menu";
import AdminSlideBar from "../../../components/AdminSlideBar";
import Abstract from "../../../assets/AbstractBackground.jpeg";
import { FaReadme } from "react-icons/fa";
import { useParams } from "react-router-dom";
import CourseTakeStudent from "../../../components/Course/Course-Take-student";
import { EnrolledStudents } from "../../../api/getEnrollment";
import { useState } from "react";
import { useEffect } from "react";
import useAuthStore from "../../../store/store";

export default function CourseTakeStudents() {
  const { id } = useParams();
  const [students, setStudents] = useState();
  const token = useAuthStore((state)=>state.token);
  useEffect(() => {
    EnrolledStudents(token , id)
      .then((res) => {
        console.log(res)
        setStudents(res)
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div
      className="bg-cover h-screen bg-center"
      style={{ backgroundImage: `url(${Abstract})` }}>
      <div className="flex w-full h-full">
        <Menu />
        <div className="w-80 pr-16 h-fit">
          <AdminSlideBar />
        </div>
        <div className="w-full">
          <div className="pt-32  text-white p-4 ">
            <p className=" py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal ">
              <FaReadme className="h-8 w-8" />
              <span className="pl-11 text-xl">
                <span className=" font-semibold">Course Name</span> Course Taken
                students
              </span>
            </p>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex font-semibold text-lg ml-2 mr-4 text-blue-950 px-4">
              <p className="w-11">No.</p>
              <p className="w-72 ">Student Full Name</p>
              <p className="w-44 ">Status</p>
              <p className="w-44 ">Grade</p>
              <p className="w-44 ">Paid</p>
              <p className="w-44 ">Action</p>
            </div>
            <div className="mt-6">
              {students && students.map((student,index)=>{
                return <CourseTakeStudent key={index} student={student} index={index+1} token={token}/>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
