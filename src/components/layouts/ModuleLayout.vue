<template>
<Master>
<template v-slot:module_menu>
<slot name="module_header_menu">
  
</slot>
</template>
</Master>
</template>


<script>
import Master from './Master'
export default {
  name: "ModuleLayout",
  components: {
    Master
  },
};
</script>

<style scoped>
</style>