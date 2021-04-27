import React, { useContext } from "react";
import { MyContext } from "../context/context.js";
import Floor3 from "./floor3";
import Floor3List from "./floor3List.js";

function Floor2(props){
  let {setCounter2 } = useContext(MyContext);

    return(
        <div>
            Floor2 work
            <button className="btn btn-info" onClick={()=>{
                setCounter2(0)
            }}>reset conter 2 </button>
           <Floor3/>
           <Floor3List/>
        </div>
    )
}

export default Floor2;