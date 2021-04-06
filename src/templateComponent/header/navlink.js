import React from "react";

export default function NavLink(props) {
  return (
    <>
      <li className="nav-item mr-2 ">
        <a className="nav-link active" href={props.address}>
          {props.name}
        </a>
      </li>
    </>
  );
}
