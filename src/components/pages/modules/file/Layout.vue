<template>
  <ModuleLayout>
    <template v-slot:module_header_menu>
      <!-- <Header></Header> -->
      
    </template>

    <template v-slot:module_content>
      <slot name="module_content"></slot>
    </template>

  </ModuleLayout>
</template>

<script>
import ModuleLayout from "../../../layouts/ModuleLayout.vue";
// import Header from "./partials/Header.vue";
export default {
  name: "Layout",
  components: {
    ModuleLayout,
    // Header,
  },
};
</script>

<style scoped>

</style>