import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { doApiPost, URL_API } from "../../services/apiService";
import { useToasts } from "react-toast-notifications";

function Auth(props) {
  const { addToast } = useToasts();
  let history = useHistory();
  useEffect(() => {
    let url = URL_API + "/users/auth";
    doApiPost(url, {})
      .then((data) => {
        if (data.status) {
          console.log("ok");
        }
      })
      .catch((err) => {
        history.push("/admin/login");
        addToast("עליך להיות משתמש רשום בכדי להוסיף מוצר", {
          appearance: "warning",
          autoDismiss: true,
        });
      });
  }, []);

  return <div></div>;
}

export default Auth;
