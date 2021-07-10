<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Project List" />

      <div class="row">
        <!-- end col -->
        <div class="col-lg-4" v-for="(project, index) in all_project_list" :key="index">
          <div class="card card-color">
            <div class="card-header bg-info">
              <h3 class="card-title m-0 text-white">{{project.name}}</h3>
            </div>
            <div class="card-body">
              <p class="mb-0">
                {{project.description}}
              </p>
            </div>
          </div>
        </div>
        <!-- end col -->
        
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
        all_project_list: null
    };
  },
  methods: {
    getProjectList: function () {
    // const token = "ef24d61024d188c96cbbf9d103f8ea70cbaa63ed"
      axios
        .get("projects/")
        .then((response) => {
          this.all_project_list = response.data.results;
      
        });
    },
  },
  created() {
      this.getProjectList()
  },
};
</script>

<style lang="scss" scoped>
</style>