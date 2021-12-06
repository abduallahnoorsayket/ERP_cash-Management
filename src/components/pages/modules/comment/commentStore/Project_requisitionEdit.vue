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

                    <option v-for="(s, i) in projects" :key="i" :value="s.id">
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
                    @change="getTask()"
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
                    v-model="FormData.submitted_for"
                    :class="{ 'parsley-error': errors && errors.submitted_for }"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(m, i) in assignees" :key="i" :value="m.id">
                      {{ m.first_name }} {{ m.last_name }} ({{ m.username }})
                    </option>
                  </select>
                  <ValidationError
                    :error="errors.submitted_for"
                    v-if="errors"
                  />
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
                    v-model="FormData.task"
                    :class="{ 'parsley-error': errors && errors.sprint }"
                  >
                    <option value="false" disabled selected>No Task</option>

                    <option v-for="(p, i) in tasks" :key="i" :value="p.id">
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
                    v-model="FormData.description"
                    :class="{ 'parsley-error': errors && errors.description }"
                  />
                  <ValidationError :error="errors.description" v-if="errors" />
                </div>

                <div class="col-md-12 mb-2">
                  <button
                    type="button"
                    class="btn btn-info mr-3"
                    @click="addNewRow"
                  >
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
                        <tr v-for="(dom_repeat, k) in FormData.detail" :key="k">
                          <td scope="row" class="trashIconContainer">
                            <!-- <button type="button">
                        <i v-if="dom_repeats.length > 1" class="far fa-trash-alt" @click="deleteRow(k, dom_repeat)"></i>
                  </button> -->
                            <button
                              v-if="FormData.detail.length > 1"
                              type="button"
                              class="btn btn-sm btn-primary mr-3"
                              @click="deleteRow(k, dom_repeat)"
                            >
                              <i class="far fa-trash-alt"></i>
                            </button>
                          </td>
                          <td>
                            <select
                              class="form-control text-right"
                              v-model="dom_repeat.item"
                            >
                              <option
                                v-for="(it, i) in items"
                                :key="i"
                                :value="it.id"
                              >
                                {{ it.name }}
                              </option>
                            </select>
                          </td>
                          <td>
                            <select
                              class="form-control text-right"
                              v-model="dom_repeat.unit"
                            >
                              <option
                                v-for="(u, i) in units"
                                :key="i"
                                :value="u.id"
                              >
                                {{ u.name }}
                              </option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="number"
                              min="0"
                              step=".01"
                              class="form-control text-right"
                              v-model="dom_repeat.quantity"
                              @keyup="calculateTotal(dom_repeat)"
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              min="0"
                              step=".01"
                              class="form-control text-right"
                              v-model="dom_repeat.amount"
                              @keyup="calculateTotal(dom_repeat)"
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
                              rows="1"
                              cols="10"
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
                          <td colspan="5" class="text-right">Total</td>
                          <td class="text-right">{{ all_total }}</td>
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
  name: "Project_requisitionEdit",
  components: {
    Layout,
    PageTitle,
    ValidationError,
  },
  data() {
    return {
      FormData: {
        description: null,
        task: null,
        submitted_for: null,
        detail: [
          {
            quantity: null,
            amount: null,
            total: null,
            remarks: null,
            item: null,
            unit: null,
          },
        ],
      },
      projects: [],
      project: null,
      errors: null,
      version: null,
      versions: [],
      sprint: null,
      sprints: [],
      tasks: [],
      assignees: null,
      id: null,
      items: null,
      units: null,
      all_total: 0.0,
    };
  },
  methods: {
    getRequisitiontData: function () {
      axios
        .get(`project_requisition/${this.$route.params.id}/`)
        .then((response) => {
          this.FormData.description = response.data.description;
          this.FormData.status = response.data.status;
          this.FormData.detail = response.data.detail.map((detail) => {
            return {
              id: detail.id,
              quantity: detail.quantity,
              amount: detail.amount,
              total: detail.total,
              remarks: detail.remarks,
              item: detail.item.id,
              unit: detail.unit.id,
            };
          });

          this.project = response.data.task.sprint.version.project.id;
          this.FormData.submitted_for = response.data.submitted_for.id;
          this.version = response.data.task.sprint.version.id;
          this.sprint = response.data.task.sprint.id;
          this.FormData.task = response.data.task.id;
          this.getMember();
          this.getVersion();
          this.getSprint();
          // this.getTask();
          // this.getAllTotal();
        })
        .catch((err) => {
          console.log("error", err);
        });
    },

    getAllData: function () {
      this.getVersion();
      this.getMember();
    },

    getProjectList: function () {
      axios
        .get("project_short/")
        .then((response) => {
          this.projects = response.data;
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
          // let currentVersion = this.versions.filter((version) => {
          //   return version.current;
          // });

          // this.version =
          //   currentVersion.length > 0 ? currentVersion[0].id : null;
          // if (this.version) {
          //   this.getSprint();
          // }
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
          // let currentSprint = this.sprints.filter((sprint) => {
          //   return sprint.current;
          // });

          // this.sprint = currentSprint.length > 0 ? currentSprint[0].id : null;

          this.getTask();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    getTask: function () {
      axios
        .get("task_short?sprint=" + this.sprint)
        .then((response) => {
          this.tasks = response.data.filter((p) => {
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

    getItem: function () {
      axios
        .get("item_short_list")
        .then((response) => {
          this.items = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    getUnit: function () {
      axios
        .get("unit_short_list")
        .then((response) => {
          this.units = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    calculateTotal: function (dom_repeat) {
      var total =
        parseFloat(dom_repeat.quantity) * parseFloat(dom_repeat.amount);
      if (!isNaN(total)) {
        dom_repeat.total = total.toFixed(2);
      }
    },

  

    submitUserForm: function () {
      axios
        .put("project_requisition/" + this.$route.params.id + "/", this.FormData)
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "You have successfully Update a Requisition.",
          }).then(() => {
            this.$router.push({ name: "project_requisitionList" });
          });
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },

    addNewRow: function () {
      this.FormData.detail.push({
        item: null,
        amount: null,
        quantity: null,
        total: null,
        unit: null,
        remarks: null,
      });
    },

    deleteRow: function (index, dom_repeat) {
      var idx = this.FormData.detail.indexOf(dom_repeat);
      console.log(idx, index);
      if (idx > 0) {
        this.FormData.detail.splice(idx, 1);
      }

    },
  },
  created() {
    this.id = this.$route.params.id;
    this.getRequisitiontData();
    this.getProjectList();
    this.getItem();
    this.getUnit();
  },
  watch: {
    "FormData.detail": {
      handler: function () {
        this.all_total = 0.0;
        this.FormData.detail.map((detail) => {
          if (detail.total !== null) {
            this.all_total =
              parseFloat(this.all_total) + parseFloat(detail.total);
            this.all_total = this.all_total.toFixed(2);
          }
        });
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.cus_right {
  float: right;
}
</style>