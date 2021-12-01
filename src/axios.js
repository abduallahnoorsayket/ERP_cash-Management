

import axios from 'axios'

// const ax_ins_obj = {
//   baseURL: 'http://127.0.0.1:8000/api/',
// }
const userData = JSON.parse(localStorage.getItem("userData"))







const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  // baseURL: 'http://209.126.0.84:81/api/',
  headers: {'Authorization': userData ? `token ${userData.token}` : ''}
});
// const instance = axios.create({
//   baseURL: 'https://api.dreamfuturetech.com/api/',
//   headers: {'Authorization': userData ? `token ${userData.token}` : ''}
// });


export default instance