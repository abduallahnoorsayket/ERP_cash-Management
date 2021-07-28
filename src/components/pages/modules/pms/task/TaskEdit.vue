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
                  <label>Name</label>
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
                  <label> Expected Start Date</label>
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
                  <label>Expected Completed Date</label>
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
                    <label>Assignee</label>
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
                    @change="getAllData($event)"
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
                    @change="getSprint($event)"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(v, i) in versions" :key="i" :value="v.id">
                      {{ v.name }}
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

               
          <label>Estimated Duration </label> 
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

                <div class="form-group">
                  <label>Status</label>
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
      id : null,

    };
  },
  methods: {

    getTaskeditData: function () {
      axios.get(`tasks/${this.$route.params.id}/`).then(
        (response) => {
          console.log("329", response.data);
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
          console.log('322',response.data.sprint.version.id);
          this.sprint = response.data.sprint.id
          this.status = response.data.status;
          this.description = response.data.description;
          this.progress = response.data.progress;
          this.estimated_duration = response.data.estimated_duration;
          // this.project = response.data.version.project.id;
          this.assignee = response.data.assignee;
          this.parent = response.data.parent
          this.estimate_duration_split()
          this.getMember()
          this.getVersion()
          this.getSprint()
          this.getParents()
         
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
      console.log('342 pppppppppp');
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
          parent : this.parent
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
   
  },
};
</script>

<style scoped>
.cus_right {
  float: right;
}
</style>