
import { createWebHistory, createRouter } from 'vue-router';
/*Custom Components Importing*/
import Login from '../components/pages/Login'
import Dashboard from '../components/pages/Dashboard'
import Home from '../components/pages/modules/pms/Home'
// import ModuleLayout from '../components/layouts/ModuleLayout'
import permissions from '../permisson'

const userData = JSON.parse(localStorage.getItem("userData"))
console.log('13',userData)

// route guard
function guardMyRoute(to, from, next) {
    to.matched.some((record) => {
      if (record.meta.authentication_required) {
        if (permissions.superuser_status || record.meta.title === "common") {
          next();
        } else if (userData.id && permissions.hasPermission(record.meta.title)) {
          next();
        } else next("/");
      } else next();
    });
  }



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
        name: 'Dashboard',
        beforeEnter: guardMyRoute,
        meta: { title: "common", authentication_required: true },

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

