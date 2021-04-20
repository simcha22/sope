import Axios from "axios";
import React,{useRef} from "react";

export default function LoginComponent() {
  let formRef = useRef(null);

  const formSubmit = (e) =>{
    e.preventDefault();
    let myUrl = 'http://127.0.0.1:8000/api/login';
    let dateBody = {
      email: formRef.current[0].value,
      password: formRef.current[1].value,
    }

    Axios({
      url:myUrl,
      method:"POST",
      data: dateBody
    })
    .then(data =>{
      console.log(data);
    }).catch(err =>{
      console.log(err.response);
    })
  }
  return (
    <div>
      <div className="container">
        <h1 className="text-center m-3">כניסה למערכת</h1>
        <div className="row">
          <div className="col-lg-4">
            <p className="text-center ">אנא הכניסו את פרטיכם</p>
          </div>
          <div className="col-lg-4">
            <div className="shadow p-3 mb-5 bg-white rounded">
              <div>
                <form ref={formRef} onSubmit={formSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      כתובת מייל:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      הקלד סיסמא:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                    />
                  </div>
                  <input type="submit" className="btn btn-outline-primary" defaultValue="הכנס"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
