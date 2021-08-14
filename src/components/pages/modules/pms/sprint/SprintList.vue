<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Sprint List" />

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover mb-0 table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Sprint Id</th>
                      <th scope="col" title="Expected Start Date">ESD</th>
                      <th scope="col" title="Start Date">SD</th>
                      <th scope="col" title="Expected complete Date">ECD</th>
                      <th scope="col" title="complete_date">CD</th>
                      <th scope="col" title="estimated_duration">ED</th>
                      <th scope="col" >Current</th>
                      <th scope="col" title="Number Of Quantity">QTY</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(sprint, index) in all_sprint_list"
                      :key="index"
                    >
                      <th scope="row">{{ sprint.name }}</th>
                      <td>{{ sprint.sprintId }}</td>
                      <td>{{ sprint.expected_start_date }}</td>
                      <td>{{ sprint.start_date }}</td>
                      <td>{{ sprint.expected_complete_date }}</td>
                      <td>{{ sprint.complete_date }}</td>
                      <td>{{ sprint.estimated_duration }}</td>
                      <td>{{ sprint.current }}</td>
                      <td>
                         <router-link :to="{name: 'VersionList', query: {sprint:sprint.id} }">
                          <span class="badge badge-pill badge-primary">{{sprint.version}}</span>
                        </router-link>

                      </td>
                      <td>{{ sprint.status_list[sprint.status] }}</td>

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
  name: "SprintList",
  components: {
    Layout,
    PageTitle,
  },
  data() {
    return {
      all_sprint_list: null,
    };
  },
  methods: {
    getSprintList: function () {
      axios.get("sprints").then((response) => {
        this.all_sprint_list = response.data.results;
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
          Swal.fire("Deleted!", "Version has been deleted!!", "success");
        } else {
          Swal.fire("Cancelled", "Version has not been deleted !", "error");
        }
      });
    }
  },
  created() {
    this.getSprintList();
  },
};
</script>

<style lang="scss" scoped>
</style>