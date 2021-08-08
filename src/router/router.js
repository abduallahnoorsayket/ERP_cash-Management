
import { createWebHistory, createRouter } from 'vue-router';
/*Custom Components Importing*/
import Login from '../components/pages/Login'
import Dashboard from '../components/pages/Dashboard'
import Home from '../components/pages/modules/pms/Home'
import BaseHome from '../components/pages/modules/base/Home'
import RequisitionHome from '../components/pages/modules/requisition/Home'
import permissions from '@/permisson'
import projectRoutes from '../components/pages/modules/pms/project/routes'
import versionRoutes from '../components/pages/modules/pms/version/routes'
import sprintRoutes from '../components/pages/modules/pms/sprint/routes'
import taskRoutes from '../components/pages/modules/pms/task/routes'
import departmentRoutes from '../components/pages/modules/base/department/routes'
import clientsRoutes from '../components/pages/modules/base/clients/routes'
import itemRoutes from '../components/pages/modules/base/items/routes'
import unitsRoutes from '../components/pages/modules/base/units/routes'
import userRoutes from '../components/pages/modules/base/user/routes'
import project_requisitionRoutes from '../components/pages/modules/requisition/project_requisition/routes'

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
    {
        path: '/base',
        component: BaseHome,
        name: 'BaseHome'

    },  
    {
      path: '/requisition',
      component: RequisitionHome,
      name: 'RequisitionHome'

  }, 

];

const routes = [].concat(
  baseRoutes,
  projectRoutes,
  versionRoutes,
  sprintRoutes,
  taskRoutes,
  departmentRoutes,
  clientsRoutes,
  itemRoutes,
  unitsRoutes,
  userRoutes,
  project_requisitionRoutes
  );





export const router = createRouter({
	history: createWebHistory(),
	routes,
});

// export default router;

