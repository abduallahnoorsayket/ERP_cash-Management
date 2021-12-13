<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Program details" />
     <div class="row">
        <!-- <div class="col-md-3"></div> -->
        <div class="col-md-10">
          <FileUploader/>

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


export default {
  name: "ProgramDetails",
  components: {
    Layout,
    PageTitle,
    FileUploader
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