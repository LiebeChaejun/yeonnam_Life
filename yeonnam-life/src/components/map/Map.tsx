import React from "react";
import CategoryBox from "../categoryBox/CategoryButton";

const Map = () => {
  return (
    <>
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
    </>
  );
};

export default Map;
