<template>
    <div class="topbar-menu active">
    <div class="container-fluid in">
      <div id="navigation" class="active">
        <!-- Navigation Menu-->
        <ul class="navigation-menu in">
          <li class="has-submenu active">
            <router-link to="/requisition" href="#" class="active">
              <i class="mdi mdi-speedometer"></i>Dashboard
            </router-link>
          </li>

          <li class="has-submenu">
            <a href="#">
              <i class="mdi mdi-package-variant-closed"></i>Project Requisition
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li><router-link to="/project-requisition-list">Project requisition List</router-link></li>
              <li><router-link to="/project-requisition-create">Project requisition Create</router-link></li>
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