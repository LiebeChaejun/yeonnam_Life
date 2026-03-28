import api from "./index";
import type { Course } from "../types/Courses";

export const getCourses = async () => {
  const { data } = await api.get("courses");
  return data;
};

export const getCourseById = async (id: string) => {
  const { data } = await api.get(`/courses/${id}`);
  return data;
};
