<template>
  <Layout>
    <template v-slot:module_content>
      
      <PageTitle title="File Management System"/>

      
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