import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Course from "./components/Course";
import axios from "axios";
import type { CoursesType } from "../../types/CoursesType.ts";

import backArrow from "../../assets/icons/backArrow.svg";

const CourseDetail = () => {
  const [course, setCourse] = useState<CoursesType[]>();
  const { id } = useParams();
  const navigate = useNavigate();

  const getCourseDataById = async () => {
    try {
      const res = await axios(`http://localhost:3000/courses/${id}`);
      setCourse(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCourseDataById();
    console.log(course);
  }, []);

  return (
    <>
      <div className="flex gap-1">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={backArrow} alt="뒤로가기" />
        </button>
        <h2 className="text-xl font-semibold">산책 코스</h2>
      </div>

      {/* 코스 설명 박스 */}
      <Course />
    </>
  );
};

export default CourseDetail;
