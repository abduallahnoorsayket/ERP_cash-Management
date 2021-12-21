import project_requisitionCreate from './project_requisitionCreate'
import project_requisitionList from './project_requisitionList'
import Project_requisitionEdit from './Project_requisitionEdit'
import Project_requisitionDetails from './Project_requisitionDetails'


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
     {
        path: '/project-requisition-edit/:id',
        component: Project_requisitionEdit,
        name: 'Project_requisitionEdit'

    },
    {
        path: '/project-requisition-details/:id',
        component: Project_requisitionDetails,
        name: 'Project_requisitionDetails'

    },
   
   


];

export default project_requisitionRoutes;