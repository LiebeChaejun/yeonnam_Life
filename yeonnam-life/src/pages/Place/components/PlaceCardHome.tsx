import type { PlaceCardProps } from "@/types/Place";
import getCategoryLabel from "@/utils/getCategoryLabel";

import star from "../../../assets/icons/star.svg";

const PlaceCardHome = ({ place }: PlaceCardProps) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <p className="text-2xl">{getCategoryLabel(place.category)}</p>
        <div>
          <p className="font-semibold">{place.name}</p>
          <p className="font-light text-sm">{place.shortDescription}</p>
        </div>
      </div>
      <div className="flex gap-1 justify-self-end">
        <img src={star} alt="" className="w-4 h-4" />
        <p className="text-xs text-[#FFC107]">{place.rating}</p>
      </div>
    </>
  );
};

export default PlaceCardHome;
