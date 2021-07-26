import TaskList from './TaskList'
import TaskCreate from './TaskCreate'
import TaskEdit from './TaskEdit'


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
  
   
   


];

export default taskRoutes;