import star from "../../../assets/icons/star.svg";

const PlaceCardHome = () => {
  return (
    <li className="bg-bg-card h-16 rounded-2xl flex items-center justify-between px-3">
      <div className="flex items-center gap-3">
        <p className="text-2xl">🍞</p>
        <div>
          <p className="font-semibold">밀도</p>
          <p className="font-light text-sm">식빵 한 장의 행복, 연남 본점</p>
        </div>
      </div>
      <div className="flex gap-1 justify-self-end">
        <img src={star} alt="" className="w-4 h-4" />
        <p className="text-xs text-[#FFC107]">별점</p>
      </div>
    </li>
  );
};

export default PlaceCardHome;
