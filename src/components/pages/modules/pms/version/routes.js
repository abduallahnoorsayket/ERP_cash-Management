import VersionList from './VersionList'
import VersionCreate from './VersionCreate'
import VersionEdit from './VersionEdit'
import VersionDetails from './VersionDetails'


const versionRoutes = [

    {
        path: '/version-list',
        component: VersionList,
        name: 'VersionList'

    },
    {
        path: '/version-create',
        component: VersionCreate,
        name: 'VersionCreate'

    },
    {
        path: '/version-edit/:id',
        component: VersionEdit,
        name: 'VersionEdit'

    },
    {
        path: '/version-details/:id',
        component: VersionDetails,
        name: 'VersionDetails'

    },
  


];

export default versionRoutes;