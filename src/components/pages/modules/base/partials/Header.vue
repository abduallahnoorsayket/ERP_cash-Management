<template>
    <div class="topbar-menu active">
    <div class="container-fluid in">
      <div id="navigation" class="active">
        <!-- Navigation Menu-->
        <ul class="navigation-menu in">
          <li class="has-submenu active">
            <router-link to="/base" class="active">
              <i class="mdi mdi-speedometer"></i>Dashboard
            </router-link>
          </li>

         

          <li class="has-submenu">
            <a href="#">
              <i class="mdi mdi-package-variant-closed"></i>Department
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li><router-link to="/department-list">Department List</router-link></li>
              <li><router-link to="/department-create">Department Create</router-link></li>
            </ul>
          </li>

          <li class="has-submenu">
            <a href="#">
              <i class="mdi mdi-package-variant-closed"></i>Client
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li><router-link to="/client-list">Client List</router-link></li>
              <li><router-link to="/client-create">Client Create</router-link></li>
            </ul>
          </li>

          <li class="has-submenu">
            <a href="#">
              <i class="mdi mdi-package-variant-closed"></i>Items
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li><router-link to="/item-list">Item List</router-link></li>
              <li><router-link to="/item-create">Item Create</router-link></li>
            </ul>
          </li>


          <li class="has-submenu">
            <a href="#">
              <i class="mdi mdi-package-variant-closed"></i>Units
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li><router-link to="/unit-list">Unit List</router-link></li>
              <li><router-link to="/unit-create">Unit Create</router-link></li>
            </ul>
          </li>

          <li class="has-submenu">
            <a href="#">
              <i class="mdi mdi-package-variant-closed"></i>User
              <div class="arrow-down"></div
            ></a>
            <ul class="submenu">
              <li><router-link to="/user-list">User List</router-link></li>
              <li><router-link to="/user-create">User Create</router-link></li>
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
       
        },
        
        
    }
</script>

<style  scoped>

</style>