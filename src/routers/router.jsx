import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import ForgetPassword from "../pages/auth/forgetPassword";
import CheckCode from "../pages/auth/CheckCode";
import UpdatePassword from "../pages/auth/UpdatePassword";
import Signup from "../pages/auth/SignUp";
import Contact from "../pages/auth/Contact";
import ContactUs from "../pages/ContactUs";
import Account from "../components/Account";
import Student from "../pages/student/Student";
import StudentEdit from "../pages/student/StudentEdit";
import StudentCourse from "../pages/student/Student-Course";
import StudentContact from "../pages/student/Student-Contact/Student-Contact";
import StudentContactEdit from "../pages/student/Student-Contact/Student-Contact-Edit";
import Attendance from "../pages/student/Student-Attendance";
import Admin from "../pages/Admin/Admin";
import AdminEdit from "../pages/Admin/Admin-Edit";
import AdminCourses from "../pages/Admin/Admin-course/Admin-Course";
import AddCourse from "../pages/Admin/Admin-course/Admin-AddCourse";
import InstructorList from "../pages/Admin/Admin-instructor/Admin-InstructorList";
import AddInstructor from "../pages/Admin/Admin-instructor/Add-Instructor";
import StudentList from "../pages/Admin/Admin-Student/Student-List";
import PageNotFound from "../pages/PageNotFound";
import CourseDescription from "../pages/Admin/Admin-course/Admin-AddCourse-Desctiption";
import CourseDetail from "../pages/Course-Detail";
import CourseTakeStudents from "../pages/Admin/Admin-course/Admin-Course-Student";
import Success from "../pages/Success";
import Instructor from "../pages/instructor/Instructor";
import InstructorEdit from "../pages/instructor/InstructorEdit";
import CreateExam from "../pages/instructor/Exams";
import InstructorScheduls from "../pages/instructor/InstructorScheduls";
import InstructorGrade from "../pages/instructor/Instructor-Grade";
import InstructorAttendances from "../pages/instructor/IntructorAttendance";
import CoursePage from "../pages/Course";

const router = createBrowserRouter([
  {
    path : '*',
    element :<PageNotFound />
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/course",
    element: <CoursePage />
  },
  {
    path:"/course/:id",
    element: <CourseDetail />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgetPassword",
    element: <ForgetPassword />,
  },
  {
    path: "forgetPassword/checkCode",
    element: <CheckCode />,
  },
  {
    path: "forgetPassword/updatePassword",
    element: <UpdatePassword />,
  },
  {
    path: "SignUp",
    element: <Signup />,
  },
  {
    path: "SignUp/contact",
    element: <Contact />,
  },
  {
    path: "contact",
    element: <ContactUs />,
  },
  {
    path: "account",
    element: <Account />,
  },
  {
    path: "student",
    element: <Student />,
  },
  {
    path: "student/edit",
    element: <StudentEdit />,
  },
  {
    path: "student/course",
    element: <StudentCourse />,
  },
  {
    path: "student/contact",
    element: <StudentContact />,
  },
  {
    path: "student/contact/edit",
    element: <StudentContactEdit />,
  },
  {
    path:"student/attendance",
    element: <Attendance />
  },
  {
    path:"admin",
    element: <Admin />
  },
  {
    path:'admin/edit',
    element: <AdminEdit />
  },
  {
    path:'admin/courses',
    element: <AdminCourses />
  },
  {
    path:'admin/courses/students/:id',
    element: <CourseTakeStudents />
  },
  {
    path : 'admin/courses/addcourse',
    element : <AddCourse />
  },
  {
    path : 'admin/courses/addcourse/description',
    element : <CourseDescription />
  },
  {
    path : 'admin/instructor',
    element : <InstructorList />
  },
  {
    path : 'admin/instructor/addInstructor',
    element : <AddInstructor />
  },
  {
    path : 'admin/students',
    element : <StudentList />
  },
  {
    path:'/enrollment',
    element: <Success />
  },

  {
    path:'instructor',
    element: <Instructor />
  },
  {
    path:'instructor/edit',
    element:<InstructorEdit />
  },
  {
    path:'instructor/createExam',
    element: <CreateExam />
  },
  {
    path: 'instructor/schedule',
    element: <InstructorScheduls />
  },
  {
    path: 'instructor/grade',
    element: <InstructorGrade />
  },
  {
    path: 'instructor/attendance',
    element: <InstructorAttendances />
  }

]);

export default router;
