import React from "react";
import CategoryBox from "../../components/categoryBox/CategoryButton";

const Map = () => {
  return (
    <div className="relative flex flex-col gap-3 px-5">
      <div className="sticky flex flex-col gap-3 bg-bg z-2 top-0 py-5">
        <h2 className="text-2xl font-bold">연남동 지도</h2>

        {/* 카테고리 선택 목록 */}
        <ul className="flex gap-2">
          <CategoryBox isButton={true} />
          <CategoryBox isButton={true} shop="cafe" />
          <CategoryBox isButton={true} shop="bakery" />
          <CategoryBox isButton={true} shop="restaurant" />
        </ul>

        {/* 지도 보여줄 곳 */}
        <div className="w-full h-75 bg-bg-warm rounded-2xl"></div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm text-text-muted">n개의 장소</p>
        <ul className="flex flex-col gap-3">
          <li className="relative flex gap-2 bg-bg-card w-full px-3 py-3 rounded-2xl items-center">
            <p className="w-15 h-15 bg-bg-warm text-4xl content-center rounded-xl">
              ☕️
            </p>
            <div>
              <div className="flex gap-1">
                <h4 className="text-xl font-semibold">연남 살롱</h4>
                <div className="px-1 py-1 rounded-xl bg-bg-warm text-xs text-cafe content-center">
                  카페
                </div>
              </div>
              <p className="text-sm text-text-muted">
                빈티지 감성이 물씬 나는 드립커피 전문점
              </p>
              <div className="flex gap-2">
                <p className="text-text-primary text-xs">별점</p>
                <p className="text-text-secondary text-xs">
                  서울 마포구 연남로 38
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4 text-2xl">❤️</div>
          </li>
          <li className="relative flex gap-2 bg-bg-card w-full px-3 py-3 rounded-2xl items-center">
            <p className="w-15 h-15 bg-bg-warm text-4xl content-center rounded-xl">
              ☕️
            </p>
            <div>
              <div className="flex gap-1">
                <h4 className="text-xl font-semibold">연남 살롱</h4>
                <div className="px-1 py-1 rounded-xl bg-bg-warm text-xs text-cafe content-center">
                  카페
                </div>
              </div>
              <p className="text-sm text-text-muted">
                빈티지 감성이 물씬 나는 드립커피 전문점
              </p>
              <div className="flex gap-2">
                <p className="text-text-primary text-xs">별점</p>
                <p className="text-text-secondary text-xs">
                  서울 마포구 연남로 38
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4 text-2xl">❤️</div>
          </li>
          <li className="relative flex gap-2 bg-bg-card w-full px-3 py-3 rounded-2xl items-center">
            <p className="w-15 h-15 bg-bg-warm text-4xl content-center rounded-xl">
              ☕️
            </p>
            <div>
              <div className="flex gap-1">
                <h4 className="text-xl font-semibold">연남 살롱</h4>
                <div className="px-1 py-1 rounded-xl bg-bg-warm text-xs text-cafe content-center">
                  카페
                </div>
              </div>
              <p className="text-sm text-text-muted">
                빈티지 감성이 물씬 나는 드립커피 전문점
              </p>
              <div className="flex gap-2">
                <p className="text-text-primary text-xs">별점</p>
                <p className="text-text-secondary text-xs">
                  서울 마포구 연남로 38
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4 text-2xl">❤️</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Map;
