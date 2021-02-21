import React from "react";
import ProdItem from "./prodItem";

function ProdsList(props) {
    let ar = props.prods_ar;

  return (
    <div className="col-lg-9 py-4">
      <div className="row">
          {ar.map(item => {
              return(
                <ProdItem key={item._id} item={item}/>
              )
          })}
      </div>
    </div>
  );
}

export default ProdsList;
