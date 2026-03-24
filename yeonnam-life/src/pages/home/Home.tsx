import Carousel from "./components/Carousel/Carousel";
import CourseCard from "../Course/components/CourseCard";
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
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">인기 장소🔥</h2>
        <ul className="flex flex-col gap-3">
          <PlaceCard isHome={true} />
          <PlaceCard isHome={true} />
          <PlaceCard isHome={true} />
        </ul>
      </div>
    </>
  );
};

export default Home;
