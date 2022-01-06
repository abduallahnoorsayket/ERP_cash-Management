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
                      <th>Dates</th>
                      <!-- <th scope="col" title="Expected Start Date">ESD</th>
                      <th scope="col" title="Start Date">SD</th>
                      <th scope="col" title="Expected complete Date">ECD</th>
                      <th scope="col" title="complete_date">CD</th>-->
                      <th scope="col" title="estimated_duration">Durations</th> 
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
                      <th scope="row">
                      <a 
                      href="#"
                      data-toggle="modal"
                      data-target=".bs-example-modal-xl"
                      @click="modal_task(task.id)"  
                      >
                      {{ task.category.name }}
                      </a>
                      </th>
                      <td>{{ task.taskId }}</td>
                      <td>{{ task.sprint.version.project.name }}</td>
                      <td>{{ task.sprint.version.name }}</td>
                      <td>{{ task.sprint.name }}</td>
                      <td>
                        <span title="Expected Start Date" class="badge badge-primary"> ESD:-{{ task.expected_start_date }}</span><br/>
                        <span title="Start Date" class="badge badge-dark">SD:-{{ task.start_date }}</span><br/>
                        <span title="Expeced Complete Date" class="badge badge-info">ECD:-{{ task.expected_complete_date }}</span><br/>
                        <span title="Complete Date" class="badge badge-success">CD:-{{ task.complete_date }}</span>
                      </td>                      
                      <td>
                        <span title="Estimate Duration" class="badge badge-dark">ED:-{{ task.estimated_duration }}</span>
                        <br><span title="Real Duration" class="badge badge-purple">RD:-{{ task.duration }}</span>
                        </td>
                      <td>{{ task.progress }}</td>
                      <td>
                        <span class="badge badge-info">Total:- {{ task.total_amount }}</span> <br/>
                        <span class="badge badge-warning">Pending:- {{ task.total_pending }}</span>  <br/>
                        <span class="badge badge-success">Approved:- {{ task.total_approved }}</span> <br/>
                        <span class="badge badge-danger">Rejected:- {{ task.total_rejected }}</span> <br/> 
                        <span class="badge badge-dark">Verified:- {{ task.total_verified }}</span>  
                      </td>
                      
                       <td >
                        <span :class="status_map[task.status]">
                             {{ task.status_list[task.status] }}
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
                            <li v-if="hasPermission('view_task')">
                              <router-link :to="{name: 'TaskDetails', params: { id: task.id },}" class="dropdown-item"> <i class="fas fa-eye"></i> View</router-link>
                            </li>
                           
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
       <div
        :class="{ 'modal fade bs-example-modal-xl': modal_show }"
        v-if="modal_show"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myExtraLargeModalLabel"
        style="display: block; padding-right: 15px"
        aria-modal="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myLargeModalLabel">
                Task Details
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
                @click="closeModalBtn"
              >
                ×
              </button>
            </div>
            <div class="modal-body">
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Task Name</th>
                        <th scope="col">Project</th>
                        <th scope="col text-right">Version</th>
                        <th scope="col text-right">Sprint</th>
                        <th scope="col text-right">TaskId</th>
                        <th scope="col text-right">Status</th>
                        <th scope="col text-right">Progress</th>
                        <th scope="col text-right">ESD</th>
                        <th scope="col text-right">SD</th>
                        <th scope="col text-right">ECD</th>
                        <th scope="col text-right">CD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                      
                      >
                        <td>
                         {{modal_task_name}}
                        </td>
                        <td>
                         {{modal_project}}
                        </td>
                        <td>
                          {{modal_version}} - {{modal_version_id}}
                        </td>
                        <td>
                          {{modal_sprint}} - {{modal_sprint_id}}
                        </td>
                        <td>
                         {{modal_taskId}}
                        </td>
                        <td>          
                         {{requisition_obj[modal_status]}}
                        </td>
                        <td>
                          {{modal_progress}}
                        </td>
                        <td>
                          {{modal_expected_start_date}}
                        </td>
                        <td>
                          {{modal_start_date}}
                        </td>
                        <td>
                          {{modal_expected_complete_date}}
                        </td>
                        <td>
                          {{modal_complete_date}}
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                      
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <br>
              <hr> 
              <p>Task History</p>
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Task Name</th>
                        <th scope="col">TaskId</th>
                        <!-- <th scope="col text-right">assignee</th> -->
                        <th scope="col text-right">progress</th>
                        <th scope="col text-right">status</th>
                        <th scope="col text-right">created_at</th>
                        <th scope="col text-right">SD</th>
                        <th scope="col text-right">CD</th>
                        <th scope="col text-right">ESD</th>
                        <th scope="col text-right">ECD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                         v-for="(h, i) in modal_history"
                         :key="i"
                      >
                        <td>
                        {{h.name}}
                        </td>
                        <td>
                         {{h.taskId}}
                        </td>
                        <td>
                         {{h.progress}}
                        </td>
                        <td>
                        {{requisition_obj[h.status]}}
                        </td>
                        <td>
                        {{h.created_at}}
                        </td>
                        <td>          
                       {{h.start_date}}
                        </td>
                        <td>
                        {{h.complete_date}}
                        </td>
                        <td>
                         {{h.expected_start_date}}
                        </td>
                        <td>
                        {{h.expected_complete_date}}
                        </td>
                        
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                      
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
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
       status_map:{
        RU:"badge badge-primary", //Running
        AS:"badge badge-info", //Assigned
        CO:"badge badge-success", //Completed
        PO:"badge badge-warning", //Postponed
        PR:"badge badge-danger", //Problematic
        UP:"badge badge-purple", //Upcoming
      },
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
      modal_show: false,
      pagination: {
        count: null,
        next: null,
        previous: null,
        showing: 0,
        page: null,
  },
  modal_sprint: null,
  modal_sprint_id: null,
  modal_task_name: null,
  modal_project: null,
  modal_version: null,
  modal_version_id: null,
  modal_progress: null,
  modal_history: null,
  modal_taskId: null,
  requisition_obj: {},
  modal_status: null,
  requisition_status: null,
  modal_expected_start_date: null,
  modal_start_date: null,
  modal_expected_complete_date: null,
  modal_complete_date: null,
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
          parent: this.parent,
          taskId: this.taskId,
          status: this.status,
          sprint: this.sprint,
          version: this.version,
        },
      });

    },
     modal_task: function (id) {
      this.modal_show = true;
      console.log("595",id)
      this.getTaskDetails(id);
    },
     closeModalBtn: function () {
      this.modal_show = false;
    },
    getTaskDetails: function (id) {
      axios
        .get("tasks/" + id + "/")
        .then((response) => {
         console.log('605',response.data)
          this.modal_sprint = response.data.sprint.name
          this.modal_sprint_id = response.data.sprint.sprintId
          this.modal_version = response.data.sprint.version.name
          this.modal_version_id = response.data.sprint.version.versionId
          this.modal_project = response.data.sprint.version.project.name
          this.modal_task_name = response.data.category.name
          this.modal_taskId = response.data.taskId
          this.modal_progress = response.data.progress
          this.modal_status = response.data.status
          this.modal_history = response.data.history
          this.modal_complete_date = response.data.complete_date
          this.modal_expected_complete_date = response.data.expected_complete_date
          this.modal_start_date = response.data.start_date
          this.modal_expected_start_date = response.data.expected_start_date

         this.getStatusObj()

        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getStatusObj: function () {
      axios
        .get("project_status")
        .then((response) => {
          this.requisition_status = response.data.data;
          this.requisition_status.map((req) => {
            // console.log("140", req);
            this.requisition_obj[req.key] = req.value;
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
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
  .modal-body{
    height: 80vh;
    overflow-y: auto;
}
</style>