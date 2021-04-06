import React from "react";

export default function Search(props) {
  return (
    <>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          id="search"
          placeholder=" חיפוש שיעור"
          aria-label="Search"
        />
        <button className="btn btn-outline-info" 
        onClick={()=>{
            let title = document.getElementById('search').value
            props.upsearch(title);
        }}>
          חפש
        </button>
      </form>
    </>
  );
}
