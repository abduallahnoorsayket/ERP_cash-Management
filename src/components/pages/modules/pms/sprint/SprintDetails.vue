<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Sprint Details" />

      <div class="row">
       <h1>{{name}}</h1>
      </div>
      <CommentPost 
      v-if="project_id" 
      :content_type_id="content_type_id" 
      :object_id="object_id"
      />
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

export default {
  name: "SprintDetails",
  components: {
    Layout,
    PageTitle,
    CommentPost
  },
  data() {
    return {
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
      axios.get(`sprints/${this.$route.params.id}/`).then(
        (response) => {
          // console.log("277", response.data);
          this.project_id = response.data.id;
          this.content_type_id = response.data.content_type.id;
          this.object_id = response.data.content_type.object_id;
          this.name = response.data.name;

        }
      ).catch((err) => {
        console.log("error", err)
      })
    },
    // async CommentLoad() {
    //   this.project_id = null;
    //   await this.getProjectDetailsData();
    // },

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