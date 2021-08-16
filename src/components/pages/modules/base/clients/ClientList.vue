<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Client List" />

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover mb-0 table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>

                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(client, index) in all_client_list" :key="index">
                      <td scope="row">{{ client.name }}</td>

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
                            <li v-if="hasPermission('change_client')">
                              <router-link
                                :to="{
                                  name: 'ClientEdit',
                                  params: { id: client.id },
                                }"
                                class="dropdown-item"
                              >
                                <i class="fas fa-edit"></i> Edit
                              </router-link>
                            </li>
                            <li v-if="hasPermission('delete_client')">
                              <a
                                href="#"
                                @click="clientDelete(client.id)"
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
import permissions from "@/permisson";

export default {
  name: "ClientList",
  components: {
    Layout,
    PageTitle,
  },
  data() {
    return {
      all_client_list: null,
    };
  },
  methods: {
    getClientList: function () {
      axios
        .get("clients/")
        .then((response) => {
          this.all_client_list = response.data;
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
    this.getClientList();
  },
};
</script>

<style lang="scss" scoped>
</style>