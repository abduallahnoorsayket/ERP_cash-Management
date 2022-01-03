<template>
  <Layout>
    <template v-slot:module_content>
      
      <PageTitle title="Comment "/>
        <CommentList/>
        <!-- <CommentPost/> -->
    </template>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue";
import PageTitle from '@/components/layouts/partials/PageTitle'
import CommentList from '../comment/commentStore/CommentList.vue'
// import CommentPost from './CommentPost.vue'
export default {
  name: "Home",
  components: {
    Layout,
    PageTitle,
    CommentList,
    // CommentPost
  },
  data() {
    return {};
  },
};
</script>

<style  scoped>
.toast-header {
  background-color: white !important;
}
.toast-body {
 background-color: white !important;
}
.comment_card_color{
   background-color: #f5f5f5 !important;
}
</style>