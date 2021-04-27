import React, { useState } from "react";
import Floor2 from "./floor2";
import { MyContext } from "../context/context.js";

function AppContext(props) {
  let [counter, setCounter] = useState(2);
  let [counter2, setCounter2] = useState(3);
  let [ar, setAr] = useState([
    {name: "Apple"}
  ]);
  let dataContext = {
    counter,
    setCounter,
    counter2,
    setCounter2,
  };
  return (
    <MyContext.Provider value={dataContext}>
      <div className="container">
        AppContext work
        <Floor2 />
      </div>
    </MyContext.Provider>
  );
}

export default AppContext;
