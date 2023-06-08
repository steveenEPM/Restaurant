import axios from "axios";

const apiThem = (url)=>{
    
    const instacia = axios({
        method:"GET",
        url:url,
        baseURL:"https://www.themealdb.com/api/json/v1/1"
    })

    return instacia
}

export default apiThem