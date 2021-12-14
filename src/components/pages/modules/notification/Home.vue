<template>
  <Layout>
    <template v-slot:module_content>
      
      <PageTitle title="Notification"/>
        <NotificationList/>
        <!-- <CommentPost/> -->
    </template>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue";
import PageTitle from '@/components/layouts/partials/PageTitle'
import NotificationList from '../notification/notificationStore/NotificationList.vue'
// import CommentPost from './CommentPost.vue'
export default {
  name: "Home",
  components: {
    Layout,
    PageTitle,
    NotificationList,
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