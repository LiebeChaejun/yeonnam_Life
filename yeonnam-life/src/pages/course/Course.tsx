import React from "react";
import CourseCard from "../../components/course/CourseCard";

const Course = () => {
  return (
    <div className="flex flex-col gap-3 py-3 px-3">
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
        <h3 className="text-xl">코스 순서</h3>
        {/* 코스별 장소 목룍*/}
        <ul className="flex flex-col gap-5">
          {/* 코스별 장소 */}
          <CourseCard />
          <CourseCard />

          <li className="flex gap-2">
            <div className="flex flex-col gap-1 justify-center">
              <div className="w-10 h-10 bg-cafe rounded-full flex items-center justify-center text-white font-semibold">
                2
              </div>
              <hr className="w-0.5 h-full bg-cafe self-center" />
            </div>
            <div className="relative flex gap-2 bg-bg-card w-full px-3 py-3 rounded-2xl items-center">
              <p className="w-15 h-15 bg-bg-warm text-4xl rounded-xl flex justify-center items-center">
                🍵
              </p>
              <div>
                <div className="flex gap-1">
                  <h4 className="text-xl font-semibold">커피 한약방</h4>
                  <div className="px-1 py-1 rounded-xl bg-bg-warm text-xs text-cafe content-center">
                    카페
                  </div>
                </div>
                <p className="text-sm text-text-muted">
                  한옥 느낌의 독특한 분위기, 한약 라떼가 유명
                </p>
                <div className="flex gap-2">
                  <p className="text-text-primary text-xs">별점</p>
                  <p className="text-text-secondary text-xs">
                    서울 마포구 연남로 5길 22
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-2xl">❤️</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Course;
