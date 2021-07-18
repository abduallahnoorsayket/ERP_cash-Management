<template>
  <div class="alert alert-success alert-dismissible" role="alert">
    {{ msg }}

    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "SuccessMsg",
  props: ["msg"],
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>