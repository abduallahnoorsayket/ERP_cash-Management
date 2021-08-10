import GroupList from './GroupList'
import GroupCreate from './GroupCreate'
import GroupEdit from './GroupEdit'


const groupRoutes = [

    {
        path: '/group-list',
        component: GroupList,
        name: 'GroupList'

    },
    {
        path: '/group-create',
        component: GroupCreate,
        name: 'GroupCreate'

    },
     {
        path: '/group-edit/:id',
        component: GroupEdit,
        name: 'GroupEdit'

    },
  
   
   


];

export default groupRoutes;