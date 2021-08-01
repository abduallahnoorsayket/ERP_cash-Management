<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Project Requisition Create" />
      <div class="card">
        <div class="card-body">
          <form @submit.prevent="submitUserForm" autocomplete="off">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Project</label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="project"
                    :class="{ 'parsley-error': errors && errors.project }"
                    @change="getAllData()"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(s, i) in projectId" :key="i" :value="s.id">
                      {{ s.name }}
                    </option>
                  </select>
                  <ValidationError :error="errors.status" v-if="errors" />
                </div>

                <div class="form-group">
                  <label>Sprint</label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="sprint"
                    :class="{ 'parsley-error': errors && errors.sprint }"
                    @change="getParents()"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(v, i) in sprints" :key="i" :value="v.id">
                      {{ v.name }}
                    </option>
                  </select>
                  <ValidationError :error="errors.sprint" v-if="errors" />
                </div>

                <div class="form-group">
                  <label>Submitted For</label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="assignee"
                    :class="{ 'parsley-error': errors && errors.assignee }"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(m, i) in assignees" :key="i" :value="m.key">
                      {{ m.first_name }} {{ m.last_name }} ({{ m.username }})
                    </option>
                  </select>
                  <ValidationError :error="errors.assignee" v-if="errors" />
                </div>
              </div>
              <!-- end col -->

              <div class="col-md-6">
                <div class="form-group">
                  <label>Version</label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="version"
                    :class="{ 'parsley-error': errors && errors.status }"
                    @change="getSprint()"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(v, i) in versions" :key="i" :value="v.id">
                      {{ v.name }}
                    </option>
                  </select>
                  <ValidationError :error="errors.status" v-if="errors" />
                </div>

                <div class="form-group">
                  <label>Task</label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="parent"
                    :class="{ 'parsley-error': errors && errors.sprint }"
                  >
                    <option value="false" disabled selected>No Parent</option>

                    <option v-for="(p, i) in parents" :key="i" :value="p.id">
                      {{ p.name }} - ({{ p.taskId }})
                    </option>
                  </select>
                  <ValidationError :error="errors.parent" v-if="errors" />
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

                <div class="col-md-12 mb-2">
                  <button type="button" class="btn btn-info mr-3" @click="addNewRow">
                    <i class="fas fa-plus-circle"></i>
                  </button>
                </div>

                <div class="col-md-12">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Item</th>
                          <th scope="col">Unit</th>
                          <th scope="col text-right">Quantity</th>
                          <th scope="col text-right">Amount</th>
                          <th scope="col text-right">Total</th>
                          <th scope="col text-right">Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(dom_repeat, k) in dom_repeats" :key="k">
                          <td scope="row" class="trashIconContainer">
                            <!-- <button type="button">
                        <i v-if="dom_repeats.length > 1" class="far fa-trash-alt" @click="deleteRow(k, dom_repeat)"></i>
                  </button> -->
                  <button v-if="dom_repeats.length > 1" type="button" class="btn btn-sm btn-primary mr-3" @click="deleteRow(k, dom_repeat)">
                    <i class="far fa-trash-alt"></i>
                  </button>
                           
                          </td>
                          <td>
                            <select
                              class="form-control text-right"
                              v-model="dom_repeat.item"
                            >
                              <option value="one">Select one one</option>
                              <option value="two">Select two one</option>
                            </select>
                          </td>
                          <td>
                            <select
                              class="form-control text-right"
                              v-model="dom_repeat.unit"
                            >
                              <option>Select one one</option>
                              <option>Select two one</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="number"
                              min="0"
                              step=".01"
                              class="form-control text-right"
                              v-model="dom_repeat.quantity"
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              min="0"
                              step=".01"
                              class="form-control text-right"
                              v-model="dom_repeat.amount"
                            />
                          </td>
                          <td>
                            <input
                              readonly="readonly"
                              type="number"
                              min="0"
                              step=".01"
                              class="form-control text-right"
                              v-model="dom_repeat.total"
                            />
                          </td>
                          <td>
                            <textarea
                              type="text"
                              min="0"
                              step=".01"
                              class="form-control text-right"
                              v-model="dom_repeat.remarks"
                            />
                          </td>
                        </tr>

                      </tbody>
                      <tfoot>
                        <tr>
                          <td colspan="6" class="text-right">Total</td>
                          <td class="text-right">105.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
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
  name: "project_requisitionCreate",
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
      status: null,
      errors: null,
      statusData: null,
      projectId: null,
      version: null,
      versions: null,
      sprint: null,
      sprints: null,
      assignee: [],
      assignees: null,
      parent: null,
      parents: null,
      id: null,
      dom_repeats: [
        {
          item: "",
          amount: "",
          quantity: "",
          total: "",
          unit: 0,
          remarks: "",
        },
      ],
    };
  },
  methods: {
    getAllData: function () {
      this.getVersion();
      this.getMember();
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
          if (this.version) {
            this.getSprint();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getSprint: function () {
      axios
        .get("sprint_short?version=" + this.version)
        .then((response) => {
          this.sprints = response.data;
          let currentSprint = this.sprints.filter((sprint) => {
            return sprint.current;
          });

          this.sprint = currentSprint.length > 0 ? currentSprint[0].id : null;

          this.getParents();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    getParents: function () {
      axios
        .get("task_short?sprint=" + this.sprint)
        .then((response) => {
          this.parents = response.data.filter((p) => {
            return p.id !== parseInt(this.id);
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    getMember: function () {
      axios
        .get("project_member?project=" + this.project)
        .then((response) => {
          this.assignees = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    submitUserForm: function () {
      axios
        .post("tasks/", {
          name: this.name,
          expected_start_date: this.expected_start_date,
          expected_complete_date: this.expected_complete_date,
          start_date: this.start_date,
          status: this.status,
          complete_date: this.complete_date,
          description: this.description,
          version: this.version,
          estimated_duration: this.estimated_duration,
          assignee: this.assignee,
          sprint: this.sprint,
          progress: this.progress,
          parent: this.parent,
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "You have successfully created a task.",
          }).then(() => {
            this.$router.push("task-list");
          });
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },

    addNewRow: function() {
      this.dom_repeats.push({
        item: "",
        amount: "",
        quantity: "",
        total: "",
        unit: 0,
        remarks: "",
      });
    },

    deleteRow: function(index, dom_repeat) {
            var idx = this.dom_repeats.indexOf(dom_repeat);
            console.log(idx, index);
            if (idx > 0) {
               this.dom_repeats.splice(idx, 1);
            }
            
        }
  },
  created() {
    this.id = this.$route.params.id;
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