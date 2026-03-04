const Home = () => {
  return (
    <div className="flex flex-col gap-10 px-15 py-5">
      {/* 캐러샐 */}
      <div className="bg-black w-full h-70 rounded-2xl"></div>

      {/* 카테고리 박스*/}
      <div className="flex flex-col gap-3 w-full">
        <h2 className="text-xl font-bold">어디로 떠날까요?</h2>
        <div className="flex gap-3">
          {/* 카테고리 */}
          <div className="bg-bg-card w-33 h-33 rounded-2xl flex flex-col justify-center items-center">
            <p className="text-4xl">☕️</p>
            <p className="text-base font-semibold">카페</p>
            <p className="text-xs text-text-muted">3곳</p>
          </div>
          <div className="bg-bg-card w-33 h-33 rounded-2xl flex flex-col justify-center items-center">
            <p className="text-4xl">🍽️</p>
            <p className="text-base font-semibold">맛집</p>
            <p className="text-xs text-text-muted">3곳</p>
          </div>
          <div className="bg-bg-card w-33 h-33 rounded-2xl flex flex-col justify-center items-center">
            <p className="text-4xl">🥐</p>
            <p className="text-base font-semibold">베이커리</p>
            <p className="text-xs text-text-muted">3곳</p>
          </div>
        </div>
      </div>

      {/* 추천 산책코스 */}
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">추천 산책코스</h2>
          <button className="text-accent-warm text-sm">전체보기</button>
        </div>
        <div className="flex gap-3 overflow-x-scroll">
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
        </div>
      </div>

      {/* 인기장소 */}
      <div>
        <h2>인기 장소🔥</h2>
        <div className="flex flex-col gap-3">
          <div className="bg-bg-card w-full h-16 rounded-2xl flex items-center justify-between px-3">
            <div className="flex items-center gap-3">
              <p className="text-2xl">🍞</p>
              <div>
                <p className="font-semibold">밀도</p>
                <p className="font-light text-sm">
                  식빵 한 장의 행복, 연남 본점
                </p>
              </div>
            </div>
            <p className="justify-self-end">별점</p>
          </div>
          <div className="bg-bg-card w-full h-16 rounded-2xl flex items-center justify-between px-3">
            <div className="flex items-center gap-3">
              <p className="text-2xl">🍕</p>
              <div>
                <p className="font-semibold">연남동 화덕피자</p>
                <p className="font-light text-sm">
                  매일 반죽하는 나폴리 스타일 수제 피자
                </p>
              </div>
            </div>
            <p className="justify-self-end">별점</p>
          </div>
          <div className="bg-bg-card w-full h-16 rounded-2xl flex items-center justify-between px-3">
            <div className="flex items-center gap-3">
              <p className="text-2xl">☕️</p>
              <div>
                <p className="font-semibold">연남 커피</p>
                <p className="font-light text-sm">
                  빈티지 감성이 물씬 나는 드립커피 전문점
                </p>
              </div>
            </div>
            <p className="justify-self-end">별점</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
