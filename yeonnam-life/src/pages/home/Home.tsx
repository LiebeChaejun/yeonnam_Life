import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCourseStore } from "../../stores/useCoursesStore.ts";
import { usePlaceStore } from "@/stores/usePlaceStore.ts";
import { getCourses } from "../../api/courseApi.ts";
import { getPlaces, getHotPlaces } from "@/api/placeApi.ts";

import Carousel from "./components/Carousel/Carousel";
import CourseCard from "../Course/components/CourseCard";
import CategoryTag from "../../components/Category/CategoryTag";
import PlaceCardHome from "../Place/components/PlaceCardHome.tsx";

const Home = () => {
  const { actions: courseActions } = useCourseStore();
  const { actions: placeActions } = usePlaceStore();
  const courses = useCourseStore((state) => state.courses);
  const hotPlaces = usePlaceStore((state) => state.hotPlaces);

  useEffect(() => {
    const fetch = async () => {
      courseActions.setLoading(true);
      try {
        const courseData = await getCourses();
        const placeData = await getPlaces();
        const hotPlacesData = await getHotPlaces();

        courseActions.setCourses(courseData);
        placeActions.setPlaces(placeData);
        placeActions.setHotPlaces(hotPlacesData);
      } catch (error) {
        courseActions.setError("코스 목록을 불러오지 못했어요.");
      } finally {
        courseActions.setLoading(false);
      }
    };

    fetch();
  }, []);

  return (
    <>
      {/* 캐러샐 */}
      <Carousel />

      {/* 카테고리 박스*/}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">어디로 떠날까요?</h2>
        <div className="flex gap-3 max-w-125 overflow-x-scroll">
          {/* 카테고리 */}
          <CategoryTag />
          <CategoryTag shop="cafe" />
          <CategoryTag shop="restaurant" />
          <CategoryTag shop="bakery" />
        </div>
      </div>

      {/* 추천 산책코스 */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">추천 산책코스</h2>
          <button className="text-accent-warm text-sm">전체보기</button>
        </div>
        {courses.length !== 0 ? (
          <ul className="flex gap-3 max-w-125 overflow-x-scroll">
            {courses.map((course) => {
              return (
                <li key={course.id}>
                  <Link
                    className="bg-bg-card border-border border-2 min-w-70 h-45 rounded-2xl flex flex-col gap-3 px-3 py-5 hover:bg-bg-warm hover:shadow-xs"
                    to={`/courses/${course.id}`}
                  >
                    <CourseCard course={course} />
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <></>
        )}
      </div>

      {/* 인기장소 */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">인기 장소🔥</h2>
        <ul className="flex flex-col gap-3">
          {hotPlaces.map((hotPlace) => {
            return <PlaceCardHome key={hotPlace.id} place={hotPlace} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
