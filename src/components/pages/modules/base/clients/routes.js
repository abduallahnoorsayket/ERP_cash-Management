import ClientList from './ClientList'
import ClientCreate from './ClientCreate'
import ClientEdit from './ClientEdit'


const clientsRoutes = [

    {
        path: '/client-list',
        component: ClientList,
        name: 'ClientList'

    },
    {
        path: '/client-create',
        component: ClientCreate,
        name: 'ClientCreate'

    },
     {
        path: '/client-edit/:id',
        component: ClientEdit,
        name: 'ClientEdit'

    },
  
   
   


];

export default clientsRoutes;