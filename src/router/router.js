
import { createWebHistory, createRouter } from 'vue-router';
/*Custom Components Importing*/
import Login from '../components/pages/Login'
import Dashboard from '../components/pages/Dashboard'
import Home from '../components/pages/modules/pms/Home'
import permissions from '@/permisson'
import projectRoutes from '../components/pages/modules/pms/project/routes'
import versionRoutes from '../components/pages/modules/pms/version/routes'
import sprintRoutes from '../components/pages/modules/pms/sprint/routes'

const userData = JSON.parse(localStorage.getItem("userData"))


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


const baseRoutes = [

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

const routes = [].concat(baseRoutes,projectRoutes,versionRoutes,sprintRoutes);





export const router = createRouter({
	history: createWebHistory(),
	routes,
});

// export default router;

