import PlaceCard from "../../PlaceDetail/components/PlaceCard";
import Clock from "../../../assets/icons/iconClock.svg";
import Walking from "../../../assets/icons/iconWalking.svg";

const Course = () => {
  return (
    <>
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
          <div className="flex gap-1">
            <img src={Clock} alt="" className="w-4 h-4" />
            <p className="text-white text-xs font-light">약 2시간</p>
          </div>
          <div className="flex gap-1">
            <img src={Walking} alt="" className="w-4 h-4" />
            <p className="text-white font-light text-xs">거리</p>
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
                <PlaceCard place={spot} />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Course;
