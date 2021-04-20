import Axios from "axios";
import React,{useRef} from "react";

export default function SignupComponent() {
  let formRef = useRef(null);

  const formSubmit = (e)=>{
    e.preventDefault();
    let myUrl = ' http://127.0.0.1:8000/api/signup';
    let dateBody = {
      firstname: formRef.current[0].value,
      lastname: formRef.current[1].value,
      email: formRef.current[2].value,
      password: formRef.current[3].value,
      approval: formRef.current[4].value
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
        <h1 className="text-center m-3">הרשמה למערכת</h1>
        <div className="row">
          <div className="col-lg-4">
            <p className="text-center">אנא הכניסו את פרטיכם</p>
          </div>
          <div className="col-lg-4">
            <div className="shadow p-3 mb-5 bg-white rounded">
              <div>
                <form ref={formRef} onSubmit={formSubmit}>
                  <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">
                      שם פרטי:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      name="firstname"
                    />
                    
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">
                      שם משפחה:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      name="lastname"
                    /> 
                  </div>
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
                    
                    <div className="form-text">
                      לא נשתף את כתובת המייל שלך עם אף אחד
                    </div>
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
                  <input type="submit" className="btn btn-outline-primary"
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
