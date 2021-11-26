<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Project Create" />
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
                  <label>Program <span class="asterisk">*</span></label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="program"
                     :class="{ 'parsley-error': errors && errors.program }"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="d in programs" :key="d.id" :value="d.id">
                      {{ d.name }}
                    </option>
                  </select>
                  <ValidationError :error="errors.program" v-if="errors" />
                </div>

                <div class="form-group">
                  <label>Assign Date <span class="asterisk">*</span></label>
                  <input
                    type="date"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                    v-model="assign_date"
                   :class="{ 'parsley-error': errors && errors.assign_date }"
                  />
                  <ValidationError :error="errors.assign_date" v-if="errors" />
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

                <div class="form-group" >
                  <div class="form-group" >
                    <label>Members <span class="asterisk">*</span></label>
                    <div class=" checkbox-primary" v-for="m in members" :key="m.id">
                      <input
                       :id="m.id"
                        type="checkbox"
                        name="member[]"
                        unchecked=""
                        v-model="member"
                       :value="m.id"
                        :class="{ 'parsley-error': errors && errors.members }"
                      
                      />
                      
                      <label for="checkbox2"> {{ m.first_name }} {{m.last_name}} ({{m.username}})</label>
                      
                    </div>
                    <ValidationError :error="errors.members" v-if="errors" />
                  
                     
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
                  <label>Project Id <span class="asterisk">*</span></label>
                  <input
                    type="text"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00:00:00"
                    v-model="projectId"
                   :class="{ 'parsley-error': errors && errors.projectId }"
                  />
                   <ValidationError :error="errors.projectId" v-if="errors" />
                </div>
                <div class="form-group">
                  <label>Client <span class="asterisk">*</span></label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="client"
                    :class="{ 'parsley-error': errors && errors.client }"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="c in clients" :key="c.id" :value="c.id">
                      {{ c.name }}
                    </option>
                  </select>
                    <ValidationError :error="errors.client" v-if="errors" />
                </div>
                <div class="form-group">
                  <label>Expected Start Date <span class="asterisk">*</span></label>
                  <input
                    type="date"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="0000-0000"
                    v-model="expected_start_date"
                   :class="{ 'parsley-error': errors && errors.expected_start_date }"
                  />
                 <ValidationError :error="errors.expected_start_date" v-if="errors" />
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
                   :class="{ 'parsley-error': errors && errors.description }"
                  />
                 <ValidationError :error="errors.description" v-if="errors" />
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
import Swal from "sweetalert2";
import ValidationError from "@/components/layouts/partials/ValidationError.vue"

export default {
  name: "ProjectCreate",
  components: {
    Layout,
    PageTitle,
    ValidationError
  },
  data() {
    return {
      name: null,
      projectId: null,
      clients: null,
      programs: null,
      description: null,
      assign_date: null,
      expected_start_date: null,
      start_date: null,
      expected_complete_date: null,
      complete_date: null,
      status: null,
      program: null,
      client: null,
      member: [],
      errors: null,
      members: null,
      msg: null,
      statusData: null,
    };
  },
  methods: {
    getProgramShortList: function () {
      axios
        .get("programme-short-list/")
        .then((response) => {
          // console.log("203", response.data);
          this.programs = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getClients: function () {
      axios
        .get("project_clients")
        .then((response) => {
         
          this.clients = response.data;
        })
        .catch(function (error) {
          console.log(error);
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

    submitUserForm: function () {
      axios
        .post("projects/", {
          program: this.program,
          client: this.client,
          name: this.name,
          projectId: this.projectId,
          assign_date: this.assign_date,
          expected_start_date: this.expected_start_date,
          expected_complete_date: this.expected_complete_date,
          start_date: this.start_date,
          status: this.status,
          complete_date: this.complete_date,
          description: this.description,
          members: this.member,
        }).then(() => {
          Swal.fire({
            icon: "success",
            text: "You have successfully created a project.",
          }).then((result) => {
            this.$router.push("project-basic-list");
            console.log(result);
          });
          
        })

        .catch((error) => {
          // console.log("239", error.response.data);
          this.errors = error.response.data;
        });
    },
    getMembers: function () {
      axios
        .get("project_member")
        .then((response) => {
          // console.log("252", response.data);
          this.members = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getProgramShortList();
    this.getClients();
    this.getMembers();
    this.getStatus();
    
  },
};
</script>

<style scoped>
.cus_right {
  float: right;
}
</style>