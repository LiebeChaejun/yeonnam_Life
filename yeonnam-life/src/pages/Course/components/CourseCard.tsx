import { useNavigate } from "react-router-dom";

import iconClock from "../../../assets/icons/iconClockGrey.svg";
import iconWalking from "../../../assets/icons/iconWalkingGrey.svg";

interface Courses {
  id: string;
  editorId: string;
  title: string;
  description: string;
  duration: string;
  distance: string;
  spots: string[];
  tags: string[];
  likeCount: number;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

const CourseCard = ({ title, description, duration, distance }: Courses) => {
  const navigate = useNavigate();
  const navigateToCourse = () => {
    navigate("/course");
  };

  return (
    <li
      onClick={navigateToCourse}
      className="bg-bg-card border-border border-2 min-w-70 h-45 rounded-2xl flex flex-col gap-3 px-3 py-5 hover:bg-bg-warm hover:shadow-xs"
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
