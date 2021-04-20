import React from "react";
import { Link } from "react-router-dom";

export default function CategoryBoxComponent() {
  return (
    <div class="col-lg-4 mb-2">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">דף היומי בבלי</h5>
          <p class="card-text">
            ללמוד את הדף היומי. מתעדכן כל יום לפי הדף של אותו יום בשפות אידיש
            ועברית, מאת גדולי מגידי השיעורים של זמננו, בשפה קולחת וברורה
          </p>
          <Link to="#" class="btn btn-primary">
            התחל כעת
          </Link>
        </div>
      </div>
    </div>
  );
}
