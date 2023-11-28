import useAuthStore from "../../store/store";

export const StudentCard = ({ student }) => {
  const token = useAuthStore(state=>state.token)
  
  return (
    <>
      <div className="flex-col sm:flex-row flex justify-normal pt-8 sm:pr20 pl-44 sm:pl-80">
        <div className="bg-grayish-156 flex justify-normal flex-col sm:flex-row sm:rounded-xl">
          <div className="flex justify-normal pl-4 py-4 ">
            <img
              className="  rounded-2xl  h-32 w-32"
              src={student.user.imagePath}
            />
            <div className="pl-4 sm:pl-8 sm:pr-28 ">
              <p className="text-blue-950 font-light    ">
                Full Name:{" "}
                <span className="pl-3 font-normal">
                  {" "}
                  {student.user.fname} {student.user.mname} {student.user.lname}
                </span>
              </p>
              <p className="text-blue-950 font-light  ">
                Date of birth:{" "}
                <span className="pl-3 font-normal">
                  {" "}
                  {student.user.bitrhDate}
                </span>
              </p>
              <p className="text-blue-950 font-light ">
                email:{" "}
                <span className="pl-3 font-normal">{student.user.email} </span>
              </p>
              <p className="text-blue-950 font-light   ">
                Phone:{" "}
                <span className="pl-3 font-normal">
                  {student.user.phoneNumber}
                </span>
              </p>
            </div>
          </div>
          <div className="pl-4 sm:pl-0 py-4">
            <p className="text-blue-950 font-light  ">
              Gender:{" "}
              <span className="pl-3 font-normal">{student.user.gender}</span>
            </p>
            <p className="text-blue-950 font-light   ">
              Address:{" "}
              <span className="pl-3 font-normal">{student.user.address}</span>
            </p>
            <p className="text-blue-950 font-light ">
              Admission Date{" "}
              <span className="pl-3 font-normal">{student.created_at}</span>
            </p>
            <p className="font-semibold mt-5">
              <span className="text-blue-500">course taken</span>
              <span className="text-red-500 pl-48 pr-12 font-normal">
                Delete
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-grayish-156 w-2/3 h-11 rounded-md ml-96 mt-1">

      </div>
    </>
  );
};
