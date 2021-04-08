import React from "react";

export default function TypeLink(props) {
  return (
    <>
      <li>
        <a href={props.address}>{props.name}</a>
      </li>
    </>
  );
}
