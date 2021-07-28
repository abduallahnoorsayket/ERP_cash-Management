<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Project Advance List" />

      <div class="row">
        <div class="col-lg-12">
        
                                <div class="card">
                                    <div class="card-body">
                                        <div class="dropdown float-right">
                                            <a href="#" class="dropdown-toggle card-drop" data-toggle="dropdown" aria-expanded="false">
                                                <i class="mdi mdi-dots-vertical"></i>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li><a href="#" class="dropdown-item">Action</a></li>
                                                <li><a href="#" class="dropdown-item">Another action</a></li>
                                                <li><a href="#" class="dropdown-item">Something else here</a></li>
                                                <li class="dropdown-divider"></li>
                                                <li><a href="#" class="dropdown-item">Separated link</a></li>
                                            </ul>
                                        </div>
            
                                        <h4 class="header-title mb-4">Simple Card Title</h4>
            
                                        <p class=" mb-0">
                                            If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages new common language will be more simple and regular
                                        </p>
                                    </div>
                                </div>
                           
        </div>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive ">
                <table class="table table-hover mb-0 table-bordered table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Department</th>
                      <th scope="col">Client</th>
                      <th scope="col" title="Assign Date">AD</th>
                      <th scope="col" title="Expected Start Date">ESD</th>
                      <th scope="col" title="Start Date">SD</th>
                      <th scope="col" title="Expected complete Date">ECD</th>
                      <th scope="col" title="complete_date">CD</th>
                      <th scope="col" title="Number Of Quantity">QTY</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(project, index) in all_project_list"
                      :key="index"
                    >
                      <th scope="row">{{ project.name }}</th>
                      <td>{{ project.department.name }}</td>
                      <td>{{ project.client.name }}</td>
                      <td>{{ project.assign_date }}</td>
                      <td>{{ project.expected_start_date }}</td>
                      <td>{{ project.start_date }}</td>
                      <td>{{ project.expected_complete_date }}</td>
                      <td>{{ project.complete_date }}</td>
                      <td>
                        <router-link :to="{name: 'VersionList', query: {project_id:project.id} }">

                          <span class="badge badge-pill badge-primary">
                         
                            {{project.no_of_version}}

                            </span>

                        </router-link>
                        <router-link :to="{name: 'SprintList', query: {project_id:project.id} }">
                          <span class="badge badge-pill badge-primary">{{project.no_of_sprint}}</span>
                        </router-link>
              
                      </td>
                      <td>{{ project.status_list[project.status] }}</td>
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
                              <router-link :to="{name: 'ProjectEdit', params: { id: project.id },}" class="dropdown-item"> <i class="fas fa-edit"></i> Edit </router-link>
                            </li>
                            <li>
                              <a href="#" @click="deleteClient(project.id)"  class="dropdown-item"> <i class="fas fa-trash"></i> Delete</a>
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
  name: "ProjectAdvanceList",
  components: {
    Layout,
    PageTitle,
  },
  data() {
    return {
      all_project_list: null,
    };
  },
  methods: {
    getProjectList: function () {
      // const token = "ef24d61024d188c96cbbf9d103f8ea70cbaa63ed"
      axios.get("projects/").then((response) => {
        this.all_project_list = response.data.results;
      });
    },
      deleteClient: function (id) {
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
          axios.delete("projects/" + id + "/").then((response) => {
            if (response.status === 204) {
              this.getProjectList();
            }
          });
          Swal.fire("Deleted!", "Project has been deleted!!", "success");
        } else {
          Swal.fire("Cancelled", "Project has not been deleted !", "error");
        }
      });
    }
  },
  created() {
    this.getProjectList();
  },
};
</script>

<style lang="scss" scoped>
</style>