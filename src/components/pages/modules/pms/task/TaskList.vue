<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Task List" />

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
                    @change="getAllData()"
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
                    @change="getSprint()"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(v, i) in versions" :key="i" :value="v.id">
                      {{ v.name }}
                    </option>
                  </select>
                
                </div>
                
                </div>

                  <div class="col-lg-2">
                 <div class="form-group">
                  <label>Sprint</label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="sprint"
                    @change="getParents()"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(v, i) in sprints" :key="i" :value="v.id">
                      {{ v.name }}
                    </option>
                  </select>
                
                </div>
                
                </div>

                  <div class="form-group">
                  <label>Parent Task</label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="parent"
                    :class="{ 'parsley-error': errors && errors.sprint }"
                  >
                    <option value="false" disabled selected>No Parent</option>

                    <option v-for="(p, i) in parents" :key="i" :value="p.id">
                      {{ p.name }} 
                    </option>
                  </select>
                  
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
                  <label>Task Id</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="taskId"
                  />
              
                </div>
                </div>

               

                  <div class="col-lg-2 offset-lg-10">
                  <div class="form-group ">
                     <label style="visibility: hidden">fgggggggf</label>
                     <button
                            type="button"
                            class="
                              btn btn-primary btn-sm
                              
                              waves-effect waves-light
                              pull-right
                            "
                    
                            @click="searchTask()"
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
                <table class="table table-hover mb-0 table-bordered task-table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Task Id</th>
                      <th>Project</th>
                      <th>Version</th>
                      <th>Sprint</th>
                      <th scope="col" title="Expected Start Date">ESD</th>
                      <th scope="col" title="Start Date">SD</th>
                      <th scope="col" title="Expected complete Date">ECD</th>
                      <th scope="col" title="complete_date">CD</th>
                      <th scope="col" title="estimated_duration">ED</th>
                      <th scope="col" >Progress</th>
                      <th scope="col" >Total</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(task, index) in all_task_list"
                      :key="index"
                    >
                      <th scope="row">{{ task.name }}</th>
                      <td>{{ task.taskId }}</td>
                      <td>{{ task.sprint.version.project.name }}</td>
                      <td>{{ task.sprint.version.name }}</td>
                      <td>{{ task.sprint.name }}</td>
                      <td>{{ task.expected_start_date }}</td>
                      <td>{{ task.start_date }}</td>
                      <td>{{ task.expected_complete_date }}</td>
                      <td>{{ task.complete_date }}</td>
                      <td>{{ task.estimated_duration }}</td>
                      <td>{{ task.progress }}</td>
                      <td>
                        <span class="badge badge-info">Total:- {{ task.total_amount }}</span> <br/>
                        <span class="badge badge-warning">Pending:- {{ task.total_pending }}</span>  <br/>
                        <span class="badge badge-success">Approved:- {{ task.total_approved }}</span> <br/>
                        <span class="badge badge-danger">Rejected:- {{ task.total_rejected }}</span> <br/> 
                        <span class="badge badge-dark">Verified:- {{ task.total_verified }}</span>  
                      </td>
                      <td>{{ task.status_list[task.status] }}</td>

                      <td>
                        <div class="btn-group dropdown mt-2 mr-1">
                        
                          <button
                            type="button"
                            class="
                              btn btn-primary btn-sm
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
                           
                            <li v-if="hasPermission('change_task')">
                              <router-link :to="{name: 'TaskEdit', params: { id: task.id },}" class="dropdown-item"> <i class="fas fa-edit"></i> Edit </router-link>
                            </li>
                            <li v-if="hasPermission('delete_task')">
                              <a href="#" @click="taskDelete(task.id)"  class="dropdown-item"> <i class="fas fa-trash"></i> Delete</a>
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
  name: "TaskList",
  components: {
    Layout,
    PageTitle,
    Pagination
  },
  data() {
    return {
      all_task_list: null,
      projectId: null,
      statusData: null,
      sprint: null,
      sprints: null,
      project: null,
      status: null,
      parent: null,
      parents: null,
      name: null,
      taskId: null,
      version: null,
      versions: null,
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
    getAllData: function () {
      this.getVersion()
    },
    getTaskList: function () {
       let endPoint = "tasks"
      var queryParam = {
        name: this.$route.query.name,
        project: this.$route.query.project,
        sprintId: this.$route.query.sprint,
        version: this.$route.query.version,
        taskId: this.$route.query.taskId,
        status: this.$route.query.status,
        page: this.$route.query.page,
      }
      axios.get(endPoint, {
        params: queryParam
      }).then((response) => {
        this.all_task_list = response.data.results;
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
    taskDelete: function (id) {
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
              this.getTaskList();
            }
          });
          Swal.fire("Deleted!", "Task has been deleted!!", "success");
        } else {
          Swal.fire("Cancelled", "Task has not been deleted !", "error");
        }
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
    getProjectList: function () {
      axios
        .get("project_short/")
        .then((response) => {
          this.projectId = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
     getVersion: function () {
      axios
        .get("version_short?project=" + this.project)
        .then((response) => {
          this.versions = response.data;
          let currentVersion = this.versions.filter((version) => {
            return version.current;
          });

          this.version =
            currentVersion.length > 0 ? currentVersion[0].id : null;
          if(this.version) {
            this.getSprint()
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
     getSprint: function () {
      axios
        .get("sprint_short?version=" + this.version)
        .then((response) => {
          this.sprints = response.data;
          let currentSprint = this.sprints.filter((sprint) => {
            return sprint.current;
          });

          this.sprint =
            currentSprint.length > 0 ? currentSprint[0].id : null;

          this.getParents()
          
        })
        .catch(function (error) {
          console.log(error);
        });
    },

      getParents: function () {
      axios
        .get("task_short?sprint=" + this.sprint)
        .then((response) => {
          this.parents = response.data.filter(p => {
            
           return   p.id !== parseInt(this.id);
          });
          
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // search section start 
    searchTask() {

      this.$router.push({
        path: "task-list",
        query: {
          name: this.name,
          project: this.project,
          current: this.parent,
          current: this.taskId,
          status: this.status,
          sprint: this.sprint,
          version: this.version,
        },
      });

    }
  },
  created() {
    this.getTaskList();
    this.getStatus();
    this.getProjectList();
  },
   updated() {
    this.getTaskList()
  }
};
</script>

<style scoped>
  .task-table td, th{
    vertical-align: middle;
    white-space: nowrap;
    font-size: 12px;
  }
</style>