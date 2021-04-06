import React, { setStest } from "react";
import Nav from "./header/nav";

export default function HeaderComponent() {
  
  return (
    <>
      <header className="text-color bg-peru">
        <div className="container">
          <Nav />
        </div>
      </header>
    </>
  );
}
