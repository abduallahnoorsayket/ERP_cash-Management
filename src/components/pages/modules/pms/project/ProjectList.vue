<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Project List Basic" />

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-2">
                  <div class="form-group">
                    <label>Client</label>
                    <select
                      class="form-control"
                      data-toggle="select2"
                      v-model="project"
                    >
                      <option value="false" disabled selected>Select</option>

                      <option
                        v-for="(s, i) in projectId"
                        :key="i"
                        :value="s.id"
                      >
                        {{ s.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group">
                    <label>Department</label>
                    <select
                      class="form-control"
                      data-toggle="select2"
                      v-model="department"
                    >
                      <option value="false" disabled selected>Select</option>

                      <option
                        v-for="(v, i) in departmentId"
                        :key="i"
                        :value="v.id"
                      >
                        {{ v.name }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="col-lg-2">
                  <div class="form-group">
                    <label>Status</label>
                    <select
                      class="form-control"
                      data-toggle="select2"
                      v-model="status"
                    >
                      <option value="false" disabled selected>Select</option>

                      <option
                        v-for="(s, i) in statusData"
                        :key="i"
                        :value="s.key"
                      >
                        {{ s.value }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      class="form-control"
                      data-toggle="input-mask"
                      data-mask-format="00/00/0000"
                      v-model="name"
                    />
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group">
                    <label>Project Id</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="project_id"
                    />
                  </div>
                </div>

                <div class="col-lg-1">
                  <div class="form-group">
                    <label style="visibility: hidden">fgggggggf</label>
                    <button
                      type="button"
                      class="
                        btn btn-primary btn-sm
                        waves-effect waves-light
                        pull-right
                      "
                      @click="searchVersion()"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover mb-0 table-bordered table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Program</th>
                      <th scope="col">Client</th>
                      <th scope="col">Project Id</th>
                      <th scope="col" title="Assign Date">AD</th>
                      <th scope="col" title="Expected Start Date">ESD</th>
                      <th scope="col" title="Start Date">SD</th>
                      <th scope="col" title="Expected complete Date">ECD</th>
                      <th scope="col" title="complete_date">CD</th>
                      <th scope="col" title="Number Of Quantity">QTY</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(project, index) in all_project_list"
                      :key="index"
                    >
                      <th scope="row">{{ project.name }}</th>
                      <td>{{ project.program.name }}</td>
                      <td>{{ project.client.name }}</td>
                      <td>{{ project.projectId }}</td>
                      <td>{{ project.assign_date }}</td>
                      <td>{{ project.expected_start_date }}</td>
                      <td>{{ project.start_date }}</td>
                      <td>{{ project.expected_complete_date }}</td>
                      <td>{{ project.complete_date }}</td>
                      <td>
                        <router-link
                          :to="{
                            name: 'VersionList',
                            query: { project_id: project.id },
                          }"
                        >
                          <span class="badge badge-pill badge-info">
                           Version- {{ project.no_of_version }}
                          </span>
                        </router-link>
                        <br>
                        <router-link
                          :to="{
                            name: 'SprintList',
                            query: { project_id: project.id },
                          }"
                        >
                          <span class="badge badge-pill badge-danger">
                            
                            Sprint- {{project.no_of_sprint}}
                          </span>
                        </router-link>
                        <br>
                        <router-link
                          :to="{
                            name: 'TaskList',
                            query: { project_id: project.id },
                          }"
                        >
                          <span class="badge badge-pill badge-success">
                            
                            Task- {{project.no_of_task}}
                          </span>
                        </router-link>
                      </td>
                       <td >
                        <span :class="status_map[project.status]">
                             {{ project.status_list[project.status] }}
                          </span>
                        </td>

                      <td>
                        <div class="btn-group dropdown mt-2 mr-1">
                          <button
                            type="button"
                            class="
                              btn btn-primary btn-xs
                              dropdown-toggle
                              waves-effect waves-light
                            "
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="fa fa-cog ml-1"></i>
                          </button>
                          <ul class="dropdown-menu">
                            <li v-if="hasPermission('view_project')">
                              <router-link
                                :to="{
                                  name: 'ProjectDetails',
                                  params: { id: project.id },
                                }"
                                class="dropdown-item"
                              >
                                <i class="fas fa-eye"></i> View
                              </router-link>
                            </li>
                            <li v-if="hasPermission('change_project')">
                              <router-link
                                :to="{
                                  name: 'ProjectEdit',
                                  params: { id: project.id },
                                }"
                                class="dropdown-item"
                              >
                                <i class="fas fa-edit"></i> Edit
                              </router-link>
                            </li>
                            
                            <li v-if="hasPermission('delete_project')">
                              <a
                                href="#"
                                @click="deleteClient(project.id)"
                                class="dropdown-item"
                              >
                                <i class="fas fa-trash"></i> Delete</a
                              >
                            </li>
                            
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <Pagination :pagination="pagination" />
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import axios from "@/axios";
import Layout from "../Layout.vue";
import PageTitle from "@/components/layouts/partials/PageTitle";
import Swal from "sweetalert2";
import permissions from "@/permisson";
import Pagination from "@/components/layouts/partials/Pagination";

export default {
  name: "ProjectList",
  components: {
    Layout,
    PageTitle,
    Pagination,
  },
  data() {
    return {
       status_map:{
        RU:"badge badge-primary", //Running
        AS:"badge badge-info", //Assigned
        CO:"badge badge-success", //Completed
        PO:"badge badge-warning", //Postponed
        PR:"badge badge-danger", //Problematic
        UP:"badge badge-purple", //Upcoming
      },
      all_project_list: null,
      department: null,
      departmentId: null,
      projectId: null,
      project: null,
      statusData: null,
      status: null,
      name: null,
      project_id: null,
      pagination: {
        count: null,
        next: null,
        previous: null,
        showing: 0,
        page: null,
      },
    };
  },
  methods: {
    getProjectList: function () {
      let endPoint = "projects";
      var queryParam = {
        name: this.$route.query.name,
        client: this.$route.query.project,
        projectId: this.$route.query.project_id,
        department: this.$route.query.department,
        status: this.$route.query.status,
        page: this.$route.query.page,
      };
      console.log("265", queryParam);
      axios
        .get(endPoint, {
          params: queryParam,
        })
        .then((response) => {
          this.all_project_list = response.data.results;
          this.pagination.count = response.data.count;
          this.pagination.next = response.data.next;
          this.pagination.previous = response.data.previous;
          this.pagination.showing = response.data.results.length;
        });
    },

    hasModulePermission(...module_name) {
      return permissions.hasModulePermission(...module_name);
    },

    hasModelPermission(model_name) {
      return permissions.hasModelPermission(model_name);
    },

    hasPermission(permission_name) {
      return permissions.hasPermission(permission_name);
    },

    deleteClient: function (id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((response) => {
        if (response.isConfirmed) {
          axios.delete("projects/" + id + "/").then((response) => {
            if (response.status === 204) {
               Swal.fire("Deleted!", "Project has been deleted!!", "success");
              this.getProjectList();
            }
          });
         
        } else {
          Swal.fire("Cancelled", "Project has not been deleted !", "error");
        }
      });
    },
    getProjectClients: function () {
      axios
        .get("project_clients")
        .then((response) => {
          this.projectId = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getStatus: function () {
      axios
        .get("project_status")
        .then((response) => {
          this.statusData = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getDepartment: function () {
      axios
        .get("project_department")
        .then((response) => {
          this.departmentId = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    // search section start
    searchVersion() {
      this.$router.push({
        path: "project-basic-list",
        query: {
          name: this.name,
          project: this.project,
          project_id: this.project_id,
          status: this.status,
          department: this.department,
        },
      });
    },
  },
  created() {
    this.getProjectClients();
    this.getProjectList();
    this.getStatus();
    this.getDepartment();
  },
  updated() {
    this.getProjectList();
  },
};
</script>

<style lang="scss" scoped>
</style>