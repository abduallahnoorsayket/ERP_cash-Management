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

          <li class="dropdown d-none d-lg-block">
            <a
              class="nav-link dropdown-toggle mr-0"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="assets/images/flags/us.jpg"
                alt="user-image"
                class="mr-2"
                height="12"
              />
              <span class="align-middle"
                >English <i class="mdi mdi-chevron-down"></i>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <img
                  src="assets/images/flags/germany.jpg"
                  alt="user-image"
                  class="mr-2"
                  height="12"
                />
                <span class="align-middle">German</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <img
                  src="assets/images/flags/italy.jpg"
                  alt="user-image"
                  class="mr-2"
                  height="12"
                />
                <span class="align-middle">Italian</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <img
                  src="assets/images/flags/spain.jpg"
                  alt="user-image"
                  class="mr-2"
                  height="12"
                />
                <span class="align-middle">Spanish</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <img
                  src="assets/images/flags/russia.jpg"
                  alt="user-image"
                  class="mr-2"
                  height="12"
                />
                <span class="align-middle">Russian</span>
              </a>
            </div>
          </li>

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
              <div class="noti-dot">
                <span class="dot"></span>
                <span class="pulse"></span>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-lg" style="">
              <!-- item-->
              <div class="dropdown-item noti-title">
                <h5 class="font-16 m-0">
                  <span class="float-right">
                    <a href="#" class="text-dark">
                      <small>Clear All</small>
                    </a> </span
                  >Notification
                </h5>
              </div>

              <div
                class="slimScrollDiv"
                style="
                  position: relative;
                  overflow: hidden;
                  width: auto;
                  height: 353px;
                "
              >
                <div
                  class="slimscroll noti-scroll"
                  style="overflow: hidden; width: auto; height: 353px"
                >
                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-soft-primary text-primary">
                      <i class="mdi mdi-comment-account-outline"></i>
                    </div>
                    <p class="notify-details">
                      Caleb Flakelar commented on Admin
                      <small class="noti-time">1 min ago</small>
                    </p>
                  </a>

                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-soft-success text-success">
                      <i class="mdi mdi-account-plus"></i>
                    </div>
                    <p class="notify-details">
                      New user registered.
                      <small class="noti-time">5 hours ago</small>
                    </p>
                  </a>

                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-soft-danger text-danger">
                      <i class="mdi mdi-comment-account-outline"></i>
                    </div>
                    <p class="notify-details">
                      Herbert Lim commented on Admin
                      <small class="noti-time">13 days ago</small>
                    </p>
                  </a>

                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-soft-secondary text-muted">
                      <i class="mdi mdi-heart"></i>
                    </div>
                    <p class="notify-details">
                      Carlos Crouch liked
                      <b>Admin</b>
                      <small class="noti-time">13 days ago</small>
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

          <li class="dropdown notification-list">
            <a
              class="nav-link dropdown-toggle waves-effect waves-light"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i class="mdi mdi-email-outline noti-icon"></i>
              <span class="badge badge-danger rounded-circle noti-icon-badge"
                >5</span
              >
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-lg">
              <!-- item-->
              <div class="dropdown-item noti-title">
                <h5 class="font-16 m-0">
                  <span class="float-right">
                    <a href="#" class="text-dark">
                      <small>Clear All</small>
                    </a> </span
                  >Messages
                </h5>
              </div>

              <div
                class="slimScrollDiv"
                style="
                  position: relative;
                  overflow: hidden;
                  width: auto;
                  height: 353px;
                "
              >
                <div
                  class="slimscroll noti-scroll"
                  style="overflow: hidden; width: auto; height: 353px"
                >
                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon">
                      <img
                        src="assets/images/users/avatar-1.jpg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <p class="notify-details">James Smith</p>
                    <p class="mb-0 user-msg text-truncate">
                      <small
                        >Hi, How are you? What about our next meeting</small
                      >
                    </p>
                  </a>

                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon">
                      <img
                        src="assets/images/users/avatar-4.jpg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <p class="notify-details">Paul Ocasio</p>
                    <p class="mb-0 user-msg text-truncate">
                      <small
                        >Wow ! this admin looks good and awesome design</small
                      >
                    </p>
                  </a>

                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon">
                      <img
                        src="assets/images/users/avatar-5.jpg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <p class="notify-details">Thomas Davis</p>
                    <p class="mb-0 user-msg text-truncate">
                      <small>This theme is awesome!</small>
                    </p>
                  </a>

                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon">
                      <img
                        src="assets/images/users/avatar-6.jpg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <p class="notify-details">Devon Laskey</p>
                    <p class="mb-0 user-msg text-truncate">
                      <small>Nice to meet you</small>
                    </p>
                  </a>

                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon">
                      <img
                        src="assets/images/users/avatar-7.jpg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <p class="notify-details">Felipe Hall</p>
                    <p class="mb-0 user-msg text-truncate">
                      <small>I've finished it! See you so...</small>
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
              <img
                src="assets/images/users/avatar-1.jpg"
                alt="user-image"
                class="rounded-circle"
              />
            </a>
            <div class="dropdown-menu dropdown-menu-right profile-dropdown">
              <!-- item-->
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome !</h6>
              </div>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-account-outline"></i>
                <span>Profile</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-settings-outline"></i>
                <span>Settings</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-lock-outline"></i>
                <span>Lock Screen</span>
              </a>

              <div class="dropdown-divider"></div>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
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
        <div class="logo-box">
          <a href="index.html" class="logo text-center logo-light">
            <span class="logo-lg">
              <img src="assets/images/logo-light.png" alt="" height="16" />
              <!-- <span class="logo-lg-text-light">Flacto</span> -->
            </span>
            <span class="logo-sm">
              <!-- <span class="logo-sm-text-dark">F</span> -->
              <img src="assets/images/logo-sm.png" alt="" height="22" />
            </span>
          </a>

          <a href="index.html" class="logo text-center logo-dark">
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

          <li class="dropdown dropdown-mega d-none d-lg-block">
            <a
              class="nav-link dropdown-toggle waves-effect waves-light"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              Mega Menu
              <i class="mdi mdi-chevron-down"></i>
            </a>
            <div class="dropdown-menu dropdown-megamenu">
              <div class="row">
                <div class="col-sm-3">
                  <a href="index.html">
                    <img src="assets/images/logo.png" alt="" height="16" />
                  </a>
                  <h5 class="font-15 mt-3 mb-5">
                    Bootstrap 4 Responsive admin Template
                  </h5>

                  <h5 class="font-14 mt-0">
                    <i class="mdi mdi-purse-outline mr-1"></i> UI Components
                  </h5>

                  <div class="row">
                    <div class="col-6">
                      <ul class="list-unstyled megamenu-list">
                        <li><a href="javascript:void(0);">Buttons</a></li>
                        <li><a href="javascript:void(0);">Cards</a></li>
                        <li><a href="javascript:void(0);">Typography </a></li>
                      </ul>
                    </div>
                    <div class="col-6">
                      <ul class="list-unstyled megamenu-list">
                        <li>
                          <a href="javascript:void(0);">Checkboxs-Radios</a>
                        </li>
                        <li><a href="javascript:void(0);">Modals</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div>
                    <h5 class="font-16 mt-0">Components</h5>

                    <div class="text-center">
                      <div class="row border-bottom">
                        <div class="col-4 p-0">
                          <a href="#">
                            <div class="p-3 border-right">
                              <i class="mdi mdi-shape-outline font-22"></i>

                              <h5 class="font-14">Widgets</h5>
                            </div>
                          </a>
                        </div>

                        <div class="col-4 p-0">
                          <a href="#">
                            <div class="p-3 border-right">
                              <i
                                class="mdi mdi-clipboard-text-outline font-22"
                              ></i>

                              <h5 class="font-14">Forms</h5>
                            </div>
                          </a>
                        </div>

                        <div class="col-4 p-0">
                          <a href="#">
                            <div class="p-3">
                              <i class="mdi mdi-dns-outline font-22"></i>

                              <h5 class="font-14">Tables</h5>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-4 p-0">
                          <a href="#">
                            <div class="p-3 border-right">
                              <i class="mdi mdi-chart-arc font-22"></i>

                              <h5 class="font-14">Charts</h5>
                            </div>
                          </a>
                        </div>
                        <div class="col-4 p-0">
                          <a href="#">
                            <div class="p-3 border-right">
                              <i class="mdi mdi-map-marker-outline font-22"></i>

                              <h5 class="font-14">Maps</h5>
                            </div>
                          </a>
                        </div>
                        <div class="col-4 p-0">
                          <a href="#">
                            <div class="p-3">
                              <i class="mdi mdi-speedometer font-22"></i>

                              <h5 class="font-14">Dashboard</h5>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-2 offset-lg-1">
                  <div class="p-2">
                    <div class="media mb-3">
                      <div class="mr-3">
                        <i class="fab fa-bootstrap text-primary font-22"></i>
                      </div>

                      <div class="media-body">
                        <h5 class="font-14 mt-1">Bootstrap v4.3.1</h5>
                      </div>
                    </div>
                    <div class="media mb-3">
                      <div class="mr-3">
                        <i class="fab fa-npm text-primary font-22"></i>
                      </div>

                      <div class="media-body">
                        <h5 class="font-14 mt-1">Npm</h5>
                      </div>
                    </div>
                    <div class="media mb-3">
                      <div class="mr-3">
                        <i class="fab fa-sass text-primary font-22"></i>
                      </div>

                      <div class="media-body">
                        <h5 class="font-14 mt-1">Sass support</h5>
                      </div>
                    </div>
                    <div class="media mb-3">
                      <div class="mr-3">
                        <i class="fas fa-tablet-alt text-primary font-22"></i>
                      </div>

                      <div class="media-body">
                        <h5 class="font-14 mt-1">Responsive</h5>
                      </div>
                    </div>
                    <div class="media">
                      <div class="mr-3">
                        <i class="fas fa-exchange-alt text-primary font-22"></i>
                      </div>

                      <div class="media-body">
                        <h5 class="font-14 mt-1">RTL supported</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="text-center">
                    <h5 class="mt-0">Special Discount Sale!</h5>

                    <h5 class="font-16 mt-4">
                      Save up to <span class="text-primary">60%</span> off.
                    </h5>
                    <p class="text-muted">Get free updates lifetime</p>
                    <a href="#" class="btn btn-primary btn-rounded"
                      >Download Now</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
    </div>
    <!-- end Topbar -->

   <slot name="menu_slot">
     
   </slot>
    <!-- end navbar-custom -->
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
</style>