import type { CourseCardProps } from "../../../types/Course";
import { EMOJI_MAP } from "@/constants/category";

import iconClock from "../../../assets/icons/iconClockGrey.svg";
import iconWalking from "../../../assets/icons/iconWalkingGrey.svg";

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <>
      <p className="text-3xl">☕️</p>
      <div className="flex flex-col">
        <p className="font-semibold text-base">{course.title}</p>
        <p className="font-light text-sm line-clamp-2">{course.description}</p>
      </div>
      <div className="flex justify-center gap-3">
        <div className="flex items-center gap-1">
          <img src={iconClock} alt="" className="w-4 h-4" />
          <p className="text-sm font-light">{course.duration}</p>
        </div>
        <div className="flex items-center gap-1">
          <img src={iconWalking} alt="" className="w-4 h-4" />
          <p className="text-sm font-light">{course.distance}</p>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
