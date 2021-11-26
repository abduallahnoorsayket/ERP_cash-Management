<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Program Create" />
      <div class="card">
        <div class="card-body">
          <form @submit.prevent="submitUserForm" autocomplete="off">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Name <span class="asterisk">*</span></label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="name"
                    :class="{ 'parsley-error': errors && errors.name }"
                  />
                  <ValidationError :error="errors.name" v-if="errors" />
                </div>

                <div class="form-group">
                  <label>Department <span class="asterisk">*</span></label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="department"
                    :class="{ 'parsley-error': errors && errors.department }"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="d in departments" :key="d.id" :value="d.id">
                      {{ d.name }}
                    </option>
                  </select>
                  <ValidationError :error="errors.department" v-if="errors" />
                </div>
              </div>
              <!-- end col -->

              <div class="col-md-6">
                <div class="form-group">
                  <label>Program Id <span class="asterisk">*</span></label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="programId"
                    :class="{ 'parsley-error': errors && errors.programId }"
                  />
                  <ValidationError :error="errors.programId" v-if="errors" />
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
import ValidationError from "@/components/layouts/partials/ValidationError.vue";

export default {
  name: "ProjectCreate",
  components: {
    Layout,
    PageTitle,
    ValidationError,
  },
  data() {
    return {
      name: null,
      programId: null,
      departments: null,
      status: null,
      department: null,
      errors: null,
      statusData: null,
      description: null,
    };
  },
  methods: {
    getDepartment: function () {
      axios
        .get("project_department")
        .then((response) => {
          // console.log("203", response.data);
          this.departments = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  
    getStatus: function () {
      axios
        .get("project_status")
        .then((response) => {
          // console.log("300", response.data);
          this.statusData = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    submitUserForm: function () {
      axios
        .post("program/", {
          department: this.department,
          name: this.name,
          programId: this.programId,
          status: this.status,
          description: this.description,
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "You have successfully created a program.",
          }).then((result) => {
            this.$router.push("program-list");
            console.log(result);
          });
        })

        .catch((error) => {
          // console.log("239", error.response.data);
          this.errors = error.response.data;
        });
    },
  
  },
  created() {
    this.getDepartment();
    this.getStatus();
  },
};
</script>

<style scoped>
.cus_right {
  float: right;
}
</style>