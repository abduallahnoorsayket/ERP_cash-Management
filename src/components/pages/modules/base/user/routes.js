import UserList from './UserList'
import UserCreate from './UserCreate'
import UserEdit from './UserEdit'


const userRoutes = [

    {
        path: '/user-list',
        component: UserList,
        name: 'UserList'

    },
    {
        path: '/user-create',
        component: UserCreate,
        name: 'UserCreate'

    },
     {
        path: '/user-edit/:id',
        component: UserEdit,
        name: 'UserEdit'

    },
  
   
   


];

export default userRoutes;