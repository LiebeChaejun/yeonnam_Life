import type { PlaceCardProps } from "@/types/Place";

import heartActive from "../../../assets/icons/heartActive.svg";
import star from "../../../assets/icons/star.svg";

const PlaceCard = ({ place }: PlaceCardProps) => {
  return (
    <>
      {/* 이모지 */}
      <p className="w-15 h-15 bg-bg-warm text-4xl rounded-xl flex justify-center items-center">
        ☕️
      </p>

      {/* 텍스트 정보 */}
      <div>
        {/* 이름 + 카테고리 */}
        <div className="flex gap-1">
          <h4 className="text-xl font-medium">{place?.name}</h4>
          <div className="p-1 rounded-full bg-bg-warm text-xs text-cafe content-center">
            {place?.category}
          </div>
        </div>

        {/* 설명 */}
        <p className="text-sm text-text-muted w-50 mr-6">
          {place?.shortDescription}
        </p>

        {/* 별점 + 주소 */}
        <div className="flex gap-2">
          <div className="flex">
            <img src={star} alt="" className="w-4 h-4" />
            <p className="text-xs text-[#FFC107]">{place.rating}</p>
          </div>
          <p className="text-text-secondary text-xs">{place.address}</p>
        </div>
      </div>

      {/* 하트 */}
      <img
        src={heartActive}
        alt="활성화 된 하트"
        className="absolute top-4 right-4"
      />
    </>
  );
};

export default PlaceCard;
