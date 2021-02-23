import { doApiPost, URL_API } from "./apiService"

export const auth = ()=>{
    let url= URL_API+"/users/auth";
    doApiPost(url,{})
    .then(data =>{
        if(data.status){
            console.log("ok")
        }
    })
    .catch(err=>{
        console.log(err)
        window.location.assign("/admin/login")
    })
}