<template>
  <div class="row">
    <div class="col-xl-3 col-md-6" v-if="hasModulePermission('auth', 'base')">
      <router-link to="/base">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <i
                class="
                  fab
                  fa-accusoft fa-2x
                  avatar-md
                  rounded-circle
                  align-self-center
                "
              ></i>

              <div class="media-body overflow-hidden">
                <h5 class="font-14 mt-0 mb-1">Base</h5>
                <p class="mb-1 font-13 text-truncate" title="Base Module">
                  Base Module
                </p>
                <!-- <small class="text-primary"><b>Admin</b></small> -->
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <div
      class="col-xl-3 col-md-6"
      v-if="hasModulePermission('project_management')"
    >
      <router-link to="/pms">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <!-- <img
              src="assets/images/users/avatar-3.jpg"
              class="avatar-md rounded-circle mr-3 align-self-center"
              alt="user"
            /> -->

              <i
                class="
                  fas
                  fa-project-diagram fa-2x
                  avatar-md
                  rounded-circle
                  align-self-center
                "
              ></i>

              <div class="media-body overflow-hidden">
                <h5 class="font-14 mt-0 mb-1">PMS</h5>
                <p
                  class="mb-1 font-13 text-truncate"
                  title="Project Management System"
                >
                  Project Management System
                </p>
                <!-- <small class="text-primary"><b>Admin</b></small> -->
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <div class="col-xl-3 col-md-6" v-if="hasModulePermission('requisition')">
      <router-link to="/requisition">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <!-- <img
              src="assets/images/users/avatar-3.jpg"
              class="avatar-md rounded-circle mr-3 align-self-center"
              alt="user"
            /> -->

              <i
                class="
                  fas
                  fa-file-invoice-dollar
                  avatar-md
                  rounded-circle
                  align-self-center
                  fa-2x
                "
              ></i>

              <div class="media-body overflow-hidden">
                <h5 class="font-14 mt-0 mb-1">Requisition</h5>
                <p
                  class="mb-1 font-13 text-truncate"
                  title="Requisition Management System"
                >
                  Requisition Management System
                </p>
                <!-- <small class="text-primary"><b>Admin</b></small> -->
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <div class="col-xl-3 col-md-6" v-if="hasPermission('view_file')">
      <router-link to="/files-list">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <!-- <img
              src="assets/images/users/avatar-3.jpg"
              class="avatar-md rounded-circle mr-3 align-self-center"
              alt="user"
            /> -->

              <i
                class="
                  far
                  fa-file-alt
                  avatar-md
                  rounded-circle
                  align-self-center
                  fa-2x
                "
              ></i>

              <!-- <i
                          class="fas fa-folder rounded-circle
                  align-self-center fa-2x"
                        ></i> -->

              <div class="media-body overflow-hidden">
                <h5 class="font-14 mt-0 mb-1">File Manager</h5>
                <p
                  class="mb-1 font-13 text-truncate"
                  title="Requisition Management System"
                >
                  File Management System
                </p>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <div class="col-xl-3 col-md-6" v-if="hasPermission('view_comment')">
      <router-link to="/comment">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <!-- <img
              src="assets/images/users/avatar-3.jpg"
              class="avatar-md rounded-circle mr-3 align-self-center"
              alt="user"
            /> -->

              <i
                class="
                  fas
                  fa-comments
                  avatar-md
                  rounded-circle
                  align-self-center
                  fa-2x
                "
              ></i>

              <!-- <i
                          class="fas fa-folder rounded-circle
                  align-self-center fa-2x"
                        ></i> -->

              <div class="media-body overflow-hidden">
                <h5 class="font-14 mt-0 mb-1">Comment List</h5>
                <p
                  class="mb-1 font-13 text-truncate"
                  title="Comment Management System"
                >
                  Comment Management System
                </p>
                <!-- <small class="text-primary"><b>Admin</b></small> -->
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <div class="col-xl-3 col-md-6" v-if="hasPermission('view_notification')">
      <router-link to="/notification">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <!-- <img
              src="assets/images/users/avatar-3.jpg"
              class="avatar-md rounded-circle mr-3 align-self-center"
              alt="user"
            /> -->

              <i
                class="
                  fab
                  fa-sith
                  avatar-md
                  rounded-circle
                  align-self-center
                  fa-2x
                "
              ></i>

              <!-- <i
                          class="fas fa-folder rounded-circle
                  align-self-center fa-2x"
                        ></i> -->

              <div class="media-body overflow-hidden">
                <h5 class="font-14 mt-0 mb-1">Notification</h5>
                <p
                  class="mb-1 font-13 text-truncate"
                  title="Comment Management System"
                >
                  Notification Management System
                </p>
                <!-- <small class="text-primary"><b>Admin</b></small> -->
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import permissions from "../../../permisson";

export default {
  name: "ModuleList",
  data() {
    return {
      project_management: false,
    };
  },
  methods: {
    hasModulePermission(...module_name) {
      return permissions.hasModulePermission(...module_name);
    },
    hasPermission(permission_name) {
      return permissions.hasPermission(permission_name);
    },
  },
};
</script>

<style lang="scss" scoped></style>
