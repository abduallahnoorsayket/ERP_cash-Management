<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Project Requisition Details" />

      <div class="row"></div>
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
                      <th scope="row">Project</th>
                      <td>
                        <span
                          v-if="
                            form_data.task &&
                            form_data.task.sprint &&
                            form_data.task.sprint.version.project
                          "
                        >
                          {{ form_data.task.sprint.version.project.name }}</span
                        >
                      </td>
                      <th scope="row">Project ID</th>
                      <td>
                        <span
                          v-if="
                            form_data.task &&
                            form_data.task.sprint &&
                            form_data.task.sprint.version.project
                          "
                        >
                          {{
                            form_data.task.sprint.version.project.projectId
                          }}</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Version</th>
                      <td>
                        <span
                          v-if="
                            form_data.task &&
                            form_data.task.sprint &&
                            form_data.task.sprint.version
                          "
                        >
                          {{ form_data.task.sprint.version.name }}</span
                        >
                      </td>
                      <th scope="row">Version ID</th>
                      <td>
                        <span
                          v-if="
                            form_data.task &&
                            form_data.task.sprint &&
                            form_data.task.sprint.version
                          "
                        >
                          {{ form_data.task.sprint.version.versionId }}</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Sprint</th>
                      <td>
                        <span
                          v-if="
                            form_data.task &&
                            form_data.task.sprint &&
                            form_data.task.sprint
                          "
                        >
                          {{ form_data.task.sprint.name }}</span
                        >
                      </td>
                      <th scope="row">Sprint ID</th>
                      <td>
                        <span
                          v-if="
                            form_data.task &&
                            form_data.task.sprint &&
                            form_data.task.sprint
                          "
                        >
                          {{ form_data.task.sprint.sprintId }}</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Task</th>
                      <td>
                        <span
                          v-if="
                            form_data.task &&
                            form_data.task.sprint &&
                            form_data.task
                          "
                        >
                          <!-- {{ form_data.task.name }} -->
                          &nbsp;
                          </span
                        >
                      </td>
                      <th scope="row">Task ID</th>
                      <td>
                        <span
                          v-if="
                            form_data.task &&
                            form_data.task.sprint &&
                            form_data.task
                          "
                        >
                          {{ form_data.task.taskId }}</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Created by</th>
                      <td>
                        <span v-if="form_data.created_by">
                          {{
                            form_data.created_by.first_name +
                            " " +
                            form_data.created_by.last_name
                          }}</span
                        >
                      </td>
                      <th scope="row">Submitted for</th>
                      <td>
                        <span v-if="form_data.submitted_for">
                          {{
                            form_data.submitted_for.first_name +
                            " " +
                            form_data.submitted_for.last_name
                          }}</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Status update by</th>
                      <td>
                        <span v-if="form_data.status_update_by">
                          {{
                            form_data.status_update_by.first_name +
                            " " +
                            form_data.status_update_by.last_name
                          }}</span
                        >
                      </td>
                      <th scope="row">Requisition count</th>
                      <td>
                        <span v-if="form_data.requisition_count">
                          {{ form_data.requisition_count }}</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Requisition sum</th>
                      <td>
                        <span v-if="form_data.requisition_sum">
                          {{ form_data.requisition_sum }}</span
                        >
                      </td>
                      <th scope="row">Requisition count pending</th>
                      <td>
                        <span> {{ form_data.requisition_count_pending }}</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Requisition count rejected</th>
                      <td>
                        <span> {{ form_data.requisition_count_rejected }}</span>
                      </td>
                      <th scope="row">Requisition count approved</th>
                      <td>
                        <span> {{ form_data.requisition_count_approved }}</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Requisition count verified</th>
                      <td>
                        <span> {{ form_data.requisition_count_verified }}</span>
                      </td>
                      <th scope="row">Status updated at</th>
                      <td>
                        <span> {{ form_data.status_updated_at }}</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Submitted date</th>
                      <td>
                        <span> {{ form_data.submitted_date }}</span>
                      </td>
                      <th scope="row">Created at</th>
                      <td>
                        <span> {{ form_data.created_at }}</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Updated at</th>
                      <td>
                        <span> {{ form_data.updated_at }}</span>
                      </td>
                      <th scope="row">Submitted date</th>
                      <td>
                        <span> {{ form_data.submitted_date }}</span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colspan="4"
                        class="text-center detailColor"
                      >
                        Details
                      </th>
                    </tr>
                    <tr>
                      <th scope="row" class="text-center">Item</th>
                      <th scope="row" class="text-center">Unit</th>
                      <th scope="row" class="text-center">
                        Quantity <span>(x)</span> Unit price
                      </th>
                      <th scope="row" class="text-center">Total</th>
                    </tr>
                    <tr
                      v-for="(detail, index) in form_data.detail"
                      :key="index"
                    >
                      <td class="text-center">{{ detail.item.name }}</td>
                      <td class="text-center">{{ detail.unit.name }}</td>
                      <td class="text-center">
                        {{ detail.quantity }} x {{ detail.amount }}
                      </td>
                      <td class="text-center">{{ detail.total }}</td>
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
                            v-if="requisition_id"
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
                          v-if="requisition_id"
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

      <br /><br />
      <div class="row">
        <!-- <div class="col-md-3"></div> -->
        <div class="col-md-12"></div>
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
  name: "Project_requisitionDetails",
  components: {
    Layout,
    PageTitle,
    CommentPost,
    FileUploader,
  },
  data() {
    return {
      requisition_details: [],
      form_data: null,
      ProjectMembers: null,
      object_id: null,
      content_type_id: null,
      requisition_id: null,
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
      axios
        .get(`project_requisition/${this.$route.params.id}/`)
        .then((response) => {
          // console.log("277", response.data);
          this.form_data = response.data;
          this.requisition_id = response.data.id;
          this.requisition_details = response.data.detail;
          this.content_type_id = response.data.content_type.id;
          this.object_id = response.data.content_type.object_id;
          this.name = response.data.name;
          this.ProjectMembers = response.data.members
            .map((element) => element.first_name + " " + element.last_name)
            .join(", ");
        })
        .catch((err) => {
          console.log("error", err);
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

<style  scoped>
.detailColor {
  color: #797979;
  background-color: rgba(0, 0, 0, 0.075);
}
</style>
