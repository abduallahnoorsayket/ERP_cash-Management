// global
var model = []
const app_label = []
var all_permissions = []
const userData = JSON.parse(localStorage.getItem("userData"))
// console.log('6', userData)
var superuser_status = null
if (userData) {
    superuser_status = userData.superuser_status ? userData.superuser_status : false

}


// allPermissions()
 function  allPermissions() {

    let groups_obj = userData.groups ? userData.groups : [];
    let user_permissions_obj = userData.user_permissions ? userData.user_permissions : [];
// console.log('====================================');
// console.log('19', groups_obj,user_permissions_obj);
// console.log('====================================');

    if (groups_obj) {
        groups_obj.map(item => {
          item.permissions.map(inner_item => {
                all_permissions.push(inner_item.codename)
                if (!app_label.includes(inner_item.content_type.app_label)) {
                    app_label.push(inner_item.content_type.app_label)
                }

                if (!model.includes(inner_item.content_type.model)) {
                    model.push(inner_item.content_type.model)
                }
            })
        })
    }
    if (user_permissions_obj) {
         user_permissions_obj.map(item => {
            all_permissions.push(item.codename)
            if (!app_label.includes(item.content_type.app_label)) {
                app_label.push(item.content_type.app_label)
            }

            if (!model.includes(item.content_type.model)) {
                model.push(item.content_type.model)
            }
        })
    }

}

// calling allPermissions()
if (userData) {
    allPermissions()
}

// hasPermission()
function hasPermission(permission_name) {
    return superuser_status || all_permissions.includes(permission_name)
}

function is_superuser() {
    return superuser_status
}

// hasModelPermission()
function hasModelPermission(model_name) {
    return superuser_status || model.includes(model_name)
}

// hasModulePermission ()
function hasModulePermission(...module_name) {
    return superuser_status || module_name.some((m) => app_label.includes(m))
}

// packing
const permissions = {
    superuser_status,
    hasPermission,
    hasModelPermission,
    hasModulePermission,
    is_superuser
}

// exporting
export default permissions
