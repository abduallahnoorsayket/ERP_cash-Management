<template>
  <Master>
    <template v-slot:content>
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">Profile</h4>
          </div>
        </div>
      </div>
      <!-- List component -->
      <div class="row">
        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="text-center">
                <div class="mt-4 mt-sm-0">
                  <img
                    src="assets/images/users/avatar-6.jpg"
                    alt="image"
                    class="img-fluid rounded-circle"
                    width="120"
                  />
                  <p class="mb-0 mt-2">
                    <code
                      >
                      <!-- <button class="btn btn-primary waves-effect waves-light">
                        <i class="fas fa-camera"></i></button
                    >
                    <input type="file"/> -->
                    <div class="input--file">
  <span class="camera_size">
  
    <i class="fas fa-camera " ></i>
  </span>
  <input name="Select File" type="file" />
</div>
                    </code>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- end card -->

          <!-- end card -->
        </div>

        <div class="col-xl-8">
          <div class="card">
            <div class="card-body">
              <form class="form-horizontal">
                <div class="form-group row">
                  <label
                    class="col-sm-3 col-form-label"
                    for="example-input-small"
                    >Password</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword3"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    class="col-sm-3 col-form-label"
                    for="example-input-normal"
                    >Re Password</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Retype Password"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  class="
                    btn btn-primary
                    waves-effect waves-light
                    width-md
                    mt-4
                    btn_right_password
                  "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
    </template>
  </Master>
</template>

<script>
import Master from "../layouts/Master";
// import ModuleList from "../layouts/partials/ModuleList.vue"
export default {
  name: "Profile",
  components: {
    Master,
    // ModuleList
  },
};
</script>

<style  scoped>
.btn_right_password {
  float: right;
}
/* input[type="file"] {
color: rgba(0, 0, 0, 0)
} */
.input--file {
  position: relative;
  color: #7f7f7f;
}

.input--file input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.camera_size {
 font-size:23px;
}

</style>