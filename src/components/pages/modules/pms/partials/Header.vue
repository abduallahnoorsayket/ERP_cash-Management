<template>
    <div class="topbar-menu active">
    <div class="container-fluid in">
      <div id="navigation" class="active">
        <!-- Navigation Menu-->
        <ul class="navigation-menu in">
          <li class="has-submenu active">
            <a href="#" class="active">
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
              <i class="mdi mdi-package-variant-closed"></i>Project
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li><router-link to="/project-basic-list">Project List - Basic</router-link></li>
              <li><router-link to="/project-advance-list">Project List - Advance</router-link></li>
              <li><router-link to="/project-create">Project Create</router-link></li>
            </ul>
          </li>


            <li class="has-submenu">
            <a href="#">
              <i class="mdi mdi-package-variant-closed"></i>Version 
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li><router-link to="/version-list">Version List</router-link></li>
              <li><router-link to="/version-create">Version Create</router-link></li>
  
            </ul>
          </li>


        <li class="has-submenu">
            <a href="#">
              <i class="mdi mdi-package-variant-closed"></i>Sprint 
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li><router-link to="/sprint-list">Sprint List</router-link></li>
              <li><router-link to="/sprint-create">Sprint Create</router-link></li>
            </ul>
          </li>
          


        <li class="has-submenu">
            <a href="#">
              <i class="mdi mdi-package-variant-closed"></i>Task 
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li><router-link to="/task-list">Task List</router-link></li>
              <li><router-link to="/task-create">Task Create</router-link></li>
            </ul>
          </li>

 
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