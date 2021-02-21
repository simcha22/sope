import React from "react";
import { Link } from "react-router-dom";

function HeaderMarket(props) {
  return (
    <header className="container-fluid bg-dark text-white">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="logo mr-2">
              <h2>מאפיית פריך</h2>
            </div>
            <nav>
              <Link to="/">דף הבית</Link>
              <Link to="/cat/food">אוכל</Link>
              <Link to="/cat/animals">מסיבות</Link>
              <Link to="/cat/clothing">משלימים</Link>
            </nav>
          </div>
          <div className="search d-flex">
            <input className="form-control" type="text" />
            <button className="btn btn-danger">חיפוש</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderMarket;
