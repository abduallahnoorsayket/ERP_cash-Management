<template>

    <ul class="parsley-errors-list filled" v-if="error">
      <li class="parsley-required" v-for="(e,i) in error" :key={i}>{{ error[i] }}</li>
    </ul>
  
</template>

<script>
export default {
  name: "ValidationError",
  props: ["error"],
};
</script>

<style lang="scss" scoped>
</style>