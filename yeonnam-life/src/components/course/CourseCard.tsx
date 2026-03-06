import React from "react";
import HeartActive from "../img/heartActive.svg";
import HeartEmpty from "../img/heartInactive.svg";
import Star from "../img/star.svg";

const CourseCard = () => {
  return (
    <>
      <li className="flex gap-2">
        <div className="flex flex-col gap-1 justify-center">
          <div className="w-8 h-8 bg-cafe rounded-full flex items-center justify-center text-white font-semibold">
            1
          </div>
        </div>
        <div className="relative flex gap-2 bg-bg-card w-full px-3 py-3 rounded-2xl items-center">
          <p className="w-15 h-15 bg-bg-warm text-4xl rounded-xl flex justify-center items-center">
            ☕️
          </p>
          <div>
            <div className="flex gap-1">
              <h4 className="text-xl font-medium">연남 살롱</h4>
              <div className="p-1 rounded-full bg-bg-warm text-xs text-cafe content-center">
                카페
              </div>
            </div>
            <p className="text-sm text-text-muted w-50 mr-6">
              빈티지 감성이 물씬 나는 드립커피 전문점
            </p>
            <div className="flex gap-2">
              <div className="flex">
                <img src={Star} alt="" className="w-4 h-4" />
                <p className="text-xs text-[#FFC107]">4.9</p>
              </div>
              <p className="text-text-secondary text-xs">
                서울 마포구 연남로 38
              </p>
            </div>
          </div>
          <img
            src={HeartActive}
            alt="활성화 된 하트"
            className="absolute top-4 right-4"
          />
          {/* <div className="absolute top-4 right-4 text-2xl">❤️</div> */}
        </div>
      </li>
    </>
  );
};

export default CourseCard;
