<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Project Requisition List" />

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-sm mb-0 table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Task</th>
                      <th scope="col">Requisition Details</th>
                      <th scope="col">Status</th>
                      <th scope="col">Information</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(req, index) in requisition_list" :key="index">
                      <th scope="row">{{ req.task.name }}</th>
                      <td>
                        <div class="table-responsive">
                          <table class="table table-sm mb-0">
                            <thead>
                              <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Unit</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(r, index) in req.detail" :key="index">
                                <td>{{ r.item.name }}</td>
                                <td>{{ r.unit.name }}</td>
                                <td>{{ r.quantity }}</td>
                                <td>{{ r.amount }}</td>
                                <td>{{ r.total }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>

                      <td>
                        <table class="table table-sm">
                          <tr>
                            <td>
                              <select
                                v-model="status"
                                v-if="is_superuser || can_approve_requisition"
                                @change="updateStatus(req.id)"
                              >
                                <option
                                  v-for="(u, i) in requisition_status"
                                  :key="i"
                                  :value="u.key"
                                >
                                  {{ u.value }}
                                </option>
                              </select>

                              <select
                                v-model="status"
                                v-else-if="
                                  can_verify_requisition && req.status === 'PN'
                                "
                              >
                                <option value="RJ">Rejected</option>
                                <option value="VE">Verified</option>
                              </select>

                              <span class="badge badge-info" v-else>{{
                                requisition_obj[req.status]
                              }}</span>

                              <button
                                type="button"
                                data-toggle="modal"
                                data-target=".bs-example-modal-xl"
                                class="btn btn-purple btn-xs edit_btn"
                                @click="modal_requisition(req.id)"
                              >
                                <i class="far fa-edit"></i>
                              </button>
                            </td>
                            <td>
                              {{ req.status_update_by.first_name }}
                              {{ req.status_update_by.last_name }}
                              ({{ req.status_update_by.username }})
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
                      <td>Info</td>
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
      </div>

      <!-- modal start -->

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
                    class="btn btn-primary waves-effect waves-light cus_right"
                  >
                    Submit
                  </button></td>
                        
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
      <div class="modal-backdrop fade show" v-if="modal_show"></div>
    </template>
  </Layout>
</template>

<script>
import axios from "@/axios";
import Layout from "../Layout.vue";
import PageTitle from "@/components/layouts/partials/PageTitle";
import Swal from "sweetalert2";
// import permissions from '../../../permisson'
import permissions from "@/permisson";

export default {
  name: "project_requisitionList",
  components: {
    Layout,
    PageTitle,
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
      all_total: null
    };
  },
  methods: {
    getRequisitionList: function () {
      axios
        .get("project_requisition/")
        .then((response) => {
          this.requisition_list = response.data.results;
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

    updateStatus: function (id) {
      // console.log("186", id);
      axios
        .put("project_requisition_approval/" + id + "/", {
          status: this.status,
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
          this.requisition_modal_details = response.data.detail.map((detail) => {
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
          });

          this.getItem()
          this.getUnit()
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
        .put("project_requisition_correction/" ,{
          detail: this.requisition_modal_details

        })
        .then(() => {
          
          Swal.fire({
            icon: "success",
            text: "You have successfully Update a Requisition Details.",
          }).then(() => {

            this.modal_show = false;
            this.getRequisitionList()
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
  },
  created() {
    this.getRequisitionList();
    this.getPermissions();
    this.getRequisitionStatus();
  },

 
};
</script>

<style  scoped>
.edit_btn {
  margin-left: 10px;
  cursor: pointer;
}
</style>