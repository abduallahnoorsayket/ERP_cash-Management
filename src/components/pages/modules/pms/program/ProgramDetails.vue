<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Program details" />
     <div class="row">
       <h1>{{name}}</h1>
      </div>
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
                  <tbody  v-if="form_data">
                    <tr>
                      <th scope="row"> Program name</th>
                      <td>{{ form_data.name }}</td>
                      <th scope="row">Program ID</th>
                      <td>
                        {{ form_data.programId }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"> Department</th>
                      <td > <span v-if="form_data.department.name"> {{ form_data.department.name }}</span> </td>
                       <th scope="row"> Sprint ID</th>
                      <td > <span v-if="form_data.sprint.sprintId"> {{ form_data.sprint.sprintId }}</span> </td>
                     
                    </tr>
                    <tr>
                      <th scope="row"> Version</th>
                      <td > <span v-if="form_data.sprint.version && form_data.sprint.version.name"> {{ form_data.sprint.version.name }}</span> </td>
                       <th scope="row"> Version ID</th>
                      <td > <span v-if="form_data.sprint.version &&  form_data.sprint.version.versionId"> {{ form_data.sprint.version.versionId }}</span> </td>
                     
                    </tr>
                     <tr>
                        <th scope="row"> Project</th>
                      <td>
                        <span v-if="form_data.sprint.version && form_data.sprint.version.project"> {{ form_data.sprint.version.project.name }}</span>
                      </td>
                      <th scope="row"> Estimated duration</th>
                      <td >{{ form_data.estimated_duration }}</td>
                    </tr>
                     <tr>
                      <th scope="row"> Has target</th>
                      <td>{{ form_data.has_target }}</td>
                      <th scope="row"> Status</th>
                      <td>
                        <span v-if="form_data.status_list"> {{ form_data.status_list[form_data.status] }}</span>
                      </td>
                      
                    </tr>
                      <tr>
                     
                      <th scope="row"> Expected start date</th>
                      <td>
                        {{ form_data.expected_start_date }}
                      </td>
                       <th scope="row"> Start date</th>
                      <td>{{ form_data.start_date }}</td>
                    </tr>
                      <tr>
                     
                      <th scope="row"> Expected complete date</th>
                      <td>
                        {{ form_data.expected_complete_date }}
                      </td>
                      <th scope="row"> Complete date</th>
                      <td colspan="3">{{ form_data.complete_date }}</td>
                    </tr>


                    <tr>
                     
                      <th scope="row"> Progress</th>
                      <td>
                        {{ form_data.progress }}
                      </td>
                       <th scope="row"> Task category</th>
                      <td>{{ form_data.category }}</td>
                    </tr>
                     <tr>
                      <th scope="row"> Parent</th>
                      <td>
                        {{ form_data.parent }}
                      </td>
                       <th scope="row"> Target</th>
                      <td>
                        <!-- {{ form_data.category }} -->
                      </td>
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
      <CommentPost 
      v-if="program_id" 
      :content_type_id="content_type_id" 
      :object_id="object_id"
      />
      <br><br>
       <div class="row">
        <!-- <div class="col-md-3"></div> -->
        <div class="col-md-12">
          <FileUploader v-if="program_id"  :content_type_id="content_type_id" 
      :object_id="object_id" />
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
   
     getProgramDetailsData: function () {
      axios.get(`program/${this.$route.params.id}/`).then(
        (response) => {
          // console.log("277", response.data);
          this.form_data = response.data;
          this.program_id = response.data.id;
          this.content_type_id = response.data.content_type.id;
          this.object_id = response.data.content_type.object_id;
          this.name = response.data.name;

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