import React from "react";
import { doApiPost, URL_API } from "../../services/apiService";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

function Login(props) {
  const { addToast } = useToasts();
  let history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const formSubmit = (dataBody) => {
    let myUrl = URL_API + "/users/login";
    doApiPost(myUrl, dataBody)
      .then((data) => {
        //console.log(data);
        if (data.token) {
          //console.log(data.data?.token)
          localStorage.setItem("tok", data.token);
         history.push("/admin/add_prod");
         addToast("ברוכים הבאים לאתר", {
          appearance: "success",
          autoDismiss: true,
        });
        }
      })
      .catch((err) => {
        alert("משתמש איננו נמצא");
        //console.log(err.response);
      });
  };
  return (
    <div className="container">
      <h2>Login:</h2>
      <div className="col-lg-6 shadow p-4">
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              ref={register({ required: true, minLength: 2 })}
              type="text"
              id="email"
              name="email"
              className="form-control"
            />
            {errors.email && (
              <span className="text-danger">*הקלד כתובת מייל</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="pass">Password: </label>
            <input
              ref={register({ required: true, min: 1 })}
              type="number"
              id="pass"
              name="pass"
              className="form-control"
            />
            {errors.pass && <span className="text-danger">*הקלד סיסמא</span>}
          </div>

          <button className="btn btn-success mt-3 shadow">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
