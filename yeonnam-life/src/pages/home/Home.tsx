const Home = () => {
  return (
    <div className="flex flex-col gap-10 px-15">
      {/* 캐러샐 */}
      <div className="bg-black w-full h-70 rounded-3xl"></div>

      {/* 카테고리 박스*/}
      <div className="flex flex-col gap-3 w-full">
        <h2>어디로 떠날까요?</h2>
        <div className="flex gap-3">
          {/* 카테고리 */}
          <div className="bg-bg-card w-33 h-33 rounded-3xl">카페</div>
          <div className="bg-bg-card w-33 h-33 rounded-3xl">베이커리</div>
          <div className="bg-bg-card w-33 h-33 rounded-3xl">산책로</div>
        </div>
      </div>

      {/* 추천 산책코스 */}
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between">
          <h2>추천 산책코스</h2>
          <button>전체보기</button>
        </div>
        <div className="flex gap-3 overflow-x-scroll">
          <div className="bg-bg-card w-50 h-33 rounded-3xl max-w-100"></div>
          <div className="bg-bg-card w-50 h-33 rounded-3xl"></div>
          {/* <div className="bg-white w-50 h-33 rounded-3xl"></div> */}
        </div>
      </div>

      {/* 인기장소 */}
      <div>
        <h2>인기 장소🔥</h2>
        <div className="flex flex-col gap-3">
          <div className="bg-bg-card w-full h-16 rounded-2xl">밀도</div>
          <div className="bg-bg-card w-full h-16 rounded-2xl">밀도</div>
          <div className="bg-bg-card w-full h-16 rounded-2xl">밀도</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
