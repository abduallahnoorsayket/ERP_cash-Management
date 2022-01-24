
import { createWebHistory, createRouter } from 'vue-router';
/*Custom Components Importing*/
import Login from '../components/pages/Login'
import Profile from '../components/pages/Profile'
import Dashboard from '../components/pages/Dashboard'
import Home from '../components/pages/modules/pms/Home'
import BaseHome from '../components/pages/modules/base/Home'
import RequisitionHome from '../components/pages/modules/requisition/Home'
import FilesList from '../components/pages/modules/file/fileManager/FilesList'
import permissions from '@/permisson'
import projectRoutes from '../components/pages/modules/pms/project/routes'
import programRoutes from '../components/pages/modules/pms/program/routes'
import versionRoutes from '../components/pages/modules/pms/version/routes'
import sprintRoutes from '../components/pages/modules/pms/sprint/routes'
import taskCategory from '../components/pages/modules/pms/task_category/routes'
import taskRoutes from '../components/pages/modules/pms/task/routes'
import departmentRoutes from '../components/pages/modules/base/department/routes'
import clientsRoutes from '../components/pages/modules/base/clients/routes'
import itemRoutes from '../components/pages/modules/base/items/routes'
import unitsRoutes from '../components/pages/modules/base/units/routes'
import userRoutes from '../components/pages/modules/base/user/routes'
import groupRoutes from '../components/pages/modules/base/group/routes'
import project_requisitionRoutes from '../components/pages/modules/requisition/project_requisition/routes'
import commentHome from '../components/pages/modules/comment/Home'
import Notification from '../components/pages/modules/notification/Home'
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
  {
    path: '/comment',
    component: commentHome,
    name: 'commentHome'

  },
  {
    path: '/files-list',
    component: FilesList,
    name: 'FilesList'

  },
  {
    path: '/notification',
    component: Notification,
    name: 'Notification'

  },
  {
    path: '/profile',
    component: Profile,
    name: 'Profile'

  },


];

const routes = [].concat(
  baseRoutes,
  projectRoutes,
  versionRoutes,
  sprintRoutes,
  taskRoutes,
  taskCategory,
  departmentRoutes,
  clientsRoutes,
  itemRoutes,
  unitsRoutes,
  userRoutes,
  groupRoutes,
  project_requisitionRoutes,
  programRoutes,

);





export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// export default router;

