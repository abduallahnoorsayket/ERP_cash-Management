import UnitsList from './UnitsList'
import UnitsCreate from './UnitsCreate'
import UnitsEdit from './UnitsEdit'


const unitsRoutes = [

    {
        path: '/unit-list',
        component: UnitsList,
        name: 'UnitsList'

    },
    {
        path: '/unit-create',
        component: UnitsCreate,
        name: 'UnitsCreate'

    },
     {
        path: '/unit-edit/:id',
        component: UnitsEdit,
        name: 'UnitsEdit'

    },
  
   
   


];

export default unitsRoutes;