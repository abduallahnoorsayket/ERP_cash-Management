<template>
    <div class="topbar-menu active">
    <div class="container-fluid in">
      <div id="navigation" class="active">
        <!-- Navigation Menu-->
        <ul class="navigation-menu in">
          <li class="has-submenu active">
            <a href="index.html" class="active">
              <i class="mdi mdi-speedometer"></i>Dashboard
            </a>
          </li>

          <!-- <li class="has-submenu">
            <a href="#">
              <i class="mdi mdi-purse-outline"></i>User Interface
              <div class="arrow-down"></div>
            </a>
            <ul class="submenu megamenu">
              <li>
                <ul>
                  <li><a href="ui-buttons.html">Buttons</a></li>
                  <li><a href="ui-cards.html">Cards</a></li>
                  <li><a href="ui-typography.html">Typography </a></li>
                  <li>
                    <a href="ui-checkbox-radio.html">Checkboxs-Radios</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li><a href="ui-modals.html">Modals</a></li>
                  <li><a href="ui-images.html">Images</a></li>
                  <li><a href="ui-components.html">Components</a></li>
                </ul>
              </li>
            </ul>
          </li> -->

          <li class="has-submenu">
            <a href="#">
              <i class="mdi mdi-package-variant-closed"></i>Project Management
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li><router-link to="/project-list">Project List - Basic</router-link></li>
              <li><a href="admin-notification.html">Project List - Advance</a></li>
              <li><a href="admin-range-slider.html">Project Create</a></li>
              
            </ul>
          </li>

          <!-- <li class="has-submenu">
            <a href="#">
              <i class="mdi mdi-layers-outline"></i>Components
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li class="has-submenu">
                <a href="#"
                  >Forms
                  <div class="arrow-down"></div
                ></a>
                <ul class="submenu">
                  <li><a href="form-elements.html">Form Elements</a></li>
                  <li><a href="form-advanced.html">Advanced Form</a></li>
                  <li>
                    <a href="form-validation.html">Form Validation</a>
                  </li>
                  <li><a href="form-wizard.html">Form Wizard</a></li>
                  <li><a href="form-summernote.html">Summernote</a></li>
                  <li><a href="form-uploads.html">Form Uploads</a></li>
                </ul>
              </li>
              <li class="has-submenu">
                <a href="#"
                  >Tables
                  <div class="arrow-down"></div
                ></a>
                <ul class="submenu">
                  <li><a href="tables-basic.html">Basic Tables</a></li>
                  <li><a href="tables-datatable.html">Data Tables</a></li>
                  <li>
                    <a href="tables-editable.html">Editable Tables</a>
                  </li>
                </ul>
              </li>
              <li class="has-submenu">
                <a href="#"
                  >Charts
                  <div class="arrow-down"></div
                ></a>
                <ul class="submenu">
                  <li><a href="charts-flot.html">Flot Charts</a></li>
                  <li><a href="charts-morris.html">Morris Charts</a></li>
                  <li>
                    <a href="charts-chartist.html">Chartist Charts</a>
                  </li>
                  <li><a href="charts-other.html">Other Charts</a></li>
                </ul>
              </li>
              <li class="has-submenu">
                <a href="#"
                  >Maps
                  <div class="arrow-down"></div
                ></a>
                <ul class="submenu">
                  <li><a href="maps-google.html">Google Maps</a></li>
                  <li><a href="maps-vector.html">Vector Maps</a></li>
                </ul>
              </li>
            </ul>
          </li> -->

          <!-- <li class="has-submenu last-elements">
            <a href="#">
              <i class="mdi mdi-flip-horizontal"></i>Layouts
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li><a href="layouts-vertical.html">Vertical Layout</a></li>
              <li>
                <a href="layouts-topbar-light.html">Topbar Light</a>
              </li>
              <li><a href="layouts-center-menu.html">Center Menu</a></li>
              <li>
                <a href="layouts-normal-header.html">Unsticky Header</a>
              </li>
              <li><a href="layouts-boxed.html">Boxed Layout</a></li>
            </ul>
          </li> -->
<!-- 
          <li class="has-submenu last-elements">
            <a href="#">
              <i class="mdi mdi-cards-outline"></i>Pages
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li><a href="pages-starter.html">Starter Page</a></li>
              <li><a href="pages-timeline.html">Timeline</a></li>
              <li><a href="pages-login.html">Login</a></li>
              <li><a href="pages-register.html">Register</a></li>
              <li><a href="pages-recoverpw.html">Recover Password</a></li>
              <li><a href="pages-lock-screen.html">Lock Screen</a></li>
              <li><a href="pages-confirm-mail.html">Confirm Mail</a></li>
              <li><a href="pages-404.html">Error 404</a></li>
            </ul>
          </li> -->
        </ul>
        <!-- End navigation menu -->

        <div class="clearfix"></div>
      </div>
      <!-- end #navigation -->
    </div>
    <!-- end container -->
  </div>

</template>

<script>

    export default {
        name: "Header",
        components: {
       
        }
        
    }
</script>

<style  scoped>

</style>