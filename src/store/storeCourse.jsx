import { create } from "zustand";

const useCourse = create((set) => ({
  course_id: localStorage.getItem("course_id") || "",
  setCourse_id: (newCourse) => {
    set({ course_id: newCourse });
    localStorage.setItem("course_id", newCourse);
  },
  clearCourse: () => {
    set({ course_id: "" });
    localStorage.removeItem("course_id");
  },
}));

export default useCourse;
