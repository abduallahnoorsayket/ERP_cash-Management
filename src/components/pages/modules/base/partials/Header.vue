<template>
  <div class="topbar-menu active">
    <div class="container-fluid in">
      <div id="navigation" class="active">
        <!-- Navigation Menu-->
        <ul class="navigation-menu in">
          <li class="has-submenu active">
            <router-link to="/base" class="active">
              <i class="mdi mdi-speedometer"></i>Dashboard
            </router-link>
          </li>

          <li class="has-submenu" v-if="hasModelPermission('user')">
            <a href="#">
              <i class="far fa-user"></i>User
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li v-if="hasPermission('view_user')"><router-link to="/user-list">User List</router-link></li>
              <li v-if="hasPermission('add_user')"><router-link to="/user-create">User Create</router-link></li>
            </ul>
          </li>

          <li class="has-submenu" v-if="hasModelPermission('group')">
            <a href="#">
              <i class="fas fa-users"></i>Group
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li v-if="hasPermission('view_group')"><router-link to="/group-list">Group List</router-link></li>
              <li v-if="hasPermission('add_group')">
                <router-link to="/group-create">Group Create</router-link>
              </li>
            </ul>
          </li>

          <li class="has-submenu"  v-if="hasModelPermission('department')">
            <a href="#">
              <i class="mdi mdi-package-variant-closed"></i>Department
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li v-if="hasPermission('view_department')">
                <router-link to="/department-list">Department List</router-link>
              </li>
              <li v-if="hasPermission('add_department')">
                <router-link to="/department-create"
                  >Department Create</router-link
                >
              </li>
            </ul>
          </li>

          <li class="has-submenu" v-if="hasModelPermission('client')">
            <a href="#">
              <i class="mdi mdi-flip-horizontal"></i>Client
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li v-if="hasPermission('view_client')"><router-link to="/client-list">Client List</router-link></li>
              <li v-if="hasPermission('add_client')">
                <router-link to="/client-create">Client Create</router-link>
              </li>
            </ul>
          </li>

          <li class="has-submenu" v-if="hasModelPermission('item')">
            <a href="#">
              <i class="mdi mdi-cards-outline"></i>Items
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li v-if="hasPermission('view_item')"><router-link to="/item-list">Item List</router-link></li>
              <li  v-if="hasPermission('add_item')"><router-link to="/item-create">Item Create</router-link></li>
            </ul>
          </li>

          <li class="has-submenu" v-if="hasModelPermission('unit')">
            <a href="#">
              <i class="mdi mdi-layers-outline"></i>Units
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li  v-if="hasPermission('view_unit')"><router-link to="/unit-list">Unit List</router-link></li>
              <li  v-if="hasPermission('add_unit')"><router-link to="/unit-create">Unit Create</router-link></li>
            </ul>
          </li>

          
        </ul>

        <!-- End navigation menu -->

        <div class="clearfix"></div>
      </div>
      <!-- end #navigation -->
    </div>
    <!-- end container -->
  </div>
</template>

<script>
import permissions from "@/permisson";

export default {
  name: "Header",
  components: {},

  data() {
    return {};
  },
  methods: {
    hasModulePermission(...module_name) {
      return permissions.hasModulePermission(...module_name);
      
    },

    hasModelPermission(model_name) {
      return permissions.hasModelPermission(model_name);
    },

    hasPermission(permission_name) {
      return permissions.hasPermission(permission_name);
    },
  },
  create() {},
};
</script>

<style  scoped>
</style>