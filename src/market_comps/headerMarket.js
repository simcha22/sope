import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

function HeaderMarket(props) {
  let history = useHistory();
  let searchInput = useRef(null);
  const onSearch = () => {
    let inp = searchInput.current.value;
    history.push("/search/"+inp)
  }
  return (
    <header className="container-fluid bg-dark text-white">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="logo mr-2">
            </div>
            <nav>
              <Link to="/">דף הבית</Link>
              <Link to="/cat/food">אוכל</Link>
              <Link to="/cat/animals">מסיבות</Link>
              <Link to="/cat/clothing">משלימים</Link>
              <Link to="/admin/add_prod">add prod</Link>
              <Link to="/admin/login">login</Link>
            </nav>
          </div>
          <div className="search d-flex">
            <input ref={searchInput} className="form-control" type="text" />
            <button onClick={onSearch} className="btn btn-danger">
              חיפוש
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderMarket;
