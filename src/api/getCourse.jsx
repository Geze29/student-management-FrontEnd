import axios from "axios";

export const Courses = async () => {
  const courses = await axios.get("http://localhost:8000/api/course");
  return courses.data;
};

export const Course = async (id) => {
  const course = await axios.get(`http://localhost:8000/api/course/${id}`);
  return course.data;
};
