import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import type { CoursesType } from "../../types/CoursesType.ts";

import Carousel from "./components/Carousel/Carousel";
import CourseCard from "../Course/components/CourseCard";
import CategoryTag from "../../components/Category/CategoryTag";
import PlaceCard from "../PlaceDetail/components/PlaceCard";

const Home = () => {
  const [courses, setCourses] = useState<CoursesType[]>([]);

  const getCourseData = async () => {
    try {
      const res = await axios("http://localhost:3000/courses");
      setCourses(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCourseData();
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
                <>
                  <Link to={`/courses/${item.id}`}>
                    <CourseCard
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      duration={item.duration}
                      distance={item.distance}
                    />
                  </Link>
                </>
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
          <PlaceCard isHome={true} />
          <PlaceCard isHome={true} />
          <PlaceCard isHome={true} />
        </ul>
      </div>
    </>
  );
};

export default Home;
