<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Task Edit" />
      <div class="card">
        <div class="card-body">
    
          <form @submit.prevent="submitUserForm" autocomplete="off">
            <div class="row">
              <div class="col-md-6">

                <div class="form-group">
                  <label>Task Category <span class="asterisk">*</span></label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="category"
                    :class="{ 'parsley-error': errors && errors.category }"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option
                      v-for="(s, i) in task_category_list"
                      :key="i"
                      :value="s.id"
                    >
                      {{ s.name }}
                    </option>
                  </select>
                 <ValidationError :error="errors.category" v-if="errors" />
                </div>
                <!-- <div class="form-group">
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
                </div> -->

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

               
                  <div class="form-group" >
                    <label>Assignee <span class="asterisk">*</span></label>
                    <div class=" checkbox-primary" v-for="m in assignees" :key="m.id">
                      <input
                        :id="m.id"
                        type="checkbox"
                        name="assignee[]"
                        unchecked=""
                        v-model="assignee"
                       :value="m.id"
                       :class="{
                      'parsley-error': errors && errors.assignee,
                    }"
                      />
                      <label for="checkbox2"> {{ m.first_name }} {{m.last_name}} ({{m.username}}) </label>
                      
                    </div>
                    <ValidationError :error="errors.assignee" v-if="errors" />
                  </div>

                   <div class="form-group">
                  <label>Progress {{progress}}</label>
                  <input type="range" min="0" max="100" v-model="progress" />

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

                 <div class="form-group">
                    <label>Has Budget</label>
                    <div class="checkbox checkbox-primary">
                      <input
                        id="checkbox2"
                        type="checkbox"
                        unchecked=""
                        v-model="has_target"
                        value="true"
                        @change="getEmptyTarget"
                      />
                      <label for="checkbox2">
                        {{ has_target == true ? "Yes" : "No" }}
                      </label>
                    </div>
                  </div>
                

              </div>
              <!-- end col -->

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
                  <label>Sprint <span class="asterisk">*</span></label>
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
                  <label>Parent Task</label>
                  <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="parent"
                    :class="{ 'parsley-error': errors && errors.sprint }"
                  >
                    <option value="false" disabled selected>No Parent</option>

                    <option v-for="(p, i) in parents" :key="i" :value="p.id">
                      {{ p.name }} - ({{ p.taskId}})
                    </option>
                  </select>
                  <ValidationError :error="errors.parent" v-if="errors" />
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

               
          <label>Estimated Duration <span class="asterisk">*</span> </label> 
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

                </div>
                <ValidationError :error="errors.estimated_duration" v-if="errors" />


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
                <div v-if="has_target">
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
                      
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(dom_repeat, k) in target" :key="k">
                          <td scope="row" class="trashIconContainer">
                           
                            <button
                              v-if="target.length > 1"
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
                             <ValidationError :error="errors.target[k].item" v-if="errors && errors.target[k].item" />
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
                            <ValidationError :error="errors.target[k].item" v-if="errors && errors.target[k].item" />
                          </td>
                          <td>
                            <input
                              type="number"
                              min="0"
                              step=".01"
                              class="form-control text-right"
                              v-model="dom_repeat.quantity"
                              @change="calculateTotal(dom_repeat)"
                            />
                            <ValidationError :error="errors.target[k].item" v-if="errors && errors.target[k].item" />
                          </td>
                         
                        </tr>
                      </tbody>
                      
                    </table>
                  </div>
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
import ValidationError from "@/components/layouts/partials/ValidationError.vue"
import longDateToStandard from "@/Helper";

export default {
  name: "TaskEdit",
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
      statusData: null,
      projectId: null,
      version: null,
      versions: null,
      estimated_duration: null,
      da: null,
      hrs: null,
      mins: null,
      sprint: null,
      sprints: null,
      assignee: [],
      assignees: null,
      progress: 0,
      parent: null,
      parents: null,
      category: null,
      task_category_list: null,
      id : null,
      target: [
        {
        item: "",
        amount: "",
        quantity: ""
        }
      ],
      has_target : false,
      items: null,
      units: null,

    };
  },
  methods: {

    getTaskeditData: function () {
      axios.get(`tasks/${this.$route.params.id}/`).then(
        (response) => {
          // console.log("329", response.data);
          this.name = response.data.name;
          this.start_date = longDateToStandard(response.data.start_date);
          this.expected_start_date = longDateToStandard(
            response.data.expected_start_date
          );
          this.expected_complete_date = longDateToStandard(
            response.data.expected_complete_date
          );
          this.complete_date = longDateToStandard(response.data.complete_date);
          this.project = response.data.sprint.version.project.id;
          this.version = response.data.sprint.version.id;
          // console.log('322',response.data.sprint.version.id);
          this.sprint = response.data.sprint.id
          this.status = response.data.status;
          this.description = response.data.description;
          this.progress = response.data.progress;
          this.estimated_duration = response.data.estimated_duration;
          // this.project = response.data.version.project.id;
          this.assignee = response.data.assignee;
          this.parent = response.data.parent
          this.category = response.data.category
          this.has_target = response.data.has_target
          this.target =response.data.target.map((detail) => {
            return {
              id: detail.id,
              quantity: detail.quantity,
              item: detail.item.id,
              unit: detail.unit.id,
            };
          });
          this.estimate_duration_split()
          this.getMember()
          this.getVersion()
          this.getSprint()
          this.getParents()
          this.getItem();
          this.getUnit();
         
        }
      ).catch((err) => {
        console.log("error", err)
      })
    },

    estimate_duration_split: function () {
      let duration = this.estimated_duration.split(' ')
      let hr = duration[1].split(':')
      this.da = duration[0]
      this.hrs = hr[0]
      this.mins = hr[1]
      // console.log('342 pppppppppp');
    },

    getAllData: function (e) {
      this.getVersion(e)
      this.getMember()
      this.sprint = this.sprints = null;
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
    getVersion: function (e) {
      axios
        .get("version_short?project=" + this.project)
        .then((response) => {
          this.versions = response.data;

          if(e.type === "change") {
              let currentVersion = this.versions.filter((version) => {
               return version.current;
          });
            this.version =  currentVersion.length > 0 ? currentVersion[0].id : null;
            this.getSprint(e)
           
          }
            
          
        })
        .catch(function (error) {
          console.log(error);
        });
    },
     getSprint: function (e) {
      axios
        .get("sprint_short?version=" + this.version)
        .then((response) => {
          this.sprints = response.data;
          

          if(e.type === "change") {

            let currentSprint = this.sprints.filter((sprint) => {
            return sprint.current;
          });

          this.sprint =
            currentSprint.length > 0 ? currentSprint[0].id : null;
           
          }

          this.getParents()
          
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    getParents: function () {
      axios
        .get("task_short?sprint=" + this.sprint)
        .then((response) => {
          this.parents = response.data.filter(p => {
            
           return   p.id !== parseInt(this.id);
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

    getEmptyTarget: function () {
      this.target = []
      this.addNewRow()
    },     
     addNewRow: function () {
      this.target.push({
        item: null,
        amount: null,
        quantity: null
      });

      this.errors = null
      
    },
     deleteRow: function (index, dom_repeat) {
      var idx = this.target.indexOf(dom_repeat);
      console.log(idx, index);
      if (idx > 0) {
        this.target.splice(idx, 1);
        // this.has_target = false;
      }
    },
    getTaskCategory: function () {
      axios
        .get("task_category_short")
        .then((response) => {
          this.task_category_list = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    submitUserForm: function () {
      axios
        .put(`tasks/${this.$route.params.id}/`, {
          name: this.name,
          expected_start_date: this.expected_start_date,
          expected_complete_date: this.expected_complete_date,
          start_date: this.start_date,
          status: this.status,
          complete_date: this.complete_date,
          description: this.description,
          estimated_duration: this.estimated_duration,
          assignee: this.assignee,
          sprint: this.sprint,
          progress: this.progress,
          parent : this.parent,
          category : this.category,
          has_target : this.has_target,
          target : this.target,
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "You have successfully updated a task.",
          }).then(() => {
           this.$router.push({name:'TaskList'});
          });
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
    setDuration : function () {
      this.estimated_duration =  this.da +' '+ this.hrs +':'+ this.mins + ':00'
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getStatus();
    this.getProjectList();
    this.getTaskeditData();
    this.getItem();
    this.getTaskCategory();
    this.getUnit();
  },
};
</script>

<style scoped>
.cus_right {
  float: right;
}
</style>