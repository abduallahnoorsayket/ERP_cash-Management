<template>
  <header id="topnav">
    <!-- Topbar Start -->
    <div class="navbar-custom">
      <div class="container-fluid">
        <ul class="list-unstyled topnav-menu float-right mb-0">
          <li class="dropdown notification-list">
            <!-- Mobile menu toggle-->
            <a class="navbar-toggle nav-link">
              <div class="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            <!-- End mobile menu toggle-->
          </li>

         

          <NotificationHeader/>

        

          <li class="dropdown notification-list">
            <a
              class="
                nav-link
                dropdown-toggle
                nav-user
                mr-0
                waves-effect waves-light
              "
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <!-- <img
                src="assets/images/users/avatar-1.jpg"
                alt="user-image"
                class="rounded-circle"
              /> -->
              {{fullName}}
            </a>
            <div class="dropdown-menu dropdown-menu-right profile-dropdown">
              <!-- item-->
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome ! {{fullName}} </h6>
              </div>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-account-outline"></i>
                <span>Profile</span>
              </a>

              <!-- item-->
              <router-link to="/profile" href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-settings-outline"></i>
                <span>Settings</span>
              </router-link>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-lock-outline"></i>
                <span>Lock Screen</span>
              </a>

              <div class="dropdown-divider"></div>

              <!-- item-->
              <a
                href="javascript:void(0);"
                class="dropdown-item notify-item"
                @click="logout"
              >
                <i class="mdi mdi-logout-variant"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>

          <li class="dropdown notification-list">
            <a
              href="javascript:void(0);"
              class="nav-link right-bar-toggle waves-effect waves-light"
            >
              <i class="mdi mdi-settings-outline noti-icon"></i>
            </a>
          </li>
        </ul>

        <!-- LOGO -->
        <router-link to="/dashboard" >
        <div class="logo-box">
          <a href="#" class="logo text-center logo-light">
            <span class="logo-lg">
              <img src="/assets/images/logo1.png" alt="" height="16" />
              <!-- <span class="logo-lg-text-light">Flacto</span> -->
            </span>
            <span class="logo-sm">
              <!-- <span class="logo-sm-text-dark">F</span> -->
              <img src="assets/images/logo-sm.png" alt="" height="22" />
            </span>
          </a>

          <a href="#" class="logo text-center logo-dark">
            <span class="logo-lg">
              <img src="assets/images/logo.png" alt="" height="16" />
              <!-- <span class="logo-lg-text-dark">Flacto</span> -->
            </span>
            <span class="logo-sm">
              <!-- <span class="logo-lg-text-dark">F</span> -->
              <img src="assets/images/logo-sm.png" alt="" height="22" />
            </span>
          </a>
        </div>
        </router-link>

        <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
          <li class="d-none d-sm-block">
            <form class="app-search">
              <div class="app-search-box">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                  />
                  <div class="input-group-append">
                    <button class="btn" type="submit">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </li>

         
        </ul>
        <div class="clearfix"></div>
      </div>
    </div>
    <!-- end Topbar -->

    <slot name="menu_slot"> </slot>
    <!-- end navbar-custom -->
  </header>
</template>

<script>
import axios from "@/axios";
import NotificationHeader from "../../pages/modules/notification/notificationStore/partial/NotificationHeader.vue"

export default {
  name: "Header",
  components: {
    NotificationHeader
  },

  data() {
    return {
      first_name: null,
      last_name: null,
      username: null,
    };
  },
  methods: {
    logout: function () {
      axios
        .get("logout")
        .then((res) => {
          console.log(res.data);
          localStorage.clear();

          this.$router.push("/");
        })
        .catch((error) => {
          console.error(error);
           localStorage.clear();

           this.$router.push("/");
        });
    },
  },
  created() {
    
 },
 computed: {
   fullName: function () {
     const userData = JSON.parse(localStorage.getItem("userData")) 
     return `${userData.first_name} ${userData.last_name} (${userData.username})`;
      
    }
 }
};
</script>

<style scoped>
</style>