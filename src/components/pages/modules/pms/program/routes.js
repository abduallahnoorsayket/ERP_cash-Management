import ProgramList from './ProgramList'
import ProgramCreate from './ProgramCreate'
import ProgramEdit from './ProgramEdit'
import ProgramDetails from './ProgramDetails'


const programRoutes = [

    {
        path: '/program-list',
        component: ProgramList,
        name: 'ProgramList'

    },
    {
        path: '/program-create',
        component: ProgramCreate,
        name: 'ProgramCreate'

    },

    {
        path: '/program-edit/:id',
        component: ProgramEdit,
        name: 'ProgramEdit'

    },
    {
        path: '/program-details/:id',
        component: ProgramDetails,
        name: 'ProgramDetails'

    },
  
];

export default programRoutes;