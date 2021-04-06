import React from "react";
import { doApiPost, URL_API } from "../../services/apiService";
import { useForm } from "react-hook-form";
//import { auth } from "../../services/authService";
import Auth from "./auth";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

function AddProd(props) {
  const { addToast } = useToasts();
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();

  const formSubmit = (dataBody) => {
    let myUrl = URL_API + "/prods/add";
    //Axios({
    // url: myUrl,
    //  method: "POST",
    //  data: dataBody
    //})
    doApiPost(myUrl, dataBody)
      .then((data) => {
        console.log(data);
        if (data._id) {
          addToast("המוצר נוסף בהצלחה", {
            appearance: "info",
            autoDismiss: true,
          });
          history.push("/admin/prodUserList");
        }
      })
      .catch((err) => {
        console.log(err.response);
        addToast("שגיאה בהוספת מוצר", {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };
  return (
    <div className="container">
      <Auth />
      <h2>add prod:</h2>
      <div className="col-lg-6 shadow p-4">
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="form-group">
            <label htmlFor="name">prod name:</label>
            <input
              ref={register({ required: true, minLength: 2 })}
              type="text"
              id="name"
              name="name"
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">*אנא הקלד שם לפחות 2 אותיות</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="price">price: </label>
            <input
              ref={register({ required: true, min: 1 })}
              type="number"
              id="price"
              name="price"
              className="form-control"
            />
            {errors.price && (
              <span className="text-danger">*אנא הקלד מחיר</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="image">image url: </label>
            <input
              ref={register({ required: true, minLength: 10 })}
              type="text"
              id="image"
              name="image"
              className="form-control"
            />
            {errors.image && (
              <span className="text-danger">*אנא הוסיף כתובת תמונה </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="cat">category name: </label>
            <select
              ref={register({ required: true })}
              type="text"
              id="cat"
              name="cat"
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
