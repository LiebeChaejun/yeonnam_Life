import { create } from "zustand";
import type { CourseActions, CourseState } from "../types/Courses";

const initialState = {
  course: null,
  courses: [],
  isLoading: false,
  error: null,
};

export const useCourseStore = create<CourseState & CourseActions>()((set) => ({
  ...initialState,

  actions: {
    setCourse: (course) => set({ course }),
    setCourses: (courses) => set({ courses }),
    setLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
    reset: () => set(initialState),
  },
}));
