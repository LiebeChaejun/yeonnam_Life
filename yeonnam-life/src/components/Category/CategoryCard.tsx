const CategoryCard = () => {
  return (
    <>
      <div className="bg-bg-card min-w-70 h-40 rounded-2xl flex flex-col gap-3 px-3 py-5">
        <p className="text-3xl">☕️</p>
        <div className="flex flex-col">
          <p className="font-semibold text-base">연남 감성 카페 투어</p>
          <p className="font-light text-sm">
            커피 한 잔과 함께 걷는 연남의 오후
          </p>
        </div>
        <div className="flex gap-3">
          <p className="text-sm font-light">시간</p>
          <p className="text-sm font-light">거리</p>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
