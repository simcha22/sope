import React from "react";
import CategoryBoxComponent from "./categoryBoxComponent";

export default function LessonMainComponent() {
  return (
    <div className="container">
      <div className="text-center">
        <h3>ברוכים הבאים למערכת השיעורים של ארי שבחבורה</h3>
        <h5>
          כאן תוכלו להאזין לכל השיעורים לפי בחירה, סינון, או לפי סדר מסוים, או
          לפי רב
        </h5>
        <p>תהנו תחכימו ותלמדו</p>
      </div>
      <div className="row">
        <CategoryBoxComponent />
        <CategoryBoxComponent />
        <CategoryBoxComponent />
        <CategoryBoxComponent />
      </div>
    </div>
  );
}
