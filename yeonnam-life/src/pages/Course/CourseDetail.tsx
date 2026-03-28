import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCourseById } from "../../api/courseApi";
import { getPlaces } from "@/api/placeApi";
import { useCourseStore } from "../../stores/useCoursesStore";
import { usePlaceStore } from "@/stores/usePlaceStore";
import Course from "./components/Course";

import backArrow from "../../assets/icons/backArrow.svg";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { actions: courseActions } = useCourseStore();
  const { actions: placeActions } = usePlaceStore();

  useEffect(() => {
    const fetch = async () => {
      courseActions.setLoading(true);
      try {
        const courseData = await getCourseById(id); // 여기 타입 오류 처리?
        courseActions.setCourse(courseData);
        const placesData = await getPlaces();
        placeActions.setPlaces(placesData);
      } catch (error) {
        courseActions.setError("코스 데이터를 불러오지 못했어요");
      } finally {
        courseActions.setLoading(true);
      }
    };
    fetch();
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
