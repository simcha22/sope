import Axios from "axios";
import React, { useEffect, useState } from "react";
import { URL_API } from "../services/apiService";
import Cart from "./cart";
import ProdsList from "./prodsList";

function MainMarket(props) {
  let [prods_ar, setProdsAr] = useState([]);

  useEffect(
    (item) => {
      let catName = props.match.params.name;
      let searchQ = props.match.params.q;

      let myUrl = URL_API + "/prods";
      if (catName) {
        myUrl = URL_API + "/prods/cat/" + catName;
      }
      else if(searchQ){
        myUrl = URL_API + "/prods/search/?q=" + searchQ;
      }
      Axios.get(myUrl).then((myData) => {
        console.log(myData.data);
        setProdsAr(myData.data);
      });
    },
    [props.match.params]
  );

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <ProdsList prods_ar={prods_ar} />
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default MainMarket;
