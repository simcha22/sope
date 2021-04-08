import React from "react";
import ListLinks from "./footer/listLinks";

export default function FooterComponent() {
    // התפריט יקבל פעם אחת את הטבלא של הליניקים 
    // הלינקים יהיו מחולקים לפי סוגים enam 
    //וכך כל סוג יהיה בעמודה שלו 
  return (
    <div>
      <footer className="bg-peru">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md text-center m-3">
              <img className="w-50" src="..." />
              <div className="p-2 text-color">
                כל הזכויות שמורות למערכת ארזי הלבנון
              </div>
              <div>2021@</div>
            </div>
            <div className="col-6 col-md m-3">
              <h5>עמודים</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a href="#">דף הבית</a>
                </li>
                <li>
                  <a href="#">אודות</a>
                </li>
                <li>
                  <a href="#">שיעורים</a>
                </li>
                <li>
                  <a href="">שידור חי</a>
                </li>
                <li>
                  <a href="">כניסה</a>
                </li>
                <li>
                  <a href="">הרשמה</a>
                </li>
                <li>
                  <a href="">מערכת ניהול</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md m-3">
              <h5>רבנים</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a href="#">הרב דניאל אלטר</a>
                </li>
                <li>
                  <a href="#">הרב שאול אלטר</a>
                </li>
                <li>
                  <a href="#">הרב אברהם מרדכי אלטר</a>
                </li>
                <li>
                  <a href="#">הרב ...</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md m-3">
              <h5>שיעורים ודרשות</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a href="#">דף היומי בבלי</a>
                </li>
                <li>
                  <a href="#">דף היומי ירושלמי</a>
                </li>
                <li>
                  <a href="#">חומש רש"י</a>
                </li>
                <li>
                  <a href="#">רמב"ם יומי</a>
                </li>
                <li>
                  <a href="#">אבות</a>
                </li>
                <li>
                  <a href="#">שפת אמת</a>
                </li>
                <li>
                  <a href="#">דרשות</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md m-3">
              <h5>ספרים</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a href="#">פני מנחם</a>
                </li>
                <li>
                  <a href="#">דרשות ושיעורים</a>
                </li>
                <li>
                  <a href="#">שולי הגליון</a>
                </li>
                <li>
                  <a href="#">עברא דדשא</a>
                </li>
                <li>
                  <a href="#">מאה ואחד</a>
                </li>
              </ul>
            </div>
            <ListLinks/>
          </div>
        </div>
      </footer>
    </div>
  );
}
