import { createApp } from 'vue'
import App from './App.vue'
import {router} from "./router/router";
const Swal = require('sweetalert2')


createApp(App).use(router,Swal).mount('#app')
