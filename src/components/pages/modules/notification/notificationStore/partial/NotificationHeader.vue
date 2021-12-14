<template>
  <li class="dropdown notification-list">
    <a
      class="nav-link dropdown-toggle waves-effect waves-light"
      data-toggle="dropdown"
      href="#"
      role="button"
      aria-haspopup="false"
      aria-expanded="false"
    >
      <i class="mdi mdi-bell-outline noti-icon"></i>
      <span class="badge badge-danger rounded-circle noti-icon-badge">5</span>
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
          :key="i">
            <div class="notify-icon bg-soft-primary text-primary">
              <i class="mdi mdi-comment-account-outline"></i>
            </div>
            <p class="notify-details">
              Caleb Flakelar commented on Admin
              <small class="noti-time">1 min ago</small>
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
      <a
        href="javascript:void(0);"
        class="dropdown-item text-primary notify-item notify-all"
      >
        View all
        <i class="fi-arrow-right"></i>
      </a>
    </div>
  </li>
</template>

<script>
import axios from "@/axios";
import Swal from "sweetalert2";
export default {
  name: "NotificationHeader",
  data() {
    return {
      notification_list: [],
      limit: 3,
    };
  },
  methods: {
    getNotificationList: function () {
      axios
        .get("notification")
        .then((response) => {
          this.notification_list = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
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

<style lang="scss" scoped>
</style>