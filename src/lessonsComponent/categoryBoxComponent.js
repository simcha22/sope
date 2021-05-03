import React from "react";
import { Link } from "react-router-dom";

export default function CategoryBoxComponent(props) {
  return (
    <div className="col-lg-4 mb-2">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">דף היומי בבלי</h5>
          <p className="card-text">
            ללמוד את הדף היומי. מתעדכן כל יום לפי הדף של אותו יום בשפות אידיש
            ועברית, מאת גדולי מגידי השיעורים של זמננו, בשפה קולחת וברורה
          </p>
          <Link to="/lessons/דף_היומי" className="btn btn-primary">
            התחל כעת
          </Link>
        </div>
      </div>
    </div>
  );
}
