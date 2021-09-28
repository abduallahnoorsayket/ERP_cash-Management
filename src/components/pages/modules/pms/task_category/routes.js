import TaskCategoryList from './TaskCategoryList'
import TaskCategoryCreate from './TaskCategoryCreate'
import TaskCategoryEdit from './TaskCategoryEdit'


const taskCategory = [

    {
        path: '/task-category-list',
        component: TaskCategoryList,
        name: 'TaskCategoryList'

    },
    {
        path: '/task-category-create',
        component: TaskCategoryCreate,
        name: 'TaskCategoryCreate'

    },
     {
         path: '/task-category-edit/:id',
        component: TaskCategoryEdit,
        name: 'TaskCategoryEdit'

    },
  
   
   


];

export default taskCategory;