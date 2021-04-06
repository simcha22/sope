import React from "react";
import Search from "./search";
import NavLink from "./navlink";

export default function Nav() {
  const upsearch = (title) => {
    alert(title);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-peru">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="logo-img"></div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4 ">
              <NavLink name={"דף הבית"} address={"#"} />
              <NavLink name={"אודות"} address={"#"} />
              <NavLink name={"שיעורים ודרשות"} address={"#"} />
              <NavLink name={"שידור חי"} address={"#"} />
              <NavLink name={"ספרים"} address={"#"} />
              <NavLink name={"רבנים"} address={"#"} />
              <NavLink name={"מה חדש"} address={"#"} />
            </ul>
            <Search upsearch={upsearch}/>
          </div>
        </div>
      </nav>
    </>
  );
}
