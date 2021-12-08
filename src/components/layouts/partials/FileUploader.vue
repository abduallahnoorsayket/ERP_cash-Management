<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md col-lg">
              <div class="form-group">
                <label>Upload file</label>
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="validatedCustomFile"
                    required
                  />
                  <label class="custom-file-label" for="validatedCustomFile"
                    >Choose file...</label
                  >
                  <div class="invalid-feedback">
                    Example invalid custom file feedback
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md col-lg">
              <div class="form-group">
                <label>File Name</label>
                      <div class="form-group">
                        <input v-model="file_name" type="text" class="form-control" />
                      </div>
              </div>
            </div>
             <div class="col-md-1 col-lg-1">
                       <div class="form-group mt-1">
                     <label style="visibility: hidden">fgggggggf</label>
                     <button
                            type="button"
                            class="
                              btn btn-primary btn-sm
                              
                              waves-effect waves-light
                              pull-left
                            "
                    
                            
                          >
                          <!-- @click="searchUser()" -->
                            Submit
                          </button>
                  
                  </div>
                    </div>
          </div>
          <div class="col-lg-11 mt-4">
            <div class="row">
              <div class="col-xl-2 col-md-2">
                <div class="fileContainer">
                  <div class="card widget-user">
                    <div class="card-body">
                      <h3
                        class="text-primary text-center"
                        data-plugin="counterup"
                      >
                        <i class="far fa-file-alt"></i>
                      </h3>
                      <h5 class="font-16 text-center">Project Requirements</h5>
                    </div>
                    <div class="row pr-2 pb-1">
                      <div class="col-md-12">
                        <span class="downloadButton float-right"
                          ><i class="fas fa-download"></i
                        ></span>
                      </div>
                    </div>
                   
                  </div>
                
                </div>
              </div>

              <div class="col-xl-2 col-md-2">
                <div class="card widget-user">
                  <div class="card-body text-center">
                    <h3 class="text-primary" data-plugin="counterup">
                      <i class="far fa-file-alt"></i>
                    </h3>
                    <h5 class="font-16">System Requirements</h5>
                  </div>
                  <div class="row pr-2 pb-1">
                    <div class="col-md-12">
                      <span class="downloadButton float-right"
                        ><i class="fas fa-download"></i
                      ></span>
                    </div>
                  </div>
                 
                </div>
              </div>

              <div class="col-xl-2 col-md-2">
                <div class="card widget-user">
                  <div class="card-body text-center">
                    <h3 class="text-primary" data-plugin="counterup">
                      <i class="far fa-file-alt"></i>
                    </h3>
                    <h5 class="font-16">Monthly evaluation</h5>
                  </div>
                  <div class="row pr-2 pb-1">
                    <div class="col-md-12">
                      <span class="downloadButton float-right"
                        ><i class="fas fa-download"></i
                      ></span>
                    </div>
                  </div>
                 
                </div>
              </div>

              <div class="col-xl-2 col-md-2">
                <div class="card widget-user">
                  <div class="card-body text-center">
                    <h3 class="text-primary" data-plugin="counterup">
                      <i class="far fa-file-alt"></i>
                    </h3>
                    <h5 class="font-16">Attendance records</h5>
                  </div>
                  <div class="row pr-2 pb-1">
                    <div class="col-md-12">
                      <span class="downloadButton float-right"
                        ><i class="fas fa-download"></i
                      ></span>
                    </div>
                  </div>
                 
                </div>
              </div>
              <div class="col-xl-2 col-md-2">
                <div class="fileContainer">
                  <div class="card widget-user">
                    <div class="card-body">
                      <h3
                        class="text-primary text-center"
                        data-plugin="counterup"
                      >
                        <i class="far fa-file-alt"></i>
                      </h3>
                      <h5 class="font-16 text-center">Project Requirements</h5>
                    </div>
                    <div class="row pr-2 pb-1">
                      <div class="col-md-12">
                        <span class="downloadButton float-right"
                          ><i class="fas fa-download"></i
                        ></span>
                      </div>
                    </div>
                   
                  </div>
                
                </div>
              </div>

              <div class="col-xl-2 col-md-2">
                <div class="card widget-user">
                  <div class="card-body text-center">
                    <h3 class="text-primary" data-plugin="counterup">
                      <i class="far fa-file-alt"></i>
                    </h3>
                    <h5 class="font-16">System Requirements</h5>
                  </div>
                  <div class="row pr-2 pb-1">
                    <div class="col-md-12">
                      <span class="downloadButton float-right"
                        ><i class="fas fa-download"></i
                      ></span>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>

            <!-- <Pagination :pagination="pagination" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileUploader",
};
</script>

<style scoped>
.card-body{
    padding: 1.25rem 1.25rem 0rem 1.25rem;
}
.font-16 {
    font-size: 12px!important;
}
</style>
