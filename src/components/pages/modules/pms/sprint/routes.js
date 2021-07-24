import SprintList from './SprintList'
import SprintCreate from './SprintCreate'
import SprintEdit from './SprintEdit'


const sprintRoutes = [

    {
        path: '/sprint-list',
        component: SprintList,
        name: 'SprintList'

    },
    {
        path: '/sprint-create',
        component: SprintCreate,
        name: 'SprintCreate'

    },
     {
        path: '/version-edit/:id',
        component: SprintEdit,
        name: 'SprintEdit'

    },
  
   
   


];

export default sprintRoutes;