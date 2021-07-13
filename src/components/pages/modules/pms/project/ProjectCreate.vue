<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Project Create" />
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <form action="#">
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                    v-model="name"
                  />
                </div>

                <div class="form-group">
                  <label>Department</label>
                  <select class="form-control" data-toggle="select2" v-model="department">
                    <option>Select</option>

                    <option v-for="d in departments" :key="d.id" :value="d.id">
                      {{ d.name }}
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <label>Assign Date</label>
                  <input
                    type="date"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                  />
                </div>

                <div class="form-group">
                  <label> Start Date</label>
                  <input
                    type="date"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                  />
                </div>
                <div class="form-group">
                  <label> Start Date</label>
                  <input
                    type="date"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                  />
                </div>
                <div class="form-group">
                  <label> Completed Date</label>
                  <input
                    type="date"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                  />
                </div>
                <div class="form-group">
                  <div class="form-group">
                    <label>Members</label>
                    <div class="checkbox checkbox-primary">
                      <input id="checkbox2" type="checkbox" checked="" />
                      <label for="checkbox2"> Primary </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <!-- end col -->

            <div class="col-md-6">
              <form action="#" class="mt-4 mt-md-0">
                <div class="form-group">
                  <label>Project Id</label>
                  <input
                    type="text"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00:00:00"
                  />
                </div>
                <div class="form-group">
                  <label>Client</label>
                  <select class="form-control" data-toggle="select2" v-model="client">
                    <option>Select</option>

                    <option v-for="c in clients" :key="c.id" :value="c.id">
                      {{ c.name }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Expected Start Date</label>
                  <input
                    type="date"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="0000-0000"
                  />
                </div>

                <div class="form-group">
                  <label>Expected Completed Date</label>
                  <input
                    type="date"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="(00) 00000-0000"
                  />
                </div>
                <div class="form-group">
                  <label>Complete Date</label>
                  <input
                    type="date"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="000.000.000-00"
                    data-reverse="true"
                  />
                </div>
                <div class="form-group">
                  <label>Status</label>
                  <select class="form-control" data-toggle="select2">
                    <option>Select</option>

                    <option value="AK">Alaska</option>
                    <option value="HI">Hawaii</option>
                  </select>
                </div>
              </form>
            </div>
            <!-- end col -->

            <div class="col-md-12">
              <form action="#" class="mt-4 mt-md-0">
                <div class="form-group">
                  <label>Description </label>
                  <textarea
                    type="textarea"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="000.000.000-00"
                    data-reverse="true"
                  />
                </div>

                <div class="form-group">
                  <button
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
export default {
  name: "ProjectList",
  components: {
    Layout,
    PageTitle,
  },
  data() {
    return {
      name: null,
      projectId: null,
      clients: null,
      departments: null,
      description: null,
      assign_date: null,
      expected_start_date: null,
      start_date: null,
      expected_complete_date: null,
      complete_date: null,
      status: null,
      department: null,
      client: null,
    };
  },
  methods: {
    getDepartment: function () {
      axios
        .get("project_department")
        .then((response) => {
          console.log("203", response.data);
          this.departments = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getClients: function () {
      axios
        .get("project_clients")
        .then((response) => {
          console.log("203", response.data);
          this.clients = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getDepartment();
    this.getClients();
  },
};
</script>

<style scoped>
.cus_right {
  float: right;
}
</style>