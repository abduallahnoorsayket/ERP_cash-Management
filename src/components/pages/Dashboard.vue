<template>
  <Master>
    <template v-slot:content>
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
         
            <h4 class="page-title">Dashboard</h4>
          </div>
        </div>
      </div>
      <!-- List component -->
      <ModuleList/>
      
    </template>
  </Master>
</template>

<script>
import Master from "../layouts/Master";
import ModuleList from "../layouts/partials/ModuleList.vue"
export default {
  name: "Dashboard",
  components: {
    Master,
    ModuleList
  },
};
</script>

<style lang="scss" scoped>
</style>