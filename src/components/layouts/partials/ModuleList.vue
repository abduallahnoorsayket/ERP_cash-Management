<template>
  <div class="row">
    <div class="col-xl-3 col-md-6">
     <router-link to="/pms">
        <div class="card">
        <div class="card-body">
          <div class="media">
            <!-- <img
              src="assets/images/users/avatar-3.jpg"
              class="avatar-md rounded-circle mr-3 align-self-center"
              alt="user"
            /> -->
            
              <i class="fas fa-project-diagram fa-2x avatar-md rounded-circle align-self-center"></i>
         
            <div class="media-body overflow-hidden">
              <h5 class="font-14 mt-0 mb-1">PMS</h5>
              <p class="mb-1 font-13 text-truncate" title="Project Management System">Project Management System</p>
              <!-- <small class="text-primary"><b>Admin</b></small> -->
            </div>
          </div>
        </div>
      </div>
     </router-link>
    </div>

    <div class="col-xl-3 col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="media">
            <img
              src="assets/images/users/avatar-2.jpg"
              class="avatar-md rounded-circle mr-3 align-self-center"
              alt="user"
            />
            <div class="media-body overflow-hidden">
              <h5 class="font-14 mt-0 mb-1">Finance</h5>
              <p class="mb-1 font-13">Introduction about finance</p>
              <!-- <small class="text-primary"><b>Admin</b></small> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xl-3 col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="media">
            <img
              src="assets/images/users/avatar-1.jpg"
              class="avatar-md rounded-circle mr-3 align-self-center"
              alt="user"
            />
            <div class="media-body overflow-hidden">
              <h5 class="font-14 mt-0 mb-1">POS</h5>
              <p class="mb-1 font-13">Point of sale</p>
              <!-- <small class="text-primary"><b>Admin</b></small> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xl-3 col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="media">
            <img
              src="assets/images/users/avatar-10.jpg"
              class="avatar-md rounded-circle mr-3 align-self-center"
              alt="user"
            />
            <div class="media-body overflow-hidden">
              <h5 class="font-14 mt-0 mb-1">Task Management</h5>
              <p class="mb-1 font-13">Task Management up to date</p>
              <!-- <small class="text-primary"><b>Admin</b></small> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModuleList",
};
</script>

<style lang="scss" scoped>
</style>