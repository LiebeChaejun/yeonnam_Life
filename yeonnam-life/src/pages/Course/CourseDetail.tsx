import Course from "./components/Course";
import backArrow from "../../assets/icons/backArrow.svg";

const CourseDetail = () => {
  return (
    <>
      <div className="flex gap-1">
        <img src={backArrow} alt="" />
        <h2 className="text-xl font-semibold">산책 코스</h2>
      </div>

      {/* 코스 설명 박스 */}
      <Course />
    </>
  );
};

export default CourseDetail;
