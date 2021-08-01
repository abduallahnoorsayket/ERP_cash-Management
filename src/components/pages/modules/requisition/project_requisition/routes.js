import project_requisitionCreate from './project_requisitionCreate'
import project_requisitionList from './project_requisitionList'
// import project_requisitionEdit from './project_requisitionEdit'


const project_requisitionRoutes = [

    {
        path: '/project-requisition-list',
        component: project_requisitionList,
        name: 'project_requisitionList'

    },
    {
        path: '/project-requisition-create',
        component: project_requisitionCreate,
        name: 'project_requisitionCreate'

    },
    //  {
    //     path: '/project-requisition-edit/:id',
    //     component: project_requisitionEdit,
    //     name: 'project_requisitionEdit'

    // },
  
   
   


];

export default project_requisitionRoutes;