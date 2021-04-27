import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL_API } from "../services/apiService";
import LessonBox from "./lessonBox";
import LessonFilter from "./lessonFilter";

export default function LessonsByCategory(props) {
  let [lessons_ar, setLessonsAr] = useState([]);
  useEffect((item) => {
    let catName = props.match.params.cat;

    let myUrl = URL_API + "/lessons";
    axios.get(myUrl).then((myData) => {
      setLessonsAr(myData.data);
    });
  },
  []);
  return (
    <div className="container">
      
      <div className="row m-3">
        <div className="col-lg-2">
          <LessonFilter />
        </div>
        <div className="col-lg-10">
          <div className="row">
            {lessons_ar.map(item=>{
              return(
                <LessonBox key={item.lesson_id} item={item}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
