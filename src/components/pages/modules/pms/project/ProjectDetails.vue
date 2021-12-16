<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Project Details" />

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
                      <th scope="row"> Project name</th>
                      <td>{{ form_data.name }}</td>
                      <th scope="row"> Project ID</th>
                      <td>
                        {{ form_data.projectId }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"> Client</th>
                      <td> <span v-if="form_data.client.name"> {{ form_data.client.name }}</span> </td>
                      <th scope="row"> Members</th>
                      <td>
                        <span v-if="ProjectMembers"> {{ ProjectMembers }}</span>
                        </td>
                    </tr>
                    <tr>
                      <th scope="row"> Program</th>
                      <td><span v-if="form_data.program.name"> {{ form_data.program.name }}</span></td>
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
                      <th scope="row"> Total amount</th>
                      <td>{{ form_data.total_amount }}</td>
                      <th scope="row"> Status</th>
                      <td>
                        <span v-if="form_data.status_list"> {{ form_data.status_list[form_data.status] }}</span>
                      </td>
                    </tr>
                      <tr>
                      <th scope="row"> Assign date</th>
                      <td>{{ form_data.assign_date }}</td>
                      <th scope="row"> Expected start date</th>
                      <td>
                        {{ form_data.expected_start_date }}
                      </td>
                    </tr>
                      <tr>
                      <th scope="row"> Start date</th>
                      <td>{{ form_data.start_date }}</td>
                      <th scope="row"> Expected complete date</th>
                      <td>
                        {{ form_data.expected_complete_date }}
                      </td>
                    </tr>
                     <tr>
                      <th scope="row"> Complete date</th>
                      <td colspan="3">{{ form_data.complete_date }}</td>
                      <!-- <th scope="row"> Expected_complete_date</th>
                      <td>
                        {{ form_data.expected_complete_date }}
                      </td> -->
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
      v-if="project_id" 
      :content_type_id="content_type_id" 
      :object_id="object_id"

      />
       <br><br>
       <div class="row">
        <!-- <div class="col-md-3"></div> -->
        <div class="col-md-12">
          <FileUploader v-if="project_id"  :content_type_id="content_type_id" 
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
import CommentPost from "@/components/layouts/partials/CommentPost";
import FileUploader from "@/components/layouts/partials/FileUploader";

export default {
  name: "ProjectDetails",
  components: {
    Layout,
    PageTitle,
    CommentPost,
    FileUploader
  },
  data() {
    return {
      form_data:null,
      ProjectMembers:null,
      object_id: null,
      content_type_id: null,
      project_id: null,
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
    getProjectDetailsData: function () {
      axios.get(`projects/${this.$route.params.id}/`).then(
        (response) => {
          // console.log("277", response.data);
          this.form_data = response.data;
          this.project_id = response.data.id;
          this.content_type_id = response.data.content_type.id;
          this.object_id = response.data.content_type.object_id;
          this.name = response.data.name;
          this.ProjectMembers = response.data.members.map((element) => element.first_name+' '+ element.last_name )
          .join(", ");

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
    },
    getProjectClients: function () {
      axios
        .get("project_clients")
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
        path: "project-basic-list",
        query: {
          name: this.name,
          project: this.project,
          project_id: this.project_id,
          status: this.status,
          department: this.department,
        },
      });
    },
  },
  created() {
    this.getProjectClients();
    this.getProjectDetailsData();
    this.getStatus();
    this.getDepartment();
  },
 
};
</script>

<style lang="scss" scoped>
</style>