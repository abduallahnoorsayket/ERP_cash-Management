<template>

        <div class="account-pages my-5 pt-md-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="text-center pb-1">
                            <a href="index.html">
                                <span><img src="assets/images/logo.png" alt="" height="18"></span>
                            </a>
                            <h5 class="font-14 text-muted mt-3">Please Login with Username and Password</h5>
                        </div>
                        <div class="card mt-4">

                            <div class="card-body p-4">
                                <div class="text-center mb-4">
                                    <h5 class="text-uppercase">Sign In</h5>
                                </div>
                                
                                <form action="#" class="p-2">

                                    <div class="form-group mb-3">
                                        <input class="form-control" type="email" required="" placeholder="Enter your email">
                                    </div>

                                    <div class="form-group mb-3">
                                        <input class="form-control" type="password" required="" placeholder="Enter your password">
                                    </div>

                                    <div class="form-group mb-3">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="checkbox-signin">
                                            <label class="custom-control-label" for="checkbox-signin">Remember me</label>
                                        </div>
                                    </div>

                                    <div class="form-group mb-4">
                                       <button class="btn btn-primary btn-bordered-primary btn-block waves-effect waves-light" type="submit"> Log In </button>
                                    </div>

                                    <a href="pages-recoverpw.html" class="text-muted"><i class="mdi mdi-lock mr-1"></i> Forgot your password?</a>

                                </form>

                                



                            </div> <!-- end card-body -->
                        </div>
                        <!-- end card -->

                       
                        <!-- end row -->

                    </div> <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
   
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style  scoped>

</style>