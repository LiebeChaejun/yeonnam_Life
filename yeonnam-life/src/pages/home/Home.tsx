import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCourseStore } from "../../stores/useCoursesStore.ts";
import { usePlaceStore } from "@/stores/usePlaceStore.ts";
import { getCourses } from "../../api/courseApi.ts";
import { getPlaces } from "@/api/placeApi.ts";

import Carousel from "./components/Carousel/Carousel";
import CourseCard from "../Course/components/CourseCard";
import CategoryTag from "../../components/Category/CategoryTag";
import PlaceCardHome from "../Place/components/PlaceCardHome.tsx";

const Home = () => {
  const { actions: courseActions } = useCourseStore();
  const { actions: placeActions } = usePlaceStore();
  const courses = useCourseStore((state) => state.courses);

  useEffect(() => {
    const fetch = async () => {
      courseActions.setLoading(true);
      try {
        const courseData = await getCourses();
        const placeData = await getPlaces();
        courseActions.setCourses(courseData);
        placeActions.setPlaces(placeData);
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
        <div className="flex gap-3 max-w-100 overflow-x-scroll">
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
        <ul className="flex gap-3 max-w-100 overflow-x-scroll">
          {courses.length !== 0 ? (
            courses.map((item) => {
              return (
                <Link key={item.id} to={`/courses/${item.id}`}>
                  <CourseCard
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    duration={item.duration}
                    distance={item.distance}
                  />
                </Link>
              );
            })
          ) : (
            <></>
          )}
        </ul>
      </div>

      {/* 인기장소 */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">인기 장소🔥</h2>
        <ul className="flex flex-col gap-3">
          <PlaceCardHome />
          <PlaceCardHome />
          <PlaceCardHome />
        </ul>
      </div>
    </>
  );
};

export default Home;
