import React from "react";
import CourseCard from "../../components/course/CourseCard";

const Course = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex">
        <p>(뒤로가기)</p>
        <h2 className="text-xl font-semibold">산책 코스</h2>
      </div>

      {/* 코스 설명 박스 */}
      <div className="flex flex-col bg-cafe w-full h-50 rounded-2xl gap-3 justify-center px-5">
        <p className="text-4xl">☕️</p>
        <div>
          <p className="font-semibold text-2xl text-white">
            연남 감성 카페 투어
          </p>
          <p className="font-light text-base text-white">
            커피 한 잔과 함께 걷는 연남의 오후
          </p>
        </div>
        <div className="flex gap-4">
          <div>
            <p className="text-white text-base font-light">시간</p>
          </div>
          <div>
            <p className="text-white text-base font-light">거리</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-shadow-2xs font-semibold mb-5">코스 순서</h3>
        {/* 코스별 장소 목룍*/}
        <ul className="flex flex-col gap-5">
          {/* 코스별 장소 */}
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </ul>
      </div>
    </div>
  );
};

export default Course;
