<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Version Create" />
      <div class="card">
        <div class="card-body">
         
          <SuccessMsg :msg="msg" v-if="msg"/>
          <div class="row">
            <div class="col-md-6">
              <form @submit.prevent="submitUserForm" autocomplete="off">
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                    v-model="name"
                    :class="{ 'parsley-error': errors && errors.name }"
                  />
                  <ul class="parsley-errors-list filled" id="parsley-id-5" v-if="errors && errors.name">
                    <li class="parsley-required">{{ errors.name[0] }}.</li>
                  </ul>
                </div>

              <div class="form-group">
                  <div class="form-group">
                    <label>Current</label>
                    <div class="checkbox checkbox-primary">
                      <input id="checkbox2" type="checkbox" unchecked="" v-model="current" value="true"/>
                      <label for="checkbox2"> {{current}} </label>
                    </div>
                  
                  </div>
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
                  <label> Expected Start Date</label>
                  <input
                    type="date"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                    v-model="expected_start_date"
                    :class="{ 'parsley-error': errors && errors.expected_start_date }"
                  />
                  <ul class="parsley-errors-list filled" id="parsley-id-5" v-if="errors && errors.expected_start_date">
                    <li class="parsley-required">{{ errors.expected_start_date[0] }}.</li>
                  </ul>
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
                  <label>Project</label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="project"
                    :class="{ 'parsley-error': errors && errors.status }"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(s, i) in projectId" :key="i" :value="s.id">
                      {{ s.name }}
                    </option>
                  </select>
                  <ul
                    class="parsley-errors-list filled"
                    id="parsley-id-5"
                    v-if="errors && errors.project"
                  >
                    <li class="parsley-required">{{ errors.project[0] }}.</li>
                  </ul>
                </div>
              
          

                <div class="form-group">
                  <label>Expected Completed Date</label>
                  <input
                    type="date"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="(00) 00000-0000"
                    v-model="expected_complete_date"
                   :class="{ 'parsley-error': errors && errors.expected_complete_date }"
                  />
                  <ul class="parsley-errors-list filled" id="parsley-id-5" v-if="errors && errors.expected_complete_date">
                    <li class="parsley-required">{{ errors.expected_complete_date[0] }}.</li>
                  </ul>
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
                  <ul class="parsley-errors-list filled" id="parsley-id-5" v-if="errors && errors.complete_date">
                    <li class="parsley-required">{{ errors.complete_date[0] }}.</li>
                  </ul>
                </div>
                <div class="form-group">
                  <label>Status</label>
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
                  <ul class="parsley-errors-list filled" id="parsley-id-5" v-if="errors && errors.status">
                    <li class="parsley-required">{{ errors.status[0] }}.</li>
                  </ul>
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
import SuccessMsg from "@/components/layouts/partials/SuccessMsg";
import longDateToStandard from "@/Helper";
import Swal from "sweetalert2";

export default {
  name: "SprintEdit",
  components: {
    Layout,
    PageTitle,
    SuccessMsg,
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
      current: null,
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
        .get("projects/")
        .then((response) => {
          this.projectId = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  
    submitUserForm: function () {
      axios
        .post("versions/", {
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
        .then((response) => {
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