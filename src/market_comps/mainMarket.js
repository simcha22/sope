import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_API } from "../services/apiService";
import Cart from "./cart";
import ProdsList from "./prodsList";


function MainMarket(props) {

    
    let [prods_ar, setProdsAr] = useState([]);

    useEffect((item=>{
        Axios.get(URL_API+'/prods')
        .then(myData =>{
            console.log(myData.data);
            setProdsAr(myData.data);
        })
    }),[])
  return (
    <div className="container-fluid">
       <div className="container">
           <div className="row">
           <ProdsList prods_ar={prods_ar} />
           <Cart/>
           </div>
       </div>
    </div>
  );
}

export default MainMarket;
