import ItemList from './ItemList'
import ItemCreate from './ItemCreate'
import ItemEdit from './ItemEdit'


const itemRoutes = [

    {
        path: '/item-list',
        component: ItemList,
        name: 'ItemList'

    },
    {
        path: '/item-create',
        component: ItemCreate,
        name: 'ItemCreate'

    },
     {
        path: '/item-edit/:id',
        component: ItemEdit,
        name: 'ItemEdit'

    },
  
   
   


];

export default itemRoutes;