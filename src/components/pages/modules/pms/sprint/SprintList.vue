<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Version List" />

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
                      <td>{{ sprint.status }}</td>

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
                              <router-link :to="{name: 'SprintEdit', params: { id: sprint.id },}" class="dropdown-item"> <i class="fas fa-edit"></i> Edit </router-link>
                            </li>
                            <li>
                              <a href="#" @click="versionDelete(sprint.id)"  class="dropdown-item"> <i class="fas fa-trash"></i> Delete</a>
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
      // const token = "ef24d61024d188c96cbbf9d103f8ea70cbaa63ed"
      axios.get("sprints").then((response) => {
        this.all_sprint_list = response.data.results;
        console.log('====================================');
        console.log('101',response.data);
        console.log('====================================');
      });
    },
      versionDelete: function (id) {
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
          axios.delete("versions/" + id + "/").then((response) => {
            if (response.status === 204) {
              this.getVersionList();
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