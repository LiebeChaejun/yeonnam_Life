export interface Spot {
  order: number;
  placeId: string;
  note: string;
}

export interface Course {
  id: string;
  editorId: string;
  title: string;
  description: string;
  duration: string;
  distance: string;
  likeCount: number;
  spots: Spot[];
  tags: string[];
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

export type CourseState = {
  course: Course; // 단일 코스
  courses: Course[]; // 목록
  isLoading: boolean;
  error: string | null;
};

export type CourseActions = {
  actions: {
    setCourse: (course: Course) => void;
    setCourses: (courses: Course[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    reset: () => void;
  };
};

export type CourseCardProps = {
  course: Course;
};
