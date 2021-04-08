import React from "react";
import TypeLink from "./typelink";

export default function ListLinks(props) {
    //הקומפוננטה תקבל מערך השם של המערך יהיה הכותרת הראשית
    //והרכיבים במערך יהיו הקישורים 
  return (
    <div className="col-6 col-md m-3">
      <h5>
        <a className="link-dark" href="#">
          צור קשר
        </a>
      </h5>
      <ul className="list-unstyled text-small">
        <TypeLink name={"שאלה לרב"} address={"#"} />
        <TypeLink name={"כתוב למערכת"} address={"#"} />
      </ul>
    </div>
  );
}
