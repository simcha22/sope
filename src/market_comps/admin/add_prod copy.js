import Axios from "axios";
import React, { useRef } from "react";
import { URL_API } from "../../services/apiService";
//גירסא לפני ולידציה
function AddProd(props) {

    let formRef = useRef(null);

    const formSubmit =(evt)=>{
        evt.preventDefault();
        let myUrl = URL_API+"/prods/add";
        let dateBody ={
            name: formRef.current[0].value,
            price: formRef.current[1].value,
            image: formRef.current[2].value,
            cat: formRef.current[3].value
        }
        Axios({
            url:myUrl,
            method:"POST",
            data:dateBody
        })
        .then(data =>{
            console.log(data);
        })
        .catch(err=>{
            console.log(err.response)
        })
    }
  return (
    <div className="container">
      <h2>add prod:</h2>
      <div className="col-lg-6 shadow p-4">
        <form ref={formRef} onSubmit={formSubmit}>
          <div className="form-group">
            <label htmlFor="id_name">prod name:</label>
            <input
              type="text"
              id="id_name"
              name="id_name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="id_price">price: </label>
            <input
              type="number"
              id="id_price"
              name="id_price"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="id_url">image url: </label>
            <input
              type="text"
              id="id_url"
              name="id_url"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="id_cat">category name: </label>
            <select
              type="text"
              id="id_cat"
              name="id_cat"
              className="form-control"
            >
              <option defaultValue="foot">food</option>
              <option defaultValue="animals">animals</option>
              <option defaultValue="clothing">clothing</option>
            </select>
          </div>
          <button className="btn btn-success mt-3 shadow">Add Prod</button>
        </form>
      </div>
    </div>
  );
}

export default AddProd;
