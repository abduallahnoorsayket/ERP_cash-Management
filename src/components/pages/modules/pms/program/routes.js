import ProgramList from './ProgramList'
import ProgramCreate from './ProgramCreate'
import ProgramEdit from './ProgramEdit'


const programRoutes = [

    {
        path: '/program-basic-list',
        component: ProgramList,
        name: 'ProgramList'

    },
    {
        path: '/program-create',
        component: ProgramCreate,
        name: 'ProgramCreate'

    },
    {
        path: '/project-advance-list',
        component: ProjectAdvanceList,
        name: 'ProjectAdvanceList'

    },
    {
        path: '/program-edit/:id',
        component: ProgramEdit,
        name: 'ProgramEdit'

    },
  
   
   


];

export default programRoutes;