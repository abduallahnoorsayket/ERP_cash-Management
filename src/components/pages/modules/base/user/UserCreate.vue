<template>
  <Layout>
    <template v-slot:module_content>

      <PageTitle title="User Create" />

      <div class="card">
        <div class="card-body">
   
          <form @submit.prevent="submitUserForm" autocomplete="off">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                    v-model="name"
                    :class="{ 'parsley-error': errors && errors.name }"
                  />
                   <ValidationError :error="errors.name" v-if="errors" />
                </div>

                <div class="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="name"
                    :class="{ 'parsley-error': errors && errors.name }"
                  />
                   <ValidationError :error="errors.name" v-if="errors" />
                </div>

                <div class="form-group">
                  <label>Password </label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="name"
                    :class="{ 'parsley-error': errors && errors.name }"
                  />
                   <ValidationError :error="errors.name" v-if="errors" />
                </div>

                
                  <div class="form-group" >
                    <label>User Permissions</label>
                    <div class="checkbox checkbox-primary">
                      <input
                        id="checkbox"
                        type="checkbox"
                        unchecked=""
                        v-model="member"
                      />
                      <label for="checkbox">Permission one </label>
                    </div>
                  </div>
            

               
                  <div class="form-group">
                    <label>Current</label>
                    <div class="checkbox checkbox-primary">
                      <input
                        id="checkbox2"
                        type="checkbox"
                        unchecked=""
                        v-model="current"
                        value="true"
                      />
                      <label for="checkbox2">
                        {{ current == true ? "Yes" : "No" }}
                      </label>
                    </div>
                  </div>
                
              </div>
              <!-- end col -->

              <div class="col-md-6">


                <div class="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                    v-model="name"
                    :class="{ 'parsley-error': errors && errors.name }"
                  />
                   <ValidationError :error="errors.name" v-if="errors" />
                </div>

                 <div class="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                    v-model="name"
                    :class="{ 'parsley-error': errors && errors.name }"
                  />
                   <ValidationError :error="errors.name" v-if="errors" />
                </div>


                <div class="form-group" >
                    <label>User Groups</label>
                    <div class="checkbox checkbox-primary">
                      <input
                        id="checkbox"
                        type="checkbox"
                        unchecked=""
                       
                      />
                      <label for="checkbox3">User Group </label>
                    </div>
                  </div>

              <div class="form-group" >
                    <label>Active </label>
                    <div class="checkbox checkbox-primary">
                      <input
                        id="checkbox1"
                        type="checkbox"
                        unchecked=""
                       
                      />
                      <label for="checkbox">{{ current == true ? "Yes" : "No" }} </label>
                    </div>
                  </div>
                
              </div>
              <!-- end col -->

              <div class="col-md-12">
               

                <div class="form-group">
                  <button
                    @submit.prevent="submitUserForm"
                    type="submit"
                    class="btn btn-primary waves-effect waves-light cus_right"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          <!-- end row -->
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
import ValidationError from "@/components/layouts/partials/ValidationError.vue"

export default {
  name: "UserCreate",
  components: {
    Layout,
    PageTitle,
    ValidationError,
  },
  data() {
    return {
      name: null,
      project: null,
      description: null,
      expected_start_date: null,
      start_date: null,
      expected_complete_date: null,
      complete_date: null,
      status: null,
      errors: null,
      msg: null,
      statusData: null,
      current: false,
      projectId: null,
      version: null,
      versions: null,
      estimated_duration: null,
      da: null,
      hrs: null,
      mins: null,
    };
  },
  methods: {
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
    getVersion: function () {
      axios
        .get("version_short?project=" + this.project)
        .then((response) => {
          this.versions = response.data;
          let currentVersion = this.versions.filter((version) => {
            return version.current;
          });

          this.version =
            currentVersion.length > 0 ? currentVersion[0].id : null;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    submitUserForm: function () {
      axios
        .post("sprints/", {
          name: this.name,
          expected_start_date: this.expected_start_date,
          expected_complete_date: this.expected_complete_date,
          start_date: this.start_date,
          status: this.status,
          complete_date: this.complete_date,
          description: this.description,
          current: this.current,
          version: this.version,
          estimated_duration: this.estimated_duration,
        })
        .then((response) => {
          Swal.fire({
            icon: "success",
            text: "You have successfully created a Sprint.",
          }).then((result) => {
            this.$router.push("sprint-list");
          });
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
    setDuration : function () {
      this.estimated_duration =  this.da +' '+ this.hrs +':'+ this.mins
    }
  },
  created() {
    this.getStatus();
    this.getProjectList();
  },
};
</script>

<style scoped>
.cus_right {
  float: right;
}
</style>