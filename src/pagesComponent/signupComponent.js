import Axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { doApiPost, URL_API } from "../services/apiService";

export default function SignupComponent() {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();

  const formSubmit = (dataBody) => {
    let myUrl = URL_API + "/users/create";
    console.log(dataBody);
    doApiPost(myUrl, dataBody)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("ERROR::", error.response);
      });
  };
  return (
    <div>
      <div className="container">
        <h1 className="text-center m-3">הרשמה למערכת</h1>
        <div className="row">
          <div className="col-lg-4">
            <p className="text-center">אנא הכניסו את פרטיכם</p>
          </div>
          <div className="col-lg-4">
            <div className="shadow p-3 mb-5 bg-white rounded">
              <div>
                <form onSubmit={handleSubmit(formSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">
                      שם פרטי:
                    </label>
                    <input
                      ref={register({ required: true, minLength: 4 })}
                      type="text"
                      className="form-control"
                      id="firstname"
                      name="firstname"
                    />
                    {errors.firstname && (
                      <span className="text-danger">
                        {" "}
                        * אנא הקלד שם פרטי בעל 4 אותיות לפחות
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">
                      שם משפחה:
                    </label>
                    <input
                      ref={register({ required: true, minLength: 4 })}
                      type="text"
                      className="form-control"
                      id="lastname"
                      name="lastname"
                    />
                    {errors.lastname && (
                      <span className="text-danger">
                        {" "}
                        * אנא הקלד שם משפחה בעל 4 אותיות לפחות
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      כתובת מייל:
                    </label>
                    <input
                      ref={register({ required: true })}
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                    {errors.email && (
                      <span className="text-danger">
                        {" "}
                        * אנא הקלד כתובת מייל תיקנית
                      </span>
                    )}
                    <div className="form-text">
                      לא נשתף את כתובת המייל שלך עם אף אחד
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      הקלד סיסמא:
                    </label>
                    <input
                      ref={register({ required: true, minLength: 4 })}
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                    />
                    {errors.password && (
                      <span className="text-danger">
                        {" "}
                        * הקלד סיסמא עם לפחות 4 תוים ואותיות או מספרים
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="approval"
                      name="approval"
                    />
                    <label className="form-check-label" htmlFor="approval">
                      מאשר לקבל עדכונים במייל
                    </label>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-outline-primary"
                    defaultValue="הרשם"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
