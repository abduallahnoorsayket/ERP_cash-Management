<template>
  <Layout>
    <template v-slot:module_content>
      
      <PageTitle title="Project Management System"/>

      <div class="row">
        <div class="col-lg-4">
          <div class="card">
            <div class="card-header bg-warning">
              <h3 class="card-title m-0 text-white">Card Warning</h3>
            </div>
            <div class="card-body">
              <p class="mb-0">
                If several languages coalesce, the grammar of the resulting
                language is more simple and regular than that of the individual
                languages new common language will be more simple and regular
              </p>
            </div>
          </div>
        </div>
        <!-- end col -->
        <div class="col-lg-4">
          <div class="card card-color">
            <div class="card-header bg-info">
              <h3 class="card-title m-0 text-white">Card Info</h3>
            </div>
            <div class="card-body">
              <p class="mb-0">
                It will be as simple as Occidental in fact, it will be
                Occidental. To an English person, it will seem like simplified
                English, as a skeptical Cambridge friend of mine told me what
                Occidental
              </p>
            </div>
          </div>
        </div>
        <!-- end col -->
        <div class="col-lg-4">
          <div class="card card-color">
            <div class="card-header bg-dark">
              <h3 class="card-title m-0 text-white">Card Dark</h3>
            </div>
            <div class="card-body">
              <p class="mb-0">
                Their separate existence is a myth. For science, music, sport,
                etc, Europe uses the same vocabulary. The languages only differ
                in their grammar, their pronunciation and their most common
                words.
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
import Layout from "./Layout.vue";
import PageTitle from '@/components/layouts/partials/PageTitle'
export default {
  name: "Home",
  components: {
    Layout,
    PageTitle
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>