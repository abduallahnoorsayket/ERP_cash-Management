<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Version Edit" />
      <div class="card">
        <div class="card-body">
         
  
          <div class="row">
            <div class="col-md-6">
              <form @submit.prevent="submitUserForm" autocomplete="off">
                <div class="form-group">
                  <label>Name <span class="asterisk">*</span></label>
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
                  <label> Start Date</label>
                  <input
                    type="date"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                    v-model="start_date"
                  />
                </div>

                <div class="form-group">
                  <label> Expected Start Date <span class="asterisk">*</span></label>
                  <input
                    type="date"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                    v-model="expected_start_date"
                    :class="{ 'parsley-error': errors && errors.expected_start_date }"
                  />
                  <ValidationError :error="errors.expected_start_date" v-if="errors" />
                </div>

                 <div class="form-group">
                  <div class="form-group">
                    <label>Current</label>
                    <div class="checkbox checkbox-primary">
                      <input id="checkbox2" type="checkbox" unchecked="" v-model="current" value="true"/>
                      <label for="checkbox2">   {{ current == true ? "Yes" : "No" }}  </label>
                    </div>
                  
                  </div>
                </div>

              
              </form>
            </div>
            <!-- end col -->

            <div class="col-md-6">
              <form
                @submit.prevent="submitUserForm"
                autocomplete="off"
                class="mt-4 mt-md-0"
              >
               <div class="form-group">
                  <label>Project <span class="asterisk">*</span></label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="project"
                    :class="{ 'parsley-error': errors && errors.project }"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(s, i) in projectId" :key="i" :value="s.id">
                      {{ s.name }}
                    </option>
                  </select>
                 <ValidationError :error="errors.project" v-if="errors" />
                </div>
              
          

                <div class="form-group">
                  <label>Expected Completed Date <span class="asterisk">*</span></label>
                  <input
                    type="date"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="(00) 00000-0000"
                    v-model="expected_complete_date"
                   :class="{ 'parsley-error': errors && errors.expected_complete_date }"
                  />
                  <ValidationError :error="errors.expected_complete_date" v-if="errors" />
                </div>
                <div class="form-group">
                  <label>Complete Date</label>
                  <input
                    type="date"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="000.000.000-00"
                    data-reverse="true"
                    v-model="complete_date"
                   :class="{ 'parsley-error': errors && errors.complete_date }"
                  />

                 <ValidationError :error="errors.complete_date" v-if="errors" />
                 
                </div>
                <div class="form-group">
                  <label>Status <span class="asterisk">*</span></label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="status"
                    :class="{ 'parsley-error': errors && errors.status }"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(s,i) in statusData" :key="i" :value="s.key" >
                      {{ s.value }} 
                    </option>
                  </select>
                   <ValidationError :error="errors.status" v-if="errors" />
                </div>
              </form>
            </div>
            <!-- end col -->

            <div class="col-md-12">
              <form
                @submit.prevent="submitUserForm"
                autocomplete="off"
                class="mt-4 mt-md-0"
              >
                <div class="form-group">
                  <label>Description </label>
                  <textarea
                    type="textarea"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="000.000.000-00"
                    data-reverse="true"
                    v-model="description"
                  />
                  
                </div>

                <div class="form-group">
                  <button
                    @submit.prevent="submitUserForm"
                    type="submit"
                    class="btn btn-primary waves-effect waves-light cus_right"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
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
import longDateToStandard from "@/Helper";
import Swal from "sweetalert2";
import ValidationError from "@/components/layouts/partials/ValidationError.vue"

export default {
  name: "VersionEdit",
  components: {
    Layout,
    PageTitle,
    ValidationError
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
      current: false,
      statusData: null,
      projectId: null,
    };
  },
  methods: {
    getProjectEditData: function () {
      axios.get(`versions/${this.$route.params.id}/`).then(
        (response) => {
          console.log("277", response.data);
          this.name = response.data.name;
          this.project = response.data.project.id;
          this.start_date = longDateToStandard(response.data.start_date);
          this.expected_start_date = longDateToStandard(
            response.data.expected_start_date
          );
          this.expected_complete_date = longDateToStandard(
            response.data.expected_complete_date
          );
          this.complete_date = longDateToStandard(response.data.complete_date);
          this.assign_date = longDateToStandard(response.data.assign_date);
          this.start_date = longDateToStandard(response.data.start_date);
          this.status = response.data.status;
          this.current = response.data.current;
          this.description = response.data.description;
        }
      ).catch((err) => {
        console.log("error", err)
      })
    },
      getProjectList: function () {
      // const token = "ef24d61024d188c96cbbf9d103f8ea70cbaa63ed"
      axios
        .get("project_short/")
        .then((response) => {
          this.projectId = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  
    submitUserForm: function () {
      axios
        .put("versions/" + this.$route.params.id + "/", {
          name: this.name,
          project: this.project,
          start_date: this.start_date,
          expected_start_date: this.expected_start_date,
          expected_complete_date: this.expected_complete_date,
          status: this.status,
          complete_date: this.complete_date,
          description: this.description,
          current: this.current,
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "You have successfully Updated a version.",
          }).then((result) => {
            this.$router.push("/version-list");
            console.log(result);
          });
          
        })

        .catch((error) => {
          console.log("239", error.response.data);
          this.errors = error.response.data;
        });
    },
   
    getStatus: function () {
      axios
        .get("project_status")
        .then((response) => {
          console.log("300", response.data);
          this.statusData = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getProjectEditData();
    this.getProjectList();
    this.getStatus();
  },
};
</script>

<style scoped>
.cus_right {
  float: right;
}
</style>