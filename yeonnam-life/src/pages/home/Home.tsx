import Carousel from "./components/Carousel/Carousel";
import CourseCard from "../CourseDetail/components/CourseCard";
import CategoryCard from "../../components/Category/CategoryTag";
import PlaceCard from "../PlaceDetail/components/PlaceCard";

const Home = () => {
  return (
    <>
      {/* 캐러샐 */}
      <Carousel />

      {/* 카테고리 박스*/}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">어디로 떠날까요?</h2>
        <div className="flex gap-3 max-w-100 overflow-x-scroll">
          {/* 카테고리 */}
          <CategoryCard />
          <CategoryCard shop="cafe" />
          <CategoryCard shop="restaurant" />
          <CategoryCard shop="bakery" />
        </div>
      </div>

      {/* 추천 산책코스 */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">추천 산책코스</h2>
          <button className="text-accent-warm text-sm">전체보기</button>
        </div>
        <div className="flex gap-3 max-w-100 overflow-x-scroll">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>

      {/* 인기장소 */}
      <div>
        <h2>인기 장소🔥</h2>
        <ul className="flex flex-col gap-3">
          <PlaceCard isHome={true} />
          <PlaceCard isHome={true} />
          <PlaceCard isHome={true} />

          {/* <div className="bg-bg-card h-16 rounded-2xl flex items-center justify-between px-3">
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
          <div className="bg-bg-card h-16 rounded-2xl flex items-center justify-between px-3">
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
          </div> */}
        </ul>
      </div>
    </>
  );
};

export default Home;
