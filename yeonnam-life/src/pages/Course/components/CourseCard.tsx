import { useNavigate } from "react-router-dom";

import iconClock from "../../../assets/icons/iconClockGrey.svg";
import iconWalking from "../../../assets/icons/iconWalkingGrey.svg";

const CourseCard = () => {
  const navigate = useNavigate();
  const navigateToCourse = () => {
    navigate("/course");
  };

  return (
    <button
      onClick={navigateToCourse}
      className="bg-bg-card border-border border-2 min-w-70 h-40 rounded-2xl flex flex-col gap-3 px-3 py-5 hover:bg-bg-warm hover:shadow-xs"
    >
      <p className="text-3xl">☕️</p>
      <div className="flex flex-col">
        <p className="font-semibold text-base">연남 감성 카페 투어</p>
        <p className="font-light text-sm">커피 한 잔과 함께 걷는 연남의 오후</p>
      </div>
      <div className="flex justify-center gap-3">
        <div className="flex items-center gap-1">
          <img src={iconClock} alt="" className="w-4 h-4" />
          <p className="text-sm font-light">시간</p>
        </div>
        <div className="flex items-center gap-1">
          <img src={iconWalking} alt="" className="w-4 h-4" />
          <p className="text-sm font-light">거리</p>
        </div>
      </div>
    </button>
  );
};

export default CourseCard;
