import React from "react";
import { Link } from "react-router-dom";

export default function LessonBox(props) {
  let {
    lesson_id,
    lesson_title,
    lesson_type,
    lesson_language,
    lesson_information,
    lesson_play_date,
    lesson_duration,
    lesson_likes,
  } = props.item;
  return (
    <div className="col-lg-6">
      <div className="card border-info mb-3 text-center">
        <div className="card-header">{lesson_type}</div>
        <div className="card-body">
          <h5 className="card-title">{lesson_title}</h5>
          <p className="card-text">{lesson_play_date}</p>
          <p>{lesson_information}</p>
          <p>{lesson_duration}</p>
          <p className="card-text">שפת השיעור: {lesson_language}</p>
          <div className="d-flex gap-2 col-6 mx-auto">
            <button type="button" class="btn btn-primary position-relative">
              לייקים
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                {lesson_likes}+ <span class="visually-hidden">unread messages</span>
              </span>
            </button>
            <Link to="/lesson/{lesson_id}" className="btn btn-outline-info">
              צפה בשיעור כעת
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
