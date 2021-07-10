<template>

<Master>
<template v-slot:module_menu>
<slot name="module_header_menu">
  
</slot>

</template>

<template v-slot:content>
<slot name="module_content"></slot>
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