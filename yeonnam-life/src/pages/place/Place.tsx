import React from "react";

const Place = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* 뒤로가기 버튼 */}
      <div className="flex gap-3">
        <button>image</button>
        <p>장소 상세</p>
      </div>

      {/* 사진 담는 곳 */}
      <div className="w-100 h-50 rounded-2xl bg-bg-warm border-border border flex justify-center items-center">
        <p className="text-7xl">🍞</p>
      </div>

      {/* 컨텐츠 */}
      <div className="relative w-100 h-75 flex flex-col gap-3">
        <div className="absolute w-12 h-12 bg-bg-warm rounded-full right-0 top-2 flex justify-center items-center">
          ❤️
        </div>

        {/* 카테고리 태그 */}
        <div className="px-3 py-2 text-xs flex gap-1">
          <p className="bg-bg-warm text-accent-warm rounded-2xl px-2 py-1">
            🥐베이커리
          </p>
        </div>

        {/* 컨텐츠 내용 */}
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl text-text-primary">밀도</h3>
          <p className="text-text-secondary">식빵 한 장의 행복, 연남 본점</p>
          <ul className="w-100 h-30 bg-bg-warm rounded-2xl border border-border p-2 flex flex-col gap-3">
            <li className="text-accent-warm">⭐️별점</li>
            <li className="text-text-secondary">주소</li>
            <li className="text-text-secondary">영업시간</li>
          </ul>

          {/* 태그 목록 */}
          <div className="flex gap-3">
            <p className="bg-bg-warm text-text-secondary text-sm rounded-full px-3 py-2">
              #식빵
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
