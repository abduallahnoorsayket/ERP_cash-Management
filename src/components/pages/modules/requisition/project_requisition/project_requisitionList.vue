<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Project Requisition List" />

      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-3">
                  <div class="form-group">
                    <label>Project</label>
                    <select
                      class="form-control"
                      data-toggle="select2"
                      v-model="project"
                      @change="getAllData()"
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
                <div class="col-lg-3">
                  <div class="form-group">
                    <label>Version</label>
                    <select
                      class="form-control"
                      data-toggle="select2"
                      v-model="version"
                      @change="getSprint()"
                    >
                      <option value="false" disabled selected>Select</option>

                      <option
                        v-for="(v, i) in versions"
                        :key="i"
                        :value="v.id"
                      >
                        {{ v.name }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="col-lg-3">
                  <div class="form-group">
                    <label>Sprint</label>
                    <select
                      class="form-control"
                      data-toggle="select2"
                      v-model="sprint"
                      @change="getParents()"
                    >
                      <option value="false" disabled selected>Select</option>

                      <option v-for="(s, i) in sprints" :key="i" :value="s.id">
                        {{ s.name }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="col-lg-3">
                  <div class="form-group">
                    <label>Task</label>
                    <select
                      class="form-control"
                      data-toggle="select2"
                      v-model="task"
                    >
                      <option value="false" disabled selected>Select</option>

                      <option v-for="(t, i) in tasks" :key="i" :value="t.id">
                        {{ t.name }}
                      </option>
                    </select>
                  </div>
                </div>
                

                <div class="col-lg-3">
                  <div class="form-group">
                    <label>Status</label>
                    <select
                      class="form-control"
                      data-toggle="select2"
                      v-model="search_status"
                    >
                      <option value="false" disabled selected>Select</option>

                      <option
                        v-for="(u, i) in requisition_status"
                        :key="i"
                        :value="u.key"
                      >
                        {{ u.value }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="form-group">
                    <label>Submitted For</label>
                    <select
                      class="form-control"
                      data-toggle="select2"
                      v-model="submitted_for"
                    >
                      <option value="false" disabled selected>Select</option>

                      <option
                        v-for="(m, i) in assignees"
                        :key="i"
                        :value="m.id"
                      >
                        {{ m.first_name }} {{ m.last_name }} ({{ m.username }})
                      </option>
                    </select>
                  </div>
                </div>

                <div class="col-lg-3">
                  <div class="form-group">
                    <label>Submitted Date</label>

                    <input
                      type="date"
                      class="form-control"
                      v-model="submitted_date"
                    />
                  </div>
                </div>
                <div class="col-lg-3">
                <div class="form-group">
                  <label>Task Name</label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="category"
                    :class="{ 'parsley-error': errors && errors.category }"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option
                      v-for="(s, i) in task_category_list"
                      :key="i"
                      :value="s.id"
                    >
                      {{ s.name }}
                    </option>
                  </select>
                 <ValidationError :error="errors.category" v-if="errors" />
                </div>
                </div>
                <div class="col-lg-3 offset-lg-6">
                 <div class="form-group">
                    <label style="visibility: hidden">fgggggggf</label>
                    <button
                      type="button"
                      class="
                        btn btn-primary btn-sm
                        waves-effect waves-light
                        pull-right
                      "
                      @click="resetSearch()"
                    >
                      <i class="fas fa-undo"></i>
                    </button>
                    
                  </div>
                </div>

                  <div class="col-lg-3">
                 
                 
                  <div class="form-group">
                    <label style="visibility: hidden">fgggggggf</label>
                    <button
                      type="button"
                      class="
                        btn btn-primary btn-sm
                        waves-effect waves-light
                        pull-right
                      "
                      @click="searchRequisition()"
                    >
                      Search
                    </button>
                    
                  </div>
                  
                
                </div>

               
               
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
      
              <div class="table-responsive">
                <table class="table table-sm mb-0">
                
                  <tbody>
                    <tr>
                      <th>Pending</th>
                      <td >{{total_pending}}</td>
                    </tr>
                    <tr>
                      <th>Approved</th>
                      <td>{{total_approved}}</td>
                    </tr>
                    <tr>
                      <th>Verified</th>
                      <td>{{total_verified}}</td>
                    </tr>
                    <tr>
                      <th>Rejected</th>
                      <td>{{total_rejected}}</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <th>{{total_amount}}</th>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-sm mb-0 table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Project</th>
                      <th scope="col">Version</th>
                      <th scope="col">Sprint</th>
                      <th scope="col">Task</th>
                      <th scope="col" class="text-center">
                        Requisition Details
                      </th>
                      <th scope="col" class="text-center">Status & Date</th>
                      <th scope="col">Information</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(req, index) in requisition_list" :key="index">
                      <td scope="row">
                        {{ req.task.sprint.version.project.name }}
                      </td>
                      <td scope="row">{{ req.task.sprint.version.name }}</td>
                      <td scope="row">{{ req.task.sprint.name }}</td>
                      <td scope="row">
                        {{ req.task.name }}

                   <br>
                       
                          <span class="badge badge-primary req_btn" v-if="req.task.has_target" @click="getTask_target(req.task.id)">
                            <i class="fas fa-rocket mr-1"></i>
                            </span>
                         
                      </td>
                      <td>
                        <RequisitionDetailsTable :reqDetail="req.detail" />
                      </td>

                      <td>
                        <table class="table table-sm">
                          <tr>
                            <td>
                              <select
                                v-if="is_superuser || can_approve_requisition"
                                @change="updateStatus(req.id, $event)"
                              >
                                <option
                                  v-for="(u, i) in requisition_status"
                                  :key="i"
                                  :value="u.key"
                                  :selected="u.key == req.status"
                                >
                                  {{ u.value }}
                                </option>
                              </select>

                              <select
                                @change="updateStatus(req.id, $event)"
                                v-else-if="
                                  can_verify_requisition && req.status === 'PN'
                                "
                              >
                                <option selected>Pending</option>
                                <option value="RJ">Rejected</option>
                                <option value="VE">Verified</option>
                              </select>

                              <span class="badge badge-info" v-else>{{
                                requisition_obj[req.status]
                              }}</span>

                            
                              <span  
                              data-toggle="modal"
                              data-target=".bs-example-modal-xl"
                              class="badge badge-primary req_btn"
                              @click="modal_requisition(req.id)"  
                              v-if="is_superuser || can_approve_requisition">
                                  <i class="far fa-edit"></i>
                              </span>
                            
                             

                            </td>
                            <td>
                              <span v-if="req.status_update_by">
                                {{ req.status_update_by.first_name }}
                                {{ req.status_update_by.last_name }}
                                ({{ req.status_update_by.username }})
                              </span>
                              <span  
                              data-toggle="modal"
                              data-target=".bs-example-modal-xl"
                              class="badge badge-primary req_btn"
                              @click="requisition_history(req.id)">
                                <i class="fas fa-history"></i>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>Submitted For</td>
                            <td>
                              {{ req.submitted_for.first_name }}
                              {{ req.submitted_for.last_name }}({{
                                req.submitted_for.username
                              }})
                            </td>
                          </tr>
                          <tr>
                            <td>Submitted At</td>
                            <td>{{ req.submitted_date }}</td>
                          </tr>
                          <tr>
                            <td>Created At</td>
                            <td>{{ req.created_at }}</td>
                          </tr>
                          <tr>
                            <td>Updated At</td>
                            <td>{{ req.updated_at }}</td>
                          </tr>
                        </table>
                      </td>

                      <td>
                        <span class="badge badge-success"
                          >Total Count - {{ req.requisition_count }}</span
                        ><br />
                        <span class="badge badge-info"
                          >Sum - {{ req.requisition_sum }}</span
                        ><br />
                        <span class="badge badge-warning"
                          >Pending - {{ req.requisition_count_pending }}</span
                        ><br />
                        <span class="badge badge-danger"
                          >Rejected - {{ req.requisition_count_rejected }}</span
                        ><br />
                        <span class="badge badge-dark"
                          >Approved - {{ req.requisition_count_approved }}</span
                        ><br />
                        <span class="badge badge-purple"
                          >Verified - {{ req.requisition_count_verified }}</span
                        >
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
                            <!-- v-if="hasPermission('view_version')" -->
                             <li >
                              <router-link
                                :to="{
                                  name: 'Project_requisitionDetails',
                                  params: { id: req.id },
                                }"
                                class="dropdown-item"
                              >
                                <i class="fas fa-eye"></i> View
                              </router-link>
                            </li>
                            <li v-if="can_edit_requisition">
                              <router-link
                                :to="{
                                  name: 'Project_requisitionEdit',
                                  params: { id: req.id },
                                }"
                                class="dropdown-item"
                              >
                                <i class="fas fa-edit"></i> Edit
                              </router-link>
                            </li>
                            <li v-if="can_delete_requisition">
                              <a
                                href="#"
                                @click="requisitionDelete(req.id)"
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

      <CommonModal :isModalVisible="isModalVisible" v-if="task_targets">
        <template v-slot:modal_header>
          <p>Task Budget</p>
        </template>
        <template v-slot:modal_body>
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Unit</th>
                    <th scope="col text-right">Quantity</th>
                    <th scope="col text-right">Acquired Quantity</th>
                  
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(task_target, k) in task_targets" :key="k">
                    <td>
                    {{task_target.item}}
                    </td>
                    <td>
                    {{task_target.unit}}
                    </td>
                    <td>
                      {{task_target.quantity}}
                    </td>
                    <td>
                     {{task_target.acquired_quantity}}
                    </td>
                    
                  </tr>
                </tbody>
                <tfoot>
                 
                </tfoot>
              </table>
            </div>
          </div>
        </template>
      </CommonModal>
      <!-- modal start -->
        <CommonModal :isModalVisible="isModalVisible" v-if="history_obj">
        <template v-slot:modal_header>
          <p>Requisition Status history</p>
        </template>
        <template v-slot:modal_body>
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Datetime</th>
                    <th scope="col">Status</th>
                    <th scope="col text-right">status_update_by</th>
                  
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(history, k) in history_obj" :key="k">
                    <td>
                    {{history.datetime}}
                    </td>
                    <td>
                    {{ requisition_obj[history.status]}}
                    </td>
                    <td>
                      {{history.status_update_by}}
                    </td>     
                    
                  </tr>
                </tbody>
                <tfoot>
                 
                </tfoot>
              </table>
            </div>
          </div>
        </template>
      </CommonModal>

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
                Requisition Details
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
                        <th scope="col">Item</th>
                        <th scope="col">Unit</th>
                        <th scope="col text-right">Quantity</th>
                        <th scope="col text-right">Amount</th>
                        <th scope="col text-right">Total</th>
                        <th scope="col text-right">Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(dom_repeat, k) in requisition_modal_details"
                        :key="k"
                      >
                        <td>
                          <select
                            class="form-control text-right"
                            v-model="dom_repeat.item"
                          >
                            <option
                              v-for="(it, i) in items"
                              :key="i"
                              :value="it.id"
                            >
                              {{ it.name }}
                            </option>
                          </select>
                        </td>
                        <td>
                          <select
                            class="form-control text-right"
                            v-model="dom_repeat.unit"
                          >
                            <option
                              v-for="(u, i) in units"
                              :key="i"
                              :value="u.id"
                            >
                              {{ u.name }}
                            </option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="number"
                            min="0"
                            step=".01"
                            class="form-control text-right"
                            v-model="dom_repeat.quantity"
                            @keyup="calculateTotal(dom_repeat)"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            min="0"
                            step=".01"
                            class="form-control text-right"
                            v-model="dom_repeat.amount"
                            @keyup="calculateTotal(dom_repeat)"
                          />
                        </td>
                        <td>
                          <input
                            readonly="readonly"
                            type="number"
                            min="0"
                            step=".01"
                            class="form-control text-right"
                            v-model="dom_repeat.total"
                          />
                        </td>
                        <td>
                          <textarea
                            type="text"
                            rows="1"
                            min="0"
                            step=".01"
                            class="form-control text-right"
                            v-model="dom_repeat.remarks"
                          />
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="6" class="text-right">
                          <button
                            @click="submitCorrectionDetails"
                            type="button"
                            class="
                              btn btn-primary
                              waves-effect waves-light
                              cus_right
                            "
                          >
                            Submit
                          </button>
                        </td>
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
      <!-- modal end -->

      <!-- <div id="back_drop" class="modal-backdrop fade show" v-if="modal_show"></div> -->
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
import CommonModal from "@/components/layouts/partials/CommonModal";
import RequisitionDetailsTable from "./partial/RequisitionDetailsTable";

export default {
  name: "project_requisitionList",
  components: {
    Layout,
    PageTitle,
    Pagination,
    RequisitionDetailsTable,
    CommonModal
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