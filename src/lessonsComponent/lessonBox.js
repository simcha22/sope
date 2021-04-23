import React from "react";
import { Link } from "react-router-dom";

export default function LessonBox(props) {
  return (
      <div className="col-lg-6">
        <div className="card border-info mb-3 text-center">
          <div className="card-header">שפת אמת</div>
          <div className="card-body">
            <h5 className="card-title">שיעור שפת אמת פרשת שמות</h5>
            <p className="card-text">
              נמסר ביום חמישי בישיבת פני מנחם לעמלי תורה ירושלים
            </p>
            <p className="card-text">שפת השיעור: עברית</p>
            <div className="d-grid gap-2 col-6 mx-auto">
              <Link to="/lesson/שפת אמת" className="btn btn-outline-info">
                צפה בשיעור כעת
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}
