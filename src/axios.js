// import axios from 'axios'

// // axios.defaults.baseURL = 'http://118.27.10.116:81/api';
 
// axios.defaults.baseURL =  window.location.protocol + '//' + window.location.hostname + ':8000/api'
// // http://118.27.10.116:81/
// axios.interceptors.request.use(
// (config) => {
// const token = localStorage.getItem("token");

// if (token) {
// config.headers['Authorization'] = `token ${token}`;
// }

// return config;
// },

// (error) => {
// return Promise.reject(error);
// }
// );


import axios from 'axios'

// const ax_ins_obj = {
//   baseURL: 'http://127.0.0.1:8000/api/',
// }
const userData = JSON.parse(localStorage.getItem("userData"))
console.log('typeof',typeof (userData));
console.log('33', userData);

// if (userData) {
//     const token =  userData.token
//     instance.headers['Authorization'] = `token ${token}`;
// }

// const instance = axios.create(ax_ins_obj);






const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {'Authorization': userData ? `token ${userData.token}` : ''}
});


export default instance