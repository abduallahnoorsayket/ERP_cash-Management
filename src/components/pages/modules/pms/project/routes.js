import ProjectList from './ProjectList'
import ProjectAdvanceList from './ProjectAdvanceList'
import ProjectCreate from './ProjectCreate'
import ProjectEdit from './ProjectEdit'


const projectRoutes = [

    {
        path: '/project-basic-list',
        component: ProjectList,
        name: 'ProjectList'

    },
    {
        path: '/project-create',
        component: ProjectCreate,
        name: 'ProjectCreate'

    },
    {
        path: '/project-advance-list',
        component: ProjectAdvanceList,
        name: 'ProjectAdvanceList'

    },
    {
        path: '/project-edit/:id',
        component: ProjectEdit,
        name: 'ProjectEdit'

    },
  
   
   


];

export default projectRoutes;