<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Version List" />

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-2">
                 <div class="form-group">
                  <label>Project</label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="project"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(s, i) in projectId" :key="i" :value="s.id">
                      {{ s.name }}
                    </option>
                  </select>
                
                </div>
                </div>
                  <div class="col-lg-2">
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
                  <div class="col-lg-2">
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
                  <div class="col-lg-2">
                      <div class="form-group">
                  <label>Version Id</label>
                  <input
                    type="text"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                    v-model="version_id"
                  />
              
                </div>
                </div>

                  <div class="col-lg-2">
                   <div class="form-group">
                  <label>Current</label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="current"
                  >
                   <option  selected>Select</option>

                    <option
                      value="true"
                    >
                     True
                    </option>
                    <option
                      value="false"
                    >
                     False
                    </option>
                  </select>
                </div>

                 

                </div>

                  <div class="col-lg-1">
                  <div class="form-group ">
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
                <table class="table table-hover mb-0 table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Project Name</th>
                      <th scope="col" title="Expected Start Date">ESD</th>
                      <th scope="col" title="Start Date">SD</th>
                      <th scope="col" title="Expected complete Date">ECD</th>
                      <th scope="col" title="complete_date">CD</th>
                      <th scope="col">Current</th>
                      <th scope="col" title="Number Of Quantity">QTY</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(version, index) in all_version_list"
                      :key="index"
                    >
                      <th scope="row">{{ version.name }}</th>
                      <td>{{ version.project.name }}</td>
                      <td>{{ version.expected_start_date }}</td>
                      <td>{{ version.start_date }}</td>
                      <td>{{ version.expected_complete_date }}</td>
                      <td>{{ version.complete_date }}</td>
                      <td>
                        <i
                          :class="[
                            version.current 
                              ? 'fas fa-check-circle  '
                              : 'fas fa-times-circle',
                          ]"
                        ></i>
                      </td>
                      <td>
                        <router-link
                          :to="{
                            name: 'SprintList',
                            query: { version: version.id },
                          }"
                        >
                          <span class="badge badge-info"> Sprint -{{
                           version.no_of_sprints
                          }}</span>
                        </router-link>
                      </td>
                       <td >
                        <span :class="status_map[version.status]">
                              {{ version.status_list[version.status] }}
                          </span>
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
                            <li v-if="hasPermission('view_version')">
                              <router-link
                                :to="{
                                  name: 'VersionDetails',
                                  params: { id: version.id },
                                }"
                                class="dropdown-item"
                              >
                                <i class="fas fa-eye"></i> View
                              </router-link>
                            </li>
                            <li v-if="hasPermission('change_version')">
                              <router-link
                                :to="{
                                  name: 'VersionEdit',
                                  params: { id: version.id },
                                }"
                                class="dropdown-item"
                              >
                                <i class="fas fa-edit"></i> Edit
                              </router-link>
                            </li>
                            
                            <li v-if="hasPermission('delete_version')">
                              <a
                                href="#"
                                @click="versionDelete(version.id)"
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
              
          

           <!-- <Pagination :pagination="pagination" /> -->

          
            <!-- <div class="col-md-6"></div>
            <div class="col-md-2"></div> -->
       
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
import Pagination from "@/components/layouts/partials/Pagination";
import Swal from "sweetalert2";
import permissions from "@/permisson";

export default {
  name: "VersionList",
  components: {
    Layout,
    PageTitle,
    Pagination
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
      all_version_list: null,
      projectId: null,
      statusData: null,
      version_id: null,
      project: null,
      current: null,
      status: null,
      name: null,
      pagination: {
        count: null,
        next: null,
        previous: null,
        showing: 0,
        page: null,
  }
    };
  },
  methods: {
    getVersionList: function (e) {
      let endPoint = "versions"
      var queryParam = {
        name: this.$route.query.name,
        current: this.$route.query.current,
        project: this.$route.query.project,
        version_id: this.$route.query.version_id,
        status: this.$route.query.status,
        page: this.$route.query.page,
      }
      
      console.log('263', queryParam);
      axios.get(endPoint,{
        params: queryParam
      }).then((response) => {
        this.all_version_list = response.data.results;
        this.pagination.count = response.data.count;
        this.pagination.next = response.data.next;
        this.pagination.previous = response.data.previous;
        this.pagination.showing = response.data.results.length;
      }).catch((error) => {
        console.log('302 version',error,e);
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
    },
    getProjectList: function () {
      axios
        .get("project_short/")
        .then((response) => {
          this.projectId = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
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
    searchVersion() {

      this.$router.push({
        path: "version-list",
        query: {
          name: this.name,
          project: this.project,
          current: this.current,
          status: this.status,
          version_id: this.version_id,
        },
      });

    }
  },
  created() {
    this.getVersionList();
    this.getProjectList();
    this.getStatus()
   
  },
  updated() {
    this.getVersionList()
  }
};
</script>

<style lang="scss" scoped>
</style>