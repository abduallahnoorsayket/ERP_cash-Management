<template>
  
   
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-10 col-lg-10">
                 <div class="form-group">
                  <!-- <label>First Name</label> -->
                   <input
                   placeholder="Search..."
                    type="text"
                    class="form-control"
                    v-model="first_name"
                  />
                
                </div>
                
                </div>
                <div class="col-md col-lg">
                   <div class="form-group mt-1">
                     <!-- <label style="visibility: hidden">fgggggggf</label> -->
                     <button
                            type="button"
                            class="
                              btn btn-primary btn-sm
                              
                              waves-effect waves-light
                              pull-left
                            "
                    
                            
                          >
                          <!-- @click="searchUser()" -->
                            Search
                          </button>
                  
                  </div>

                </div>
             
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                 <div class="form-group">
                  <label>Name</label>
                   <input
                    type="text"
                    class="form-control"
                    v-model="first_name"
                  />
                
                </div>
                <div class="form-group">
                  <label>Last Name </label>
                   <input
                    type="text"
                    class="form-control"
                    v-model="last_name"
                  />
                
                </div>
                <div class="form-group">
                  <label>Created date</label>
                   <input
                    type="date"
                    class="form-control"
                    v-model="username"
                  />
                </div>
                  <div class="form-group">
                  <label>Groups</label>
                      <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="groups"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(g, i) in group_list" :key="i" :value="g.id">
                      {{ g.name }}
                    </option>
                  </select>
                </div>
                
                </div>
                   
                 

                  <div class="col-lg-1">
                  <div class="form-group ">
                     <label style="visibility: hidden">fgggggggf</label>
                     <!--   @click="searchUser()" -->
                     <button
                            type="button"
                            class="
                              btn btn-primary btn-sm
                              
                              waves-effect waves-light
                              pull-right
                            "
                    
                          
                          >
                            Search
                          </button>
                  
                  </div>

                 

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
           <div class="row">
                           
            </div>
               <div class="card comment_card_color">
                                    <div class="card-body">
                                        <div class="float-right">
                                            <div class="checkbox checkbox-inline form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                                <label class="form-check-label" for="inlineCheckbox1"> Week </label>
                                            </div>
                                            <div class="checkbox checkbox-success checkbox-inline form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" checked="">
                                                <label class="form-check-label" for="inlineCheckbox2"> Month </label>
                                            </div>
                                            <div class="checkbox checkbox-pink checkbox-inline form-check form-check-inline mr-0">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" checked="">
                                                <label class="form-check-label" for="inlineCheckbox3"> Year </label>
                                            </div>
                                        </div>
            
                                        <h4 class="header-title mb-4">Card with Checkbox</h4>
            
                                        <div class="row">
                                            <div class="col-md-12">
                                             
                                              <div class=" toast-bs-custom show mb-3" role="alert" data-delay="700" data-autohide="false">
                                                        <div class="toast-header">
                                                            <img src="assets/images/users/avatar-7.jpg" class="avatar-sm rounded mr-2" alt="...">
                                                            <strong class="mr-auto">Robert Hendrick</strong>
                                                            <small>11 mins ago</small>
                                                            <button type="button" class="ml-2 close" data-dismiss="toast" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                            </button>
                                                        </div>
                                                        <div class="toast-body">
                                                            Hello, world! This is a toast message.
                                                        </div>
                                                    </div>
                                              <div class=" toast-bs-custom show mb-3" role="alert" data-delay="700" data-autohide="false">
                                                        <div class="toast-header">
                                                            <img src="assets/images/users/avatar-7.jpg" class="avatar-sm rounded mr-2" alt="...">
                                                            <strong class="mr-auto">Robert Hendrick</strong>
                                                            <small>11 mins ago</small>
                                                            <button type="button" class="ml-2 close" data-dismiss="toast" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                            </button>
                                                        </div>
                                                        <div class="toast-body">
                                                            Hello, world! This is a toast message.
                                                        </div>
                                                    </div>
                                              <div class=" toast-bs-custom show mb-3" role="alert" data-delay="700" data-autohide="false">
                                                        <div class="toast-header">
                                                            <img src="assets/images/users/avatar-7.jpg" class="avatar-sm rounded mr-2" alt="...">
                                                            <strong class="mr-auto">Robert Hendrick</strong>
                                                            <small>11 mins ago</small>
                                                            <button type="button" class="ml-2 close" data-dismiss="toast" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                            </button>
                                                        </div>
                                                        <div class="toast-body">
                                                            Hello, world! This is a toast message.
                                                        </div>
                                                    </div>
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>    
        <Pagination :pagination="pagination" /> 
        </div>
       
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <FileUploader/>

        </div>
      </div>
    
  
</template>

<script>
import axios from "@/axios";
import Swal from "sweetalert2";
import permissions from "@/permisson";
import Pagination from "@/components/layouts/partials/Pagination";

export default {
  name: "CommentList",
  components: {
    Pagination,
  },
  data() {
    return {
      requisition_list: null,
      is_superuser: null,
      can_verify_requisition: null,
      can_approve_requisition: null,
      requisition_status: null,
      requisition_obj: {},
      status: null,
      can_delete_requisition: null,
      can_edit_requisition: null,
      modal_show: false,
      requisition_modal_details: null,
      detail: [],
      items: null,
      units: null,
      all_total: null,
      projectId: null,
      statusData: null,
      versions: null,
      version: null,
      sprints: null,
      sprint: null,
      project: null,
      tasks: null,
      task: null,
      submitted_for: null,
      assignees: null,
      search_status: null,
      submitted_date: null,
      isModalVisible: false,
      task_targets: null,
      total_amount: null,
      total_pending: null,
      total_approved: null,
      total_rejected: null,
      total_verified: null,
      history_obj: null,
      task_category_list: null,
      category: null,
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
     getAllData: function () {
      this.version = null;
      this.sprint = null;
      this.parent = null;
      this.getVersion();
      this.getMember();
    },
    getRequisitionList: function () {
      let endPoint = "project_requisition/";
      var queryParam = {
        task: this.$route.query.task,
        status: this.$route.query.search_status,
        project: this.$route.query.project,
        sprint: this.$route.query.sprint,
        version: this.$route.query.version,
        submitted_date: this.$route.query.submitted_date,
        submitted_for: this.$route.query.submitted_for,
        category: this.$route.query.category,
        page: this.$route.query.page,
      };
      axios
        .get(endPoint, {
          params: queryParam,
        })
        .then((response) => {
          this.requisition_list = response.data.results;
          this.total_amount = response.data.total_amount;
          this.total_pending = response.data.total_pending;
          this.total_approved = response.data.total_approved;
          this.total_rejected = response.data.total_rejected;
          this.total_verified = response.data.total_verified;
          this.pagination.count = response.data.count;
          this.pagination.next = response.data.next;
          this.pagination.previous = response.data.previous;
          this.pagination.showing = response.data.results.length;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getLocalStorageData: function () {
      const userData = JSON.parse(localStorage.getItem("userData"));
      this.is_superuser = userData.superuser_status;
    },
    getPermissions: function () {
      this.can_verify_requisition = permissions.hasPermission(
        "verify_project_requisition"
      );
      this.can_approve_requisition = permissions.hasPermission(
        "approve_project_requisition"
      );

      this.can_delete_requisition = permissions.hasPermission(
        "delete_projectrequisition"
      );
      this.can_edit_requisition = permissions.hasPermission(
        "change_projectrequisition"
      );
      this.is_superuser = permissions.is_superuser();
    },

    getRequisitionStatus: function () {
      axios
        .get("project_requisition_status")
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

    updateStatus: function (id, e) {
      // console.log("186", id);
      axios
        .put("project_requisition_approval/" + id + "/", {
          status: e.target.value,
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "You have successfully Updated a Status.",
          }).then(() => {
            this.getRequisitionList();
          });
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },

    modal_requisition: function (id) {
      this.modal_show = true;
      this.getDetailsRequisition(id);
    },

    closeModalBtn: function () {
      this.modal_show = false;
    },

    getDetailsRequisition: function (id) {
      axios
        .get("project_requisition/" + id + "/")
        .then((response) => {
          this.requisition_modal_details = response.data.detail.map(
            (detail) => {
              return {
                id: detail.id,
                quantity: detail.quantity,
                amount: detail.amount,
                total: detail.total,
                remarks: detail.remarks,
                item: detail.item.id,
                unit: detail.unit.id,
                requisition: id,
              };
            }
          );

          this.getItem();
          this.getUnit();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getItem: function () {
      axios
        .get("item_short_list")
        .then((response) => {
          this.items = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getUnit: function () {
      axios
        .get("unit_short_list")
        .then((response) => {
          this.units = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    calculateTotal: function (dom_repeat) {
      var total =
        parseFloat(dom_repeat.quantity) * parseFloat(dom_repeat.amount);
      if (!isNaN(total)) {
        dom_repeat.total = total.toFixed(2);
      }
    },

    submitCorrectionDetails: function () {
      axios
        .put("project_requisition_correction/", {
          detail: this.requisition_modal_details,
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "You have successfully Update a Requisition Details.",
          }).then(() => {
            this.modal_show = false;
            document.getElementsByClassName("modal-backdrop")[0].remove();
            this.getRequisitionList();
          });
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },

    requisitionDelete: function (id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
        .then((response) => {
          console.log("246");
          if (response.isConfirmed) {
            console.log("248");
            axios.delete("project_requisition/" + id + "/").then((response) => {
              console.log("248");
              if (response.status === 204) {
                console.log("249");
                this.getRequisitionList();
              }
            });
            Swal.fire("Deleted!", "Requisition has been deleted!!", "success");
          } else {
            Swal.fire(
              "Cancelled",
              "Requisition has not been deleted !",
              "error"
            );
          }
        })
        .catch((error) => {
          console.log("257", error);
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
            
          if (this.version) {
            this.getSprint();
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

          this.sprint = currentSprint.length > 0 ? currentSprint[0].id : null;

          if(this.sprint) {
            this.getParents();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    getParents: function () {
      axios
        .get("task_short?sprint=" + this.sprint)
        .then((response) => {
          this.tasks = response.data.filter((p) => {
            return p.id !== parseInt(this.id);
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getMember: function () {
      axios
        .get("project_member")
        .then((response) => {
          this.assignees = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
     getTaskCategory: function () {
      axios
        .get("task_category_short")
        .then((response) => {
          this.task_category_list = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // search section start
    searchRequisition() {
      this.$router.push({
        path: "project-requisition-list",
        query: {
          project: this.project,
          search_status: this.search_status,
          sprint: this.sprint,
          version: this.version,
          status: this.status,
          submitted_for: this.submitted_for,
          task: this.task,
          submitted_date: this.submitted_date,
          category: this.category,
        },
      });
    },

    getTask_target: function (id) {
      this.task_targets = null;
      this.isModalVisible = false;
      axios
        .get("task_target/" + id)
        .then((response) => {
          // this.task_targets = response.data.target

          this.task_targets = response.data.target.map((detail) => {
            return {
              id: detail.id,
              quantity: detail.quantity,
              item: detail.item.name,
              unit: detail.unit.name,
              task: id,
              acquired_quantity: detail.acquired_quantity,
            };
          });

          this.getItem();
          this.getUnit();
          this.isModalVisible = true;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    requisition_history: function (id) {
      this.history_obj = null;
      this.isModalVisible = false;
      var today = new Date().toLocaleString('en-us', 
      { 
        weekday:"long",
        year:"numeric",
        month:"short",
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
          })
       axios
        .get("project_requisition/" + id + "/")
        .then((response) => {
          // this.task_targets = response.data.target

          this.history_obj = response.data.status_history.map((history) => {
            return {
              id: history.id,
              datetime: today.toLocaleString(history.datetime),
              status: history.status,
              status_update_by: history.status_update_by,
            };
          })

          this.isModalVisible = true;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
   resetSearch: function (){
    this.project = null;
    this.search_status = null;
    this.sprint = null;
    this.version = null;
    this.status = null;
    this.task = null;
    this.submitted_date = null;
    this.submitted_for = null;
    this.category = null;
  },
  },
  created() {
    this.getRequisitionList();
    this.getPermissions();
    this.getRequisitionStatus();
    this.getProjectList();
    this.getTaskCategory();
    this.getMember();
  },
  updated() {
    this.getRequisitionList();
  },
};
</script>

<style  scoped>
.edit_btn {
  margin-left: 10px;
  cursor: pointer;
}
.table-bordered td,
.table-bordered th {
  font-size: 90%;
}
.req_btn {
  cursor: pointer;
}
</style>