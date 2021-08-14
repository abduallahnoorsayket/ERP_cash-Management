<template>
  <div class="account-pages my-5 pt-md-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="text-center pb-1">
            <a href="#">
              <span
                >
                <!-- <img src="assets/images/logo1.png" alt="" height="18"
              /> -->
              <h3 style="color:#fe6271">ERP.CASH</h3>
              </span>
            </a>
            <h5 class="font-14 text-muted mt-3">
              Please Login with Username and Password
            </h5>
          </div>
          <div class="card mt-4">
            <div class="card-body p-4">
              <div class="text-center mb-4">
                <h5 class="text-uppercase">Sign In</h5>
                <div v-if="error && error.non_field_errors" class="alert alert-warning">{{error.non_field_errors[0]}}</div>
              </div>

              <form @submit.prevent="handleSubmit" class="p-2">
                <div class="form-group mb-3">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter your username"
                    v-model="username"
                  />
                 <ValidationError :error="error.username" v-if="error" />
                </div>

                <div class="form-group mb-3">
                  <input
                    class="form-control"
                    type="password"
                    placeholder="Enter your password"
                    v-model="password"
                  />
                   <ValidationError :error="error.password" v-if="error"/>
                </div>

                <div class="form-group mb-3">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="checkbox-signin"
                    />
                    <label class="custom-control-label" for="checkbox-signin"
                      >Remember me</label
                    >
                  </div>
                </div>

                <div class="form-group mb-4">
                  <button
                    class="
                      btn btn-primary btn-bordered-primary btn-block
                      waves-effect waves-light
                    "
                    type="submit"
                    @submit.prevent="handleSubmit" 
                  >
                    Log In
                  </button>
                </div>

                <!-- <a href="pages-recoverpw.html" class="text-muted"
                  ><i class="mdi mdi-lock mr-1"></i> Forgot your password?</a
                > -->
              </form>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->

          <!-- end row -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </div>
</template>

<script>
import axios from "@/axios";
// import ValidationError from "../layouts/partials/ValidationError.vue"
import ValidationError from "@/components/layouts/partials/ValidationError.vue"


export default {
    name: "Login",
    components: {
    ValidationError
    },
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    handleSubmit() {
    
      axios
        .post("/login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
           localStorage.setItem("userData",  JSON.stringify(response.data));

          // this.$router.push("/dashboard");
            console.log(120);
          window.location.href = "/dashboard";
        })
        .catch((error) => {
          console.log(error);
          this.error = error.response.data;
          console.log("110", this.error);

        }); // catch
    },
  },
};
</script>

<style  scoped>
</style>