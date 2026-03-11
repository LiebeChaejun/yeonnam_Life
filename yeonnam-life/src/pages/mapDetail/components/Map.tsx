import CategoryButton from "../../../components/Category/CategoryButton";

const Map = () => {
  return (
    <>
      <div className="sticky flex flex-col gap-3 bg-bg z-2 top-0 py-5">
        <h2 className="text-2xl font-bold">연남동 지도</h2>

        {/* 카테고리 선택 목록 */}
        <ul className="flex gap-2">
          <CategoryButton isButton={true} />
          <CategoryButton isButton={true} shop="cafe" />
          <CategoryButton isButton={true} shop="bakery" />
          <CategoryButton isButton={true} shop="restaurant" />
        </ul>

        {/* 지도 보여줄 곳 */}
        <div className="w-full h-75 bg-bg-warm rounded-2xl"></div>
      </div>
    </>
  );
};

export default Map;
