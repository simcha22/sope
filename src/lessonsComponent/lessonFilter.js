import React from "react";

export default function LessonFilter() {
  return (
    <div>
      <h2 className="text-center">סינון </h2>
      <h4 className="text-center">שפת השיעור</h4>
      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3">
          <a className="nav-link active" href="">
            אידיש
          </a>
          <a className="nav-link" href="">
            עברית
          </a>
        </div>
      </div>
      <h4 className="text-center">קובץ השיעור</h4>
      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3">
          <a className="nav-link active" href="">
            אודיו
          </a>
          <a className="nav-link" href="">
            וידיאו
          </a>
        </div>
      </div>
      <h4 className="text-center">מוסר השיעור</h4>
      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3">
          <a className="nav-link active" href="">
            הרב אלתר
          </a>
          <a className="nav-link" href="">
            הרב אלטר
          </a>
        </div>
      </div>
      <h4 className="text-center">מסכת</h4>
      <div className="d-flex align-items-start col-lg-9">
        <select className="form-select form-select-sm">
          <option selected>בחר מסכת</option>
          <option defaultValue="1">ברכות</option>
          <option defaultValue="2">שבת</option>
          <option defaultValue="3">עירובין</option>
        </select>
      </div>
      <h4 className="text-center">דף</h4>
      <div className="d-flex align-items-start col-lg-9">
        <select
          className="form-select form-select-sm"
        >
          <option selected>בחר דף</option>
          <option defaultValue="1">ב</option>
          <option defaultValue="2">ג</option>
          <option defaultValue="3">ד</option>
        </select>
      </div>
      <button className="btn btn-info m-4">סנן</button>
    </div>
  );
}
