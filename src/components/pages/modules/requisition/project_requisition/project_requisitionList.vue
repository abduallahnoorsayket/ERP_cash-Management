<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Project RequisitionList List" />

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover mb-0 table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Task</th>
                      <th scope="col">Requisition Details</th>
                      <th scope="col">Status</th>

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
                                <td>{{ r.item }}</td>
                                <td>{{ r.unit }}</td>
                                <td>{{ r.quantity }}</td>
                                <td>{{ r.amount }}</td>
                                <td>{{ r.total }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>

                      <td>
                        <select
                          class="form-control"
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
                          class="form-control"
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
                      </td>

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
                            <li>
                              <router-link
                                :to="{
                                  name: 'ClientEdit',
                                  params: { id: req.id },
                                }"
                                class="dropdown-item"
                              >
                                <i class="fas fa-edit"></i> Edit
                              </router-link>
                            </li>
                            <li>
                              <a
                                href="#"
                                @click="clientDelete(req.id)"
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
      this.is_superuser = permissions.is_superuser();
    },

    getRequisitionStatus: function () {
      axios
        .get("project_requisition_status")
        .then((response) => {
          this.requisition_status = response.data.data;
          this.requisition_status.map((req) => {
            console.log("140", req);
            this.requisition_obj[req.key] = req.value;
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    updateStatus: function (id) {
      console.log("186", id);
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

    clientDelete: function (id) {
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
          axios.delete("clients/" + id + "/").then((response) => {
            if (response.status === 204) {
              this.getClientList();
            }
          });
          Swal.fire("Deleted!", "Client has been deleted!!", "success");
        } else {
          Swal.fire("Cancelled", "Client has not been deleted !", "error");
        }
      });
    },
  },
  created() {
    this.getRequisitionList();
    // this.getLocalStorageData()
    this.getPermissions();
    this.getRequisitionStatus();
  },
};
</script>

<style lang="scss" scoped>
</style>