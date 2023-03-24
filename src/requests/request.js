import axios from "axios";

//const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };

const request = axios.create({
    baseURL: 'https://todo-api.timetask.ru/api/',
   // headers: headers
});

export default request;