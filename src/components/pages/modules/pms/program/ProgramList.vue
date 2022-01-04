<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Program List" />

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
      
                <div class="col-lg-4">
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
                <div class="col-lg-4">
                  <div class="form-group">
                    <label>Project Id</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="programId"
                    />
                  </div>
                </div>

                    <div class="col-lg-3">
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

                <div class="col-lg-1">
                  <div class="form-group">
                    <label style="visibility: hidden">fgggggggf</label>
                    <button
                      type="button"
                      class="
                        btn btn-primary btn-sm
                        waves-effect waves-light
                        pull-right
                      "
                      @click="searchVersion()"
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
               
                <table class="table table-hover mb-0 table-bordered table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Department</th>
                      <th scope="col">Program Id</th>
                      <th scope="col" title="Assign Date">CAT</th>
                      <th scope="col">Status</th>
                      <th scope="col" title="Number Of Quantity">QTY</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                    <tr
                      v-for="(program, index) in all_program_list"
                      :key="index"
                    >
                      <th scope="row">{{ program.name }}</th>
                      <td>{{ program.department.name }}</td>
                      <td>{{ program.programId }}</td>
                      <td>{{ program.created_at }}</td>
                      <td >
                        <span :class="status_map[program.status]">
                             {{ program.status_list[program.status] }}
                          </span>
                        </td>


                      <td>
                        <router-link
                          :to="{
                            name: 'ProjectList',
                            query: { program: program.id },
                          }"
                        >
                          <span class="badge badge-pill badge-info">
                           Project- {{ program.no_of_project }}
                          </span>
                        </router-link>
                        <br>
                        <router-link
                          :to="{
                            name: 'VersionList',
                            query: { program: program.id },
                          }"
                        >
                          <span class="badge badge-pill badge-info">
                           Version- {{ program.no_of_version }}
                          </span>
                        </router-link>
                        <br>
                        <router-link
                          :to="{
                            name: 'SprintList',
                            query: { program: program.id },
                          }"
                        >
                          <span class="badge badge-pill badge-danger">
                            
                            Sprint- {{program.no_of_sprint}}
                          </span>
                        </router-link>
                        <br>
                        <router-link
                          :to="{
                            name: 'TaskList',
                            query: { program: program.id },
                          }"
                        >
                          <span class="badge badge-pill badge-success">
                            
                            Task- {{program.no_of_task}}
                          </span>
                        </router-link>
                      </td>
                      <!-- <td>{{ project.status_list[project.status] }}</td> -->
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
                            <!-- v-if="hasPermission('change_project')" -->
                            <li >
                              <router-link
                                :to="{
                                  name: 'ProgramDetails',
                                  params: { id: program.id },
                                }"
                                class="dropdown-item"
                              >
                                <i class="fas fa-eye"></i> View
                              </router-link>
                            </li>
                            <li v-if="hasPermission('change_project')">
                              <router-link
                                :to="{
                                  name: 'ProgramEdit',
                                  params: { id: program.id },
                                }"
                                class="dropdown-item"
                              >
                                <i class="fas fa-edit"></i> Edit
                              </router-link>
                            </li>
                            <li v-if="hasPermission('delete_project')">
                              <a
                                href="#"
                                @click="deleteProgram(program.id)"
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
  name: "ProgramList",
  components: {
    Layout,
    PageTitle,
    Pagination,
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
      all_program_list: null,
      department: null,
      departmentId: null,
      statusData: null,
      status: null,
      name: null,
      programId: null,
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
    getProgramList: function () {
      let endPoint = "program";
      var queryParam = {
        name: this.$route.query.name,
        programId: this.$route.query.programId,
        status: this.$route.query.status,
        page: this.$route.query.page,
      };
      // console.log("265", queryParam);
      axios
        .get(endPoint, {
          params: queryParam,
        })
        .then((response) => {
          this.all_program_list = response.data.results;
          this.pagination.count = response.data.count;
          this.pagination.next = response.data.next;
          this.pagination.previous = response.data.previous;
          this.pagination.showing = response.data.results.length;
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

    deleteProgram: function (id) {
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
          axios.delete("program/" + id + "/").then((response) => {
          
            if (response.status === 204) {
              Swal.fire("Deleted!", "Program has been deleted!!", "success");
              this.getProgramList();
            }

          }).catch(function (error) {
            console.error('320',error.response.status)
           Swal.fire("Server error!", error.response.data.details, "error");
        });
          
        } else {
          Swal.fire("Cancelled", "Program has not been deleted !", "error");
        }
      })
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
    getDepartment: function () {
      axios
        .get("project_department")
        .then((response) => {
          this.departmentId = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    // search section start
    searchVersion() {
      this.$router.push({
        path: "program-list",
        query: {
          name: this.name,
          programId: this.programId,
          status: this.status,

        },
      });
    },
  },
  created() {
    this.getProgramList();
    this.getStatus();
    this.getDepartment();
  },
  updated() {
    this.getProgramList();
  },
};
</script>

<style lang="scss" scoped>
</style>