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
                    v-model="submitted_for"
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
                    v-model="parent"
                    @change="hasTargetChange($event)"
                    :class="{ 'parsley-error': errors && errors.task }"
                  >
                    <option value="false" disabled selected>No Parent</option>

                    <option v-for="(p, i) in parents" :key="i" :value="p.id" :data-hastarget="p.has_target">
                      {{ p.name }} - ({{ p.taskId }})
                    </option>
                  </select>
                  <ValidationError :error="errors.task" v-if="errors" />
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
                    :class="{ 'parsley-error': errors && errors.description }"
                  />
                  <ValidationError :error="errors.description" v-if="errors" />
                </div>

                <div class="col-md-12 mb-2">
                  <button
                    type="button"
                    class="btn btn-info mr-3"
                    @click="addNewRow"
                    v-if="!has_target"
                  >
                    <i class="fas fa-plus-circle"></i>
                  </button>
                </div>
               
                <div class="col-md-12 mb-3" v-if="errors && errors.detail">
                  <div class="alert alert-warning">
                    <strong>Warning!</strong> Better check yourself, Please
                    insert all data.
                  </div>
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
                            <button
                              v-if="dom_repeats.length > 1"
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
                              :max="dom_repeat.target_quantity - dom_repeat.acquired_quantity"
                              step=".01"
                              class="form-control text-right"
                              v-model="dom_repeat.quantity"
                              @change="calculateTotal(dom_repeat)"
                            />
                              <ul class="parsley-errors-list filled" v-if="has_target">
           <li class="parsley-required">Target {{dom_repeat.target_quantity}}, Acquired  {{dom_repeat.acquired_quantity}}</li>
                           </ul>
                          </td>
                          <td>
                            <input
                              type="number"
                              min="0"
                              step=".01"
                              class="form-control text-right"
                              v-model="dom_repeat.amount"
                              @change="calculateTotal(dom_repeat)"
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
                          <td colspan="5" class="text-right">Total</td>
                          <td class="text-right">{{ all_total }}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                            <SingleFileUploader
                          :content_type_id="content_type_id"
                          :object_id="object_id"
                        />
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
import SingleFileUploader from "@/components/layouts/partials/SingleFileUploader";

export default {
  name: "project_requisitionCreate",
  components: {
    Layout,
    PageTitle,
    ValidationError,
    SingleFileUploader
  },
  data() {
    return {
      name: null,
      project: null,
      description: null,
      errors: null,
      projectId: null,
      version: null,
      versions: null,
      sprint: null,
      sprints: null,
      submitted_for: null,
      assignees: null,
      parent: null,
      parents: null,
      id: null,
      items: null,
      units: null,
      all_total: 0.0,
      has_target: null,
      object_id: null,
      content_type_id: null,
      requisition_id: null,
      dom_repeats: [
        {
          item: null,
          amount: null,
          quantity: null,
          total: null,
          unit: null,
          remarks: null,
        },
      ],
    };
  },
  methods: {
    getAllData: function () {
      this.version = null;
      this.sprint = null;
      this.parent = null;
      this.getVersion();
      this.getMember();
     
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

          if(this.sprint) {
            this.getParents();
          }
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

    hasTargetChange: function(event) {
      // console.log('419',typeof(JSON.parse(event.target.selectedOptions[0].dataset.hastarget)));
       this.has_target = JSON.parse(event.target.selectedOptions[0].dataset.hastarget)
        console.log('422 has_target ', this.has_target )
      if(this.has_target) {
         let id = this.parent;
         console.log('id 425', id)
          this.dom_repeats = []
       axios
        .get(`task_target/${id}`)
        .then((response) => {
            response.data.target.map((target) => {
            this.dom_repeats.push({
                  item: target.item.id,
                  unit: target.unit.id,
                  quantity: null,
                  target_quantity: target.quantity,
                  acquired_quantity: target.acquired_quantity,
                  amount: null,
                  total: null,
                  remarks: null,
             });
           });
        })
        .catch(function (error) {
          console.log(error);
        })
      }else {
         this.dom_repeats = [
        {
          item: null,
          amount: null,
          quantity: null,
          total: null,
          unit: null,
          remarks: null,
        },
      ]
      }
     
    },

    calculateTotal: function (dom_repeat) {
      var total =
        parseFloat(dom_repeat.quantity) * parseFloat(dom_repeat.amount);
      if (!isNaN(total)) {
        dom_repeat.total = total.toFixed(2);
      }
      this.getAllTotal();
    },

    getAllTotal: function () {
      var subtotal, total;
      subtotal = this.dom_repeats.reduce(function (sum, product) {
        var lineTotal = parseFloat(product.total);
        if (!isNaN(lineTotal)) {
          return sum + lineTotal;
        }
      }, 0);

      total = parseFloat(subtotal);
      if (!isNaN(total)) {
        this.all_total = total.toFixed(2);
      } else {
        this.all_total = "0.00";
      }
    },

    submitUserForm: function () {
      axios
        .post("project_requisition/", {
          description: this.description,
          submitted_for: this.submitted_for,
          task: this.parent,
          detail: this.dom_repeats,
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "You have successfully created a Requisition.",
          }).then(() => {
            this.$router.push("project-requisition-list");
          });
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },

    addNewRow: function () {
      this.dom_repeats.push({
        item: "",
        amount: "",
        quantity: "",
        total: "",
        unit: 0,
        remarks: "",
      });
    },

    deleteRow: function (index, dom_repeat) {
      var idx = this.dom_repeats.indexOf(dom_repeat);
      console.log(idx, index);
      if (idx > 0) {
        this.dom_repeats.splice(idx, 1);
      }

      this.getAllTotal();
    },
  },
  created() {
    this.id = this.$route.params.id;
    // this.getStatus();
    this.getProjectList();
    this.getItem();
    this.getUnit();
  },
};
</script>

<style scoped>
.cus_right {
  float: right;
}
</style>