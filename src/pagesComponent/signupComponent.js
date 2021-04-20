import React from "react";

export default function SignupComponent() {
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
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      שם מלא:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
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
                    <label htmlFor="password1" className="form-label">
                      הקלד סיסמא:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password1"
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
                      {" "}
                      מאשר לקבל עדכונים במייל
                    </label>
                  </div>
                  <button type="submit" className="btn btn-outline-primary">
                    הרשם
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
