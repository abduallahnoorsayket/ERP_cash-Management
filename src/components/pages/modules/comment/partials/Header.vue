<template>
  <div class="topbar-menu active">
    <div class="container-fluid in">
      <div id="navigation" class="active">
        <!-- Navigation Menu-->
        <ul class="navigation-menu in">
          <li class="has-submenu active">
            <router-link to="/comment" href="#" class="active">
              <i class="mdi mdi-speedometer"></i>Dashboard
            </router-link>
          </li>

          <li class="has-submenu" v-if="hasModelPermission('projectrequisition')">
            <a href="#">
              <i class="fas fa-store"></i>Comment List
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li v-if="hasPermission('view_projectrequisition')">
                <router-link to="/project-requisition-list"
                  >Comment List</router-link
                >
              </li>
              <li v-if="hasPermission('add_projectrequisition')">
                <router-link to="/project-requisition-create"
                  >Project requisition Create</router-link
                >
              </li>
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
};
</script>

<style  scoped>
</style>