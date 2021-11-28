<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Sprint Create" />
      <div class="card">
        <div class="card-body">
          <SuccessMsg :msg="msg" v-if="msg" />
          <form @submit.prevent="submitUserForm" autocomplete="off">
            <div class="row">
              <div class="col-md-6">
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
                    :class="{
                      'parsley-error': errors && errors.expected_start_date,
                    }"
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
                    :class="{
                      'parsley-error': errors && errors.expected_complete_date,
                    }"
                  />
                  <ValidationError :error="errors.expected_complete_date" v-if="errors" />
                </div>

                <div class="form-group">
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
              </div>
              <!-- end col -->

              <div class="col-md-6">
                <div class="form-group">
                  <label>Project </label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="project"
                    :class="{ 'parsley-error': errors && errors.project }"
                    @change="getVersion()"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(s, i) in projectId" :key="i" :value="s.id">
                      {{ s.name }}
                    </option>
                  </select>
                 <ValidationError :error="errors.project" v-if="errors" />
                </div>

                <div class="form-group">
                  <label>Version <span class="asterisk">*</span></label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="version"
                    :class="{ 'parsley-error': errors && errors.status }"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(v, i) in versions" :key="i" :value="v.id">
                      {{ v.name }}
                    </option>
                  </select>
                  <ValidationError :error="errors.status" v-if="errors" />
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

               
          <label>Estimated Duration <span class="asterisk">*</span></label> 
                <div class="row form-group">
                 
                  
                <div class="clear-fix"></div>
                
                  <div class="col-sm-3">
                    <input
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="days"
                      v-model="da"
                      @change="setDuration()"
                       :class="{ 'parsley-error': errors && errors.estimated_duration }"
                    />
                  </div>
                  <div class="col-sm-3">
                    <input
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="hours"
                      v-model="hrs"
                      @change="setDuration()"
                       :class="{ 'parsley-error': errors && errors.estimated_duration }"
                    />
                  </div>
                  <div class="col-sm-3">
                    <input
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="minutes"
                      v-model="mins"
                      @change="setDuration()"
                       :class="{ 'parsley-error': errors && errors.estimated_duration }"
                    />
                  </div>

                  <ValidationError :error="errors.estimated_duration" v-if="errors" />
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

                    <option
                      v-for="(s, i) in statusData"
                      :key="i"
                      :value="s.key"
                    >
                      {{ s.value }}
                    </option>
                  </select>
                 <ValidationError :error="errors.status" v-if="errors" />
                </div>
              </div>
              <!-- end col -->

              <div class="col-md-12">
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
  name: "SprintCreate",
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
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "You have successfully created a Sprint.",
          }).then(() => {
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