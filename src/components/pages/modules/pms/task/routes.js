import TaskList from './TaskList'
import TaskCreate from './TaskCreate'
import TaskEdit from './TaskEdit'
import TaskDetails from './TaskDetails'


const taskRoutes = [

    {
        path: '/task-list',
        component: TaskList,
        name: 'TaskList'

    },
    {
        path: '/task-create',
        component: TaskCreate,
        name: 'TaskCreate'

    },
     {
        path: '/task-edit/:id',
        component: TaskEdit,
        name: 'TaskEdit'

    },
    {
        path: '/task-details/:id',
        component: TaskDetails,
        name: 'TaskDetails'

    },
  
   
   


];

export default taskRoutes;