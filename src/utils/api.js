import axios from "axios";

export let baseURL;
export let imageURL;

console.log(window.location.hostname);

if (window.location.hostname == "localhost") {
  baseURL = "https://localhost:5000/";
  imageURL = "https://localhost:8052/";
} else {
  baseURL = "https://onlinetestingserver.com:8052/api";
  imageURL = "https://onlinetestingserver.com:8052/";
}

const api = axios.create({
  // baseURL: 'https://dev74.onlinetestingserver.com:5021/api',
  baseURL,

  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
//   api.interceptors.request.use((config) => {
//     document.querySelector('.spinner-container').style.display = 'block';
//     return config;
//   }, (error) => {
//     document.querySelector('.spinner-container').style.display = 'none';
//     return Promise.reject(error);
//   });

//   // Add a response interceptor
//   api.interceptors.response.use((response) => {
//     document.querySelector('.spinner-container').style.display = 'none';
//     return response;
//   }, (error) => {
//     document.querySelector('.spinner-container').style.display = 'none';
//     return Promise.reject(error);
//   });

export default api;
