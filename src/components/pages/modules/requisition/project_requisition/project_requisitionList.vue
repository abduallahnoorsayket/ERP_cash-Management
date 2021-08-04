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
                      <th scope="row">{{req.task}}</th>
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
                                <td>{{r.item}}</td>
                                <td>{{r.unit}}</td>
                                <td>{{r.quantity}}</td>
                                <td>{{r.amount}}</td>
                                <td>{{r.total}}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>

                      <td>
                        <select class="form-control">
                          <option>Approved</option>
                          <option>Disapproved</option>
                         
                        </select>
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

export default {
  name: "project_requisitionList",
  components: {
    Layout,
    PageTitle,
  },
  data() {
    return {
      requisition_list: null,
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
  },
};
</script>

<style lang="scss" scoped>
</style>