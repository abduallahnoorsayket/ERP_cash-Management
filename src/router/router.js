/*System Importing*/
// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createWebHistory, createRouter } from 'vue-router';
/*Custom Components Importing*/
import Login from '../components/pages/Login'
import Dashboard from '../components/pages/Dashboard'
import Home from '../components/pages/modules/pms/Home'
// import ModuleLayout from '../components/layouts/ModuleLayout'






/*Inserting VueRouter to the Vue Framework*/
// Vue.use(VueRouter);


const routes = [

    {
        path: '/',
        component: Login,
        name: 'Login'

    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'Dashboard'

    },
    {
        path: '/pms',
        component: Home,
        name: 'Home'

    },


];


export const router = createRouter({
	history: createWebHistory(),
	routes,
});

// export default router;

