import axios from "axios";

const subscribeAPI = axios.create({
    baseURL:"",
    headers:{
        'Content-Type':'application/json'
    }
})

export {
    subscribeAPI
}