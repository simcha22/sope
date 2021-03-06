import Axios from "axios";

export const URL_API = "http://localhost:3000";
//export const URL_API ="https://toralessons.herokuapp.com/prods";

export const doApiPost = async (_url, _body) => {
  try {
    let data = await Axios({
      url: _url,
      data: _body,
      method: "post",
      headers: {
        "x-auth-token": localStorage["tok"],
      },
    });
    return data.data;
  } catch (err) {
    console.log(err.response);
  }
};
