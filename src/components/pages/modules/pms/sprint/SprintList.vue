<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Sprint List" />

      <div class="row">
         <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-2">
                 <div class="form-group">
                  <label>Project</label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="project"
                    @change="getVersionList()"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(s, i) in projectId" :key="i" :value="s.id">
                      {{ s.name }}
                    </option>
                  </select>
                
                </div>
                
                </div>
                   <div class="col-lg-2">
                 <div class="form-group">
                  <label>Version</label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="version"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(v, i) in versionId" :key="i" :value="v.id">
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
                  <label>Sprint Id</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="sprint_id"
                  />
              
                </div>
                </div>

                  <div class="col-lg-1">
                   <div class="form-group">
                  <label>Current</label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="current"
                  >
                   <option  selected>Select</option>

                    <option
                      value="true"
                    >
                     True
                    </option>
                    <option
                      value="false"
                    >
                     False
                    </option>
                  </select>
                </div>

                 

                </div>

                  <div class="col-lg-1">
                  <div class="form-group ">
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
                <table class="table table-hover mb-0 table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Project</th>
                      <th scope="col">Version</th>
                      <th scope="col">Name</th>
                      <th scope="col">Sprint Id</th>
                      <th scope="col" title="Expected Start Date">ESD</th>
                      <th scope="col" title="Start Date">SD</th>
                      <th scope="col" title="Expected complete Date">ECD</th>
                      <th scope="col" title="complete_date">CD</th>
                      <th scope="col" title="estimated_duration">ED</th>
                      <th scope="col" >Current</th>
                      <!-- <th scope="col" title="Number Of Quantity">QTY</th> -->
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(sprint, index) in all_sprint_list"
                      :key="index"
                    >
                      <th scope="row">{{ sprint.version.project.name }}</th>
                      <th scope="row">{{ sprint.version.name }}</th>
                      <th scope="row">{{ sprint.name }}</th>
                      <td>{{ sprint.sprintId }}</td>
                      <td>{{ sprint.expected_start_date }}</td>
                      <td>{{ sprint.start_date }}</td>
                      <td>{{ sprint.expected_complete_date }}</td>
                      <td>{{ sprint.complete_date }}</td>
                      <td>{{ sprint.estimated_duration }}</td>
                      <td>
                         <i
                          :class="[
                            sprint.current 
                              ? 'fas fa-check-circle  '
                              : 'fas fa-times-circle',
                          ]"
                        ></i>
                         </td>
                      <!-- <td>
                         <router-link :to="{name: 'VersionList', query: {sprint:sprint.id} }">
                          <span class="badge badge-pill badge-primary">{{sprint.version}}</span>
                        </router-link>

                      </td> -->
                      
                        <td >
                        <span :class="status_map[sprint.status]">
                             {{ sprint.status_list[sprint.status] }}
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
                            <li v-if="hasPermission('view_sprint')">
                              <router-link :to="{name: 'SprintDetails', params: { id: sprint.id },}" class="dropdown-item"> <i class="fas fa-eye"></i> View </router-link>
                            </li>
                           
                            <li v-if="hasPermission('change_sprint')">
                              <router-link :to="{name: 'SprintEdit', params: { id: sprint.id },}" class="dropdown-item"> <i class="fas fa-edit"></i> Edit </router-link>
                            </li>
                            
                            <li v-if="hasPermission('delete_sprint')">
                              <a href="#" @click="sprintDelete(sprint.id)"  class="dropdown-item"> <i class="fas fa-trash"></i> Delete</a>
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
  name: "SprintList",
  components: {
    Layout,
    PageTitle,
    Pagination
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
      
      all_sprint_list: null,
      projectId: null,
      statusData: null,
      versionId: null,
      version: null,
      sprint_id: null,
      project: null,
      current: null,
      status: null,
      name: null,
      pagination: {
        count: null,
        next: null,
        previous: null,
        showing: 0,
        page: null,
  }
    };
  },
  methods: {
    getSprintList: function (e) {

      let endPoint = "sprints"
      var queryParam = {
        name: this.$route.query.name,
        current: this.$route.query.current,
        project: this.$route.query.project,
        sprintId: this.$route.query.sprint_id,
        version: this.$route.query.version,
        status: this.$route.query.status,
        page: this.$route.query.page,
      }
      console.log('265', queryParam,e);
      axios.get(endPoint,{
        params: queryParam
      }).then((response) => {
        this.all_sprint_list = response.data.results;
        this.pagination.count = response.data.count;
        this.pagination.next = response.data.next;
        this.pagination.previous = response.data.previous;
        this.pagination.showing = response.data.results.length;
      })
      .catch(function (error) {
          console.log(error);
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

      sprintDelete: function (id) {
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
          axios.delete("sprints/" + id + "/").then((response) => {
            if (response.status === 204) {
              this.getSprintList();
            }
          });
          Swal.fire("Deleted!", "Sprint has been deleted!!", "success");
        } else {
          Swal.fire("Cancelled", "Sprint has not been deleted !", "error");
        }
      });
    },
    // search section start 
      searchVersion() {

      this.$router.push({
        path: "sprint-list",
        query: {
          name: this.name,
          project: this.project,
          current: this.current,
          status: this.status,
          sprint_id: this.sprint_id,
          version: this.version,
        },
      });

    },
     getProjectList: function () {
      axios
        .get("project_short")
        .then((response) => {
          this.projectId = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
     getVersionList: function () {
      axios
        .get("version_short")
        .then((response) => {
          this.versionId = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // getVersionList: function () {
    //   axios
    //     .get("version_short?project=" + this.project)
    //     .then((response) => {
    //       this.versionId = response.data;
    //       let currentVersion = this.versionId.filter((version) => {
    //         return version.current;
    //       });

    //       this.version =
    //         currentVersion.length > 0 ? currentVersion[0].id : null;
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
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
          this.statusData = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getSprintList();
    this.getProjectList();
    this.getStatus()
    this.getVersionList()
  },
   updated() {
    this.getSprintList()
  }
};
</script>

<style lang="scss" scoped>
</style>