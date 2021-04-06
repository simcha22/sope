import React, { useEffect, useState } from "react";
import { doApiPost, URL_API } from "../../services/apiService";
import Auth from "./auth";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

function ProdUserList(props) {
  let [prods_ar, setProdsAr] = useState([]);
  let [counter, setCounter] = useState(0);
  const { addToast } = useToasts();

  useEffect(() => {
    let myUrl = URL_API + "/prods/userProds";
    doApiPost(myUrl).then((data) => {
      setProdsAr(data);
    });
  }, [counter])

  const delProd = (_id) => {
    let r = window.confirm("האם אתה בטוח שברצונך למחוק את המוצר");
    if (r) {
      let myUrl = URL_API + "/prods/delUserProds";
      doApiPost(myUrl, { _id }, "DELETE").then((data) => {
        setCounter(counter+1);
        addToast("המוצר נמחק בהצלחה", {
          appearance: "success",
          autoDismiss: true,
        });
      });
    }
  }

  return (
    <div className="container mt-3">
      <Auth />
      <h2 className="text-center">רשימת מוצרים</h2>
      <Link className="btn btn-info mb-2" to="/admin/add_prod">
        add prod
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>price</th>
            <th>category</th>
            <th>date time</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {prods_ar.map((item, i) => {
            return (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.cat}</td>
                <td>{item.date_time}</td>
                <td>
                  <button className="btn btn-info mr-2">Edit</button>
                  <button
                    onClick={() => {
                      delProd(item._id);
                    }}
                    className="btn btn-danger"
                  >
                    Del
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProdUserList;
