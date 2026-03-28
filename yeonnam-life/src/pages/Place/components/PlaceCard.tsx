import type { Spot } from "../../../types/Course";

import heartActive from "../../../assets/icons/heartActive.svg";
import star from "../../../assets/icons/star.svg";

interface PlaceCardProps {
  place: Spot;
}

const PlaceCard = ({ place }: PlaceCardProps) => {
  return (
    <li className="flex gap-2">
      <div className="relative flex gap-2 bg-bg-card w-full px-3 py-3 rounded-2xl items-center">
        {/* 이모지 */}
        <p className="w-15 h-15 bg-bg-warm text-4xl rounded-xl flex justify-center items-center">
          ☕️
        </p>

        {/* 텍스트 정보 */}
        <div>
          {/* 이름 + 카테고리 */}
          <div className="flex gap-1">
            <h4 className="text-xl font-medium">연남 살롱</h4>
            <div className="p-1 rounded-full bg-bg-warm text-xs text-cafe content-center">
              카페
            </div>
          </div>

          {/* 설명 */}
          <p className="text-sm text-text-muted w-50 mr-6">{place.note}</p>

          {/* 별점 + 주소 */}
          <div className="flex gap-2">
            <div className="flex">
              <img src={star} alt="" className="w-4 h-4" />
              <p className="text-xs text-[#FFC107]">4.9</p>
            </div>
            <p className="text-text-secondary text-xs">서울 마포구 연남로 38</p>
          </div>
        </div>

        {/* 하트 */}
        <img
          src={heartActive}
          alt="활성화 된 하트"
          className="absolute top-4 right-4"
        />
      </div>
    </li>
  );
};

export default PlaceCard;
