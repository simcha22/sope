import React from "react";

export default function LoginComponent() {
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
                <form>
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
                  <button type="submit" className="btn btn-outline-primary">
                    כניסה
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
