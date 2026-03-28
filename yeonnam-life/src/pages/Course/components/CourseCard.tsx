import type { CoursesType } from "../../../types/Course";

import iconClock from "../../../assets/icons/iconClockGrey.svg";
import iconWalking from "../../../assets/icons/iconWalkingGrey.svg";

const CourseCard = ({
  id,
  title,
  description,
  duration,
  distance,
}: CoursesType) => {
  return (
    <li
      className="bg-bg-card border-border border-2 min-w-70 h-45 rounded-2xl flex flex-col gap-3 px-3 py-5 hover:bg-bg-warm hover:shadow-xs"
      key={id}
    >
      <p className="text-3xl">☕️</p>
      <div className="flex flex-col">
        <p className="font-semibold text-base">{title}</p>
        <p className="font-light text-sm line-clamp-2">{description}</p>
      </div>
      <div className="flex justify-center gap-3">
        <div className="flex items-center gap-1">
          <img src={iconClock} alt="" className="w-4 h-4" />
          <p className="text-sm font-light">{duration}</p>
        </div>
        <div className="flex items-center gap-1">
          <img src={iconWalking} alt="" className="w-4 h-4" />
          <p className="text-sm font-light">{distance}</p>
        </div>
      </div>
    </li>
  );
};

export default CourseCard;
