import { Link } from "react-router-dom";
import { useCourseStore } from "../../../stores/useCoursesStore";

import PlaceCard from "../../Place/components/PlaceCard";
import Clock from "../../../assets/icons/iconClock.svg";
import Walking from "../../../assets/icons/iconWalking.svg";

const Course = () => {
  const course = useCourseStore((state) => state.course);
  const spots = useCourseStore((state) => state.course?.spots);

  return (
    <>
      <div className="flex flex-col bg-cafe w-full h-50 rounded-2xl gap-3 justify-center px-5">
        <p className="text-4xl">☕️</p>
        <div>
          <p className="font-semibold text-2xl text-white">{course?.title}</p>
          <p className="font-light text-base text-white">
            {course?.description}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-1">
            <img src={Clock} alt="" className="w-4 h-4" />
            <p className="text-white text-xs font-light">{course?.duration}</p>
          </div>
          <div className="flex gap-1">
            <img src={Walking} alt="" className="w-4 h-4" />
            <p className="text-white font-light text-xs">{course?.distance}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-shadow-2xs font-semibold mb-5">코스 순서</h3>
        {/* 코스별 장소 목룍*/}
        <ul className="flex flex-col gap-5">
          {/* 코스별 장소 */}
          {spots?.map((spot) => {
            return (
              <>
                <Link to={`/place/${spot.placeId}`}>
                  <PlaceCard spot={spot} />
                </Link>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Course;
