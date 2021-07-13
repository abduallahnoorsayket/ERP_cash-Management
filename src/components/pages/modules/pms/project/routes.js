import ProjectList from './ProjectList'
import ProjectAdvanceList from './ProjectAdvanceList'
import ProjectCreate from './ProjectCreate'


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
   
   


];

export default projectRoutes;