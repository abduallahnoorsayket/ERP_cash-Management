<template>
  <div class="topbar-menu active">
    <div class="container-fluid in">
      <div id="navigation" class="active">
        <!-- Navigation Menu-->
        <ul class="navigation-menu in">
          <li class="has-submenu active">
            <router-link to="/pms" class="active">
              <i class="mdi mdi-speedometer"></i>Dashboard
            </router-link>
           
          </li>
          <li>
             <router-link to="/files-list" class="active text-primary">
              <i class="far fa-file-alt"></i>FilesList
            </router-link>
          </li>
           <!-- <li class="has-submenu" v-if="hasModelPermission('version')">
            <a href="#">
              <i class="fas fa-ring"></i>Program
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li v-if="hasPermission('view_version')">
                <router-link to="/program-list">Program List</router-link>
              </li>
              <li v-if="hasPermission('add_version')">
                <router-link to="/program-create">Program Create</router-link>
              </li>
            </ul>
          </li> -->

          <!-- <li class="has-submenu" v-if="hasModelPermission('project')">
            <a href="#">
              <i class="mdi mdi-package-variant-closed"></i>Project
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li v-if="hasPermission('view_project')">
                <router-link to="/project-basic-list"
                  >Project List - Basic</router-link
                >
              </li>
              <li v-if="hasPermission('project_advance_list')">
                <router-link to="/project-advance-list"
                  >Project List - Advance</router-link
                >
              </li>
              <li v-if="hasPermission('add_project')">
                <router-link to="/project-create">Project Create</router-link>
              </li>
            </ul>
          </li>

          <li class="has-submenu" v-if="hasModelPermission('version')">
            <a href="#">
              <i class="fas fa-ring"></i>Version
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li v-if="hasPermission('view_version')">
                <router-link to="/version-list">Version List</router-link>
              </li>
              <li v-if="hasPermission('add_version')">
                <router-link to="/version-create">Version Create</router-link>
              </li>
            </ul>
          </li>

          <li class="has-submenu" v-if="hasModelPermission('sprint')">
            <a href="#">
              <i class="fab fa-rev"></i>Sprint
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li v-if="hasPermission('view_sprint')"><router-link to="/sprint-list">Sprint List</router-link></li>
              <li v-if="hasPermission('add_sprint')">
                <router-link to="/sprint-create">Sprint Create</router-link>
              </li>
            </ul>
          </li>

          <li class="has-submenu" v-if="hasModelPermission('task')">
            <a href="#">
              <i class="fab fa-sketch"></i>Task
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li v-if="hasPermission('view_task')"><router-link to="/task-list">Task List</router-link></li>
              <li v-if="hasPermission('add_task')"><router-link to="/task-create">Task Create</router-link></li>
            </ul>
          </li>

          <li class="has-submenu" v-if="hasModelPermission('task')">
            <a href="#">
              <i class="fab fa-sketch"></i>Task Category
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li v-if="hasPermission('view_taskcategory')"><router-link to="/task-category-list">Task Category List</router-link></li>
              <li v-if="hasPermission('add_taskcategory')"><router-link to="/task-category-create">Task Category Create</router-link></li>
            </ul>
          </li> -->
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
  created() {},
};
</script>

<style  scoped>
</style>