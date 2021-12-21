<template>
   <Layout>
    <template v-slot:module_content>
      <PageTitle title="Program Details" />


      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover mb-0 table-bordered table-sm">
                  <!-- <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Program</th>
                      <th scope="col">Client</th>
                      <th scope="col">Project Id</th>
                      <th scope="col" title="Assign Date">AD</th>
                      <th scope="col" title="Expected Start Date">ESD</th>
                      <th scope="col" title="Start Date">SD</th>
                      <th scope="col" title="Expected complete Date">ECD</th>
                      <th scope="col" title="complete_date">CD</th>
                      <th scope="col" title="Number Of Quantity">QTY</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead> -->
                  <tbody v-if="form_data">
                    <tr>
                      <th scope="row"> Project name</th>
                      <td>{{ form_data.name }}</td>
                      <th scope="row"> Program ID</th>
                      <td>
                        {{ form_data.programId }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"> Department</th>
                      <td colspan="3"> <span v-if="form_data.department.name"> {{ form_data.department.name }}</span> </td>
                      <!-- <th scope="row"> Members</th>
                      <td>
                        <span v-if="ProjectMembers"> {{ ProjectMembers }}</span>
                        </td> -->
                    </tr>
                    <tr>
                      <th scope="row"> No of project</th>
                      <td><span> {{form_data.no_of_project }}</span></td>
                      <th scope="row"> No of version</th>
                      <td>
                        {{ form_data.no_of_version }}
                      </td>
                    </tr>
                     <tr>
                      <th scope="row"> No of sprint</th>
                      <td>{{ form_data.no_of_sprint }}</td>
                      <th scope="row"> No of task</th>
                      <td>
                        {{ form_data.no_of_task }}
                      </td>
                    </tr>
                     <tr>
                      <!-- <th scope="row"> Total amount</th> -->
                      <!-- <td>{{ form_data.total_amount }}</td> -->
                      <th scope="row"> Status</th>
                      <td>
                        <span v-if="form_data.status_list"> {{ form_data.status_list[form_data.status] }}</span>
                      </td>
                      <th scope="row">Created at</th>
                      <td>
                        {{ form_data.created_at }}
                      </td>
                    </tr>
                      <tr>
                      
                    </tr>
                     <tr>
                      <th scope="row">Description</th>
                      <td colspan="3">{{ form_data.description }}</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
         <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div>
                    <ul class="nav nav-tabs" role="tablist">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="false"
                        >
                          <span class="d-block d-sm-none"
                            ><i class="fa fa-home"></i
                          ></span>
                          <span class="d-none d-sm-block">Comments</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          <span class="d-block d-sm-none"
                            ><i class="fa fa-user"></i
                          ></span>
                          <span class="d-none d-sm-block">Files</span>
                        </a>
                      </li>
                    </ul>

                    <div class="tab-content p-3 border border-top-0">
                      <div
                        class="tab-pane active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div>
                          <CommentPost
                            v-if="program_id"
                            :content_type_id="content_type_id"
                            :object_id="object_id"
                          />
                        </div>
                      </div>
                      <div
                        class="tab-pane"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <FileUploader
                          v-if="program_id"
                          :content_type_id="content_type_id"
                          :object_id="object_id"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>

       <div class="row">
        <!-- <div class="col-md-3"></div> -->
        <div class="col-md-12">
        
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
import FileUploader from "@/components/layouts/partials/FileUploader";
import CommentPost from "@/components/layouts/partials/CommentPost";


export default {
  name: "ProgramDetails",
  components: {
    Layout,
    PageTitle,
    FileUploader,
    CommentPost
  },
  data() {
    return {
      form_data:null,
       status_map:{
        RU:"badge badge-primary", //Running
        AS:"badge badge-info", //Assigned
        CO:"badge badge-success", //Completed
        PO:"badge badge-warning", //Postponed
        PR:"badge badge-danger", //Problematic
        UP:"badge badge-purple", //Upcoming
      },
      program_id:null,
      content_type_id:null,
      object_id:null,
      department: null,
      statusData: null,
      status: null,
      name: null,
      no_of_project: null,
      no_of_sprint: null,
      no_of_task: null,
      no_of_version: null,
      description: null,
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
   
     getProgramDetailsData: function () {
      axios.get(`program/${this.$route.params.id}/`).then(
        (response) => {
          // console.log("277", response.data);
          this.form_data = response.data;
          this.program_id = response.data.id;
          this.content_type_id = response.data.content_type.id;
          this.object_id = response.data.content_type.object_id;
          this.name = response.data.name;
          this.form_data = response.data;
          // this.programId = response.data.programId;
          // this.description = response.data.description;
          // this.no_of_project = response.data.no_of_project;
          // this.no_of_sprint = response.data.no_of_sprint;
          // this.no_of_version = response.data.no_of_version;
          // this.no_of_task = response.data.no_of_task;
          // this.department = response.data.department.name;
          // this.status = response.data.status;

        }
      ).catch((err) => {
        console.log("error", err)
      })
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
              this.getProgramList();
            }
          });
          Swal.fire("Deleted!", "Program has been deleted!!", "success");
        } else {
          Swal.fire("Cancelled", "Program has not been deleted !", "error");
        }
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
    this.getProgramDetailsData();
    // this.getProgramList();
    // this.getStatus();
    // this.getDepartment();
  },
  updated() {
    // this.getProgramList();
  },
};
</script>

<style>

</style>