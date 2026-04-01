import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePlaceStore } from "@/stores/usePlaceStore";
import { getPlaceById } from "@/api/placeApi";

import CategoryBox from "../../components/Category/CategoryButton";
import backArrow from "../../assets/icons/backArrow.svg";
import heart from "../../assets/icons/heartInactive.svg";
import star from "../../assets/icons/star.svg";
import clock from "../../assets/icons/iconClockGrey.svg";
import location from "../../assets/icons/iconLocationGray.svg";

const PlaceDetail = () => {
  const navigate = useNavigate();
  const { id: placeId } = useParams<{ id: string }>();
  const { actions: placeActions } = usePlaceStore();

  const place = usePlaceStore((state) => state.place);
  const isLoading = usePlaceStore((state) => state.isLoading);
  const error = usePlaceStore((state) => state.error);

  useEffect(() => {
    const fetch = async () => {
      placeActions.setLoading(true);
      try {
        const placeData = await getPlaceById(placeId);
        placeActions.setPlace(placeData);
      } catch (error) {
        placeActions.setError("해당 장소 정보를 불러오는데 실패했습니다.");
      } finally {
        placeActions.setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <>
      {/* 뒤로가기 버튼 */}
      <div className="flex gap-3">
        <button onClick={() => navigate(-1)}>
          <img src={backArrow} alt="뒤로가기" />
        </button>
        <p className="font-semibold">장소 상세</p>
      </div>

      {/* 사진 담는 곳 */}
      <div className="h-50 rounded-2xl bg-bg-warm border-border border-2 flex justify-center items-center">
        <p className="text-7xl">🍞</p>
      </div>

      {/* 컨텐츠 */}
      <div className="relative h-75 flex flex-col gap-3">
        <button className="absolute w-12 h-12 bg-bg-warm rounded-full right-0 top-2 flex justify-center items-center border-border border-2">
          <img src={heart} alt="좋아요 버튼" />
        </button>

        {/* 카테고리 태그 */}
        <div className="py-2 text-xs flex gap-1">
          <CategoryBox isButton={false} shop={place?.category} />
        </div>

        {/* 컨텐츠 내용 */}
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl text-text-primary font-semibold">
            {place?.name}
          </h3>
          <p className="text-text-secondary max-w-100">{place?.description}</p>
          <ul className="h-30 bg-bg-warm rounded-2xl border-border border-2 p-2 flex flex-col gap-3">
            <li className="flex gap-1 items-center">
              <img src={star} alt="별점" className="w-4 h-4" />
              <p className="text-accent-warm">{place?.rating}</p>
            </li>
            <li className="flex gap-1 items-center">
              <img src={location} alt="" className="w-4 h-4" />
              <p className="text-text-secondary">{place?.address}</p>
            </li>
            <li className="flex gap-1 items-center">
              <img src={clock} alt="" className="w-4 h-4" />
              <p className="text-text-secondary">{place?.hours.weekday}</p>
            </li>
          </ul>

          {/* 태그 목록 */}
          <div className="flex gap-3">
            {place?.tags.map((tag) => {
              return (
                <p className="bg-bg-warm text-text-secondary text-sm rounded-full px-3 py-2">
                  {"#" + tag}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceDetail;
