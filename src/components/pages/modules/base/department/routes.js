import DepartmentList from './DepartmentList'
import DepartmentCreate from './DepartmentCreate'
import DeparmentEdit from './DeparmentEdit'


const departmentRoutes = [

    {
        path: '/department-list',
        component: DepartmentList,
        name: 'DepartmentList'

    },
    {
        path: '/department-create',
        component: DepartmentCreate,
        name: 'DepartmentCreate'

    },
     {
        path: '/department-edit/:id',
        component: DeparmentEdit,
        name: 'DepartmentEdit'

    },
  
   
   


];

export default departmentRoutes;