import React from "react";

const Map = () => {
  return (
    <div className="relative flex flex-col gap-3">
      <div className="sticky flex flex-col gap-3 bg-bg z-2 w-125 top-0 py-5">
        <h2 className="text-2xl font-bold">연남동 지도</h2>

        {/* 카테고리 선택 목록 */}
        <ul className="flex gap-2">
          <li className="bg-bg-card rounded-full px-3 py-2 text-text-secondary border-2 border-bg-warm">
            ✨ 전체
          </li>
          <li className="bg-accent rounded-full px-3 py-2 text-white border-2 border-bg-warm">
            ☕️ 카페
          </li>
          <li className="bg-bg-card rounded-full px-3 py-2 text-text-secondary border-2 border-bg-warm">
            🍽️ 맛집
          </li>
          <li className="bg-bg-card rounded-full px-3 py-2 text-text-secondary border-2 border-bg-warm">
            🥐 베이커리
          </li>
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
