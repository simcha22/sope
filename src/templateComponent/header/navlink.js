import React from "react";
import {Link} from 'react-router-dom';

export default function NavLink(props) {
  return (
    <>
      <li className="nav-item mr-2 ">
        <Link className="nav-link active" to={props.address}>
          {props.name}
        </Link>
      </li>
    </>
  );
}
