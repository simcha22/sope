import React, { useState } from "react";
import Floor2 from "./floor2";
import { MyContext } from "../context/context.js";

function AppContext(props) {
  let [counter, setCounter] = useState(7);
  return (
    <MyContext.Provider value={{counter,setCounter}}>
      <div className="container">
        AppContext work
        <Floor2 />
      </div>
    </MyContext.Provider>
  );
}

export default AppContext;
