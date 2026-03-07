import React from "react";
import Course from "../../components/course/Course";
import backArrow from "../../components/img/backArrow.svg";

const CourseDetail = () => {
  return (
    <div className="flex flex-col gap-3 py-3 px-3">
      <div className="flex gap-1">
        <img src={backArrow} alt="" />
        <h2 className="text-xl font-semibold">산책 코스</h2>
      </div>

      {/* 코스 설명 박스 */}
      <Course />
    </div>
  );
};

export default CourseDetail;
