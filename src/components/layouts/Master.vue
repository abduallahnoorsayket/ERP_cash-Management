<template>
  <div id="wrapper">
    <Header>
      <template v-slot:menu_slot>
        <slot name="module_menu"> </slot>
      </template>
    </Header>
    <div class="content-page">
      <div class="content">
        <div class="container-fluid">

          <slot name="content"></slot>

        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../layouts/partials/Header";
import Footer from "../layouts/partials/Footer";

export default {
  name: "Master",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
body[data-layout="horizontal"] .content-page {
  margin-left: 0 !important;
  /* margin-top: 70px !important; */
}
</style>