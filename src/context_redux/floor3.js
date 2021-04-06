import React,{useContext} from "react";
import { MyContext } from "../context/context.js";

function Floor3(props){

    let {counter,setCounter} = useContext(MyContext)
    return(
        <div className="border">
            Floor3 work 
            <h2>Counter: {counter}</h2>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>Add 1 app counter</button>
        </div>
    )
}

export default Floor3;