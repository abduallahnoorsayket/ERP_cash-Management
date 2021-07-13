<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Project Advance List" />

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover mb-0 table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Department</th>
                      <th scope="col">Client</th>
                      <th scope="col" title="Assign Date">AD</th>
                      <th scope="col" title="Expected Start Date">ESD</th>
                      <th scope="col" title="Start Date">SD</th>
                      <th scope="col" title="Expected complete Date">ECD</th>
                      <th scope="col" title="complete_date">CD</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(project, index) in all_project_list"
                      :key="index"
                    >
                      <th scope="row">{{ project.name }}</th>
                      <td>{{ project.department.name }}</td>
                      <td>{{ project.client.name }}</td>
                      <td>{{ project.assign_date }}</td>
                      <td>{{ project.expected_start_date }}</td>
                      <td>{{ project.start_date }}</td>
                      <td>{{ project.expected_complete_date }}</td>
                      <td>{{ project.complete_date }}</td>
                      <td>{{ project.status }}</td>
                      <td>
                        <div class="btn-group dropdown mt-2 mr-1">
                        
                          <button
                            type="button"
                            class="
                              btn btn-primary
                              dropdown-toggle 
                              waves-effect waves-light
                            "
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                             <i class="fa fa-cog ml-1"></i>
                          </button>
                          <ul class="dropdown-menu">
                           
                            <li>
                              <a href="#" class="dropdown-item"> <i class="fas fa-edit"></i> Edit </a>
                            </li>
                            <li>
                              <a href="#" class="dropdown-item"> <i class="fas fa-trash"></i> Delete</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
  name: "ProjectAdvanceList",
  components: {
    Layout,
    PageTitle,
  },
  data() {
    return {
      all_project_list: null,
    };
  },
  methods: {
    getProjectList: function () {
      // const token = "ef24d61024d188c96cbbf9d103f8ea70cbaa63ed"
      axios.get("projects/").then((response) => {
        this.all_project_list = response.data.results;
      });
    },
  },
  created() {
    this.getProjectList();
  },
};
</script>

<style lang="scss" scoped>
</style>