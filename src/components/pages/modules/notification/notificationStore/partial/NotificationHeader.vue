<template>
  <li class="dropdown notification-list">
    <a
      class="nav-link dropdown-toggle waves-effect waves-light"
      data-toggle="dropdown"
      href="#"
      role="button"
      aria-haspopup="false"
      aria-expanded="false"
      @click="latestNotificationList()"
    >
      <i class="mdi mdi-bell-outline noti-icon"></i>
      <span class="badge badge-danger rounded-circle noti-icon-badge">{{total_unseen}}</span>
      <!-- <div class="noti-dot">
                <span class="dot"></span>
                <span class="pulse"></span>
              </div> -->
    </a>
    <div class="dropdown-menu dropdown-menu-right dropdown-lg" style="">
      <!-- item-->
      <div class="dropdown-item noti-title">
        <h5 class="font-16 m-0">
          <span class="float-right">
            <a href="#" class="text-dark">
              <!-- <small>Clear All</small> -->
            </a> </span
          >Notification
        </h5>
      </div>

      <div
        class="slimScrollDiv"
        style="position: relative; overflow: hidden; width: auto; height: 353px"
      >
        <div
          class="slimscroll noti-scroll"
          style="overflow: hidden; width: auto; height: 353px"
        >
          <!-- item-->
          <a href="javascript:void(0);" class="dropdown-item notify-item"
            v-for="(notify,i) in computedObj"
          :key="i" :class="{ 'unseen': notify && !notify.views  }" @click="notificationDetails(notify)">
            <div class="notify-icon bg-soft-primary text-primary">
              <i class="mdi mdi-comment-account-outline"></i>
            </div>
            <p class="notify-details" :title="notify.message">
             {{notify.message}}
              <small class="noti-time">{{notify.created_at}}</small>
            </p>
          </a>

         
        </div>
        <div
          class="slimScrollBar"
          style="
            background: rgb(158, 165, 171);
            width: 5px;
            position: absolute;
            top: 0px;
            opacity: 0.4;
            display: block;
            border-radius: 7px;
            z-index: 99;
            right: 1px;
          "
        ></div>
        <div
          class="slimScrollRail"
          style="
            width: 5px;
            height: 100%;
            position: absolute;
            top: 0px;
            display: none;
            border-radius: 7px;
            background: rgb(51, 51, 51);
            opacity: 0.2;
            z-index: 90;
            right: 1px;
          "
        ></div>
      </div>

      <!-- All-->
      <router-link to="/notification">
     <a
        href="javascript:void(0);"
        class="dropdown-item text-primary notify-item notify-all"
      >
        View all
        <i class="fi-arrow-right"></i>
      </a>
      </router-link>
     
    </div>
  </li>
</template>

<script>
import axios from "@/axios";
import NAVIGATE from "../../Navigation";
// import Swal from "sweetalert2";
export default {
  name: "NotificationHeader",
  data() {
    return {
      notification_list: [],
      limit: 3,
      total_unseen: null
    };
  },
  methods: {
    getNotificationList: function () {
      axios
        .get("notification?ordering=-created_at")
        .then((response) => {
          this.notification_list = response.data.results;
          this.total_unseen = response.data.total_unseen;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    notificationDetails: function (notification) {
      // console.log('124',notification.views)
      if(notification.views) {
        console.log('notify true go to object page')
          this.goToNotificationPage(notification)
      } else {
        this.markAsSeen(notification)
      }
    },
    markAsSeen: function (notification) {
        axios
        .patch(`notification/${notification.id}/`,{
          views: true
        })
        .then(() => {
          this.goToNotificationPage(notification)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    goToNotificationPage: function (notification) {
      let redirect_path = NAVIGATE[notification.content_type.app_label + "__" + notification.content_type.model]
      this.$router.push(`/${redirect_path}/` + notification.object_id)
      // this.$router.push(`/project-requisition-details/` + notification.object_id)
    },
    latestNotificationList: function () {
     this.getNotificationList();
    }
  },
  computed:{
  computedObj(){
    return this.limit ? this.notification_list.slice(0,this.limit) : this.notification_list
  }
},
  created() {
    this.getNotificationList();
  },
};
</script>

<style scoped>
.unseen {
    color: #16181b;
    text-decoration: none;
    background-color: #f8f9fa;
    border-bottom: 1px solid white;
}
</style>