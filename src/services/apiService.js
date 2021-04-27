import Axios from 'axios';

export const URL_API = "http://127.0.0.1:8000/api";

export const doApiPost = async (_url, _body = {}, _method = "POST") =>{

    try{
        let data = await Axios({
            url: _url,
            data: _body,
            method: _method,
            Headers:{
                'X-CSRF-TOKEN': ('meta[name="csrf-token"]').attr('content')
            },
        });
        return data.data;
    }catch(err){
        console.log(err);
    }

}