import React from "react";

function ProdItem(props) {
  let { _id, cat, image, name, price } = props.item;
  return (
    <div className="col-lg-6 border p-2">
      <img className="float-left mr-2 w-25" src={image} alt={name} />
      <h2>{name}</h2>
      <div>מחיר: {price} ש"ח</div>
      <div className="badge badge-dark float-right">{cat}</div>
    </div>
  );
}

export default ProdItem;
