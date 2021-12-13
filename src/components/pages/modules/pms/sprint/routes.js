import SprintList from './SprintList'
import SprintCreate from './SprintCreate'
import SprintEdit from './SprintEdit'
import SprintDetails from './SprintDetails'


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
        path: '/sprint-edit/:id',
        component: SprintEdit,
        name: 'SprintEdit'

    },
     {
        path: '/sprint-details/:id',
        component: SprintDetails,
        name: 'SprintDetails'

    },
  

];

export default sprintRoutes;