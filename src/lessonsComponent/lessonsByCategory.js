import React from "react";
import LessonBox from "./lessonBox";
import LessonFilter from "./lessonFilter";

export default function LessonsByCategory(props) {
  let catName = props.match.params.cat;
  return (
    <div className="container">
      {catName}
      <div className="row mb-3">
        <div className="col-lg-2">
          <LessonFilter />
        </div>
        <div className="col-lg-10">
            <div className="row">
                <LessonBox/>
                <LessonBox/>
                <LessonBox/>
                <LessonBox/>
                <LessonBox/>
                <LessonBox/>
                <LessonBox/>
            </div>
        </div>
      </div>
    </div>
  );
}
