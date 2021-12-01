<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Files List" />

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-10 col-lg-10">
                 <div class="form-group">
                  <!-- <label>First Name</label> -->
                   <input
                   placeholder="Search..."
                    type="text"
                    class="form-control"
                    v-model="first_name"
                  />
                
                </div>
                
                </div>
                <div class="col-md col-lg">
                   <div class="form-group mt-1">
                     <!-- <label style="visibility: hidden">fgggggggf</label> -->
                     <button
                            type="button"
                            class="
                              btn btn-primary btn-sm
                              
                              waves-effect waves-light
                              pull-left
                            "
                    
                            
                          >
                          <!-- @click="searchUser()" -->
                            Search
                          </button>
                  
                  </div>

                </div>
                
                   <!-- <div class="col-lg-2">
                 <div class="form-group">
                  <label>Last Name</label>
                   <input
                    type="text"
                    class="form-control"
                    v-model="last_name"
                  />
                
                </div>
                
                </div>
                
                  <div class="col-lg-2">
                   <div class="form-group">
                  <label>Username</label>
                   <input
                    type="text"
                    class="form-control"
                    v-model="username"
                  />
                </div>
                </div>

                 <div class="col-lg-2">
                   <div class="form-group">
                  <label>Groups</label>
                      <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="groups"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(g, i) in group_list" :key="i" :value="g.id">
                      {{ g.name }}
                    </option>
                  </select>
                </div>
                </div>

                  <div class="col-lg-2">
                    <div class="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="email"
                  />
              
                </div>
                </div>
                 

                 

                  <div class="col-lg-1">
                  <div class="form-group ">
                     <label style="visibility: hidden">fgggggggf</label>
                     <button
                            type="button"
                            class="
                              btn btn-primary btn-sm
                              
                              waves-effect waves-light
                              pull-right
                            "
                    
                            @click="searchUser()"
                          >
                            Search
                          </button>
                  
                  </div>

                 

                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                 <div class="form-group">
                  <label>File Name</label>
                   <input
                    type="text"
                    class="form-control"
                    v-model="first_name"
                  />
                
                </div>
                <div class="form-group">
                  <label>Created by</label>
                   <input
                    type="text"
                    class="form-control"
                    v-model="last_name"
                  />
                
                </div>
                <div class="form-group">
                  <label>Created date</label>
                   <input
                    type="date"
                    class="form-control"
                    v-model="username"
                  />
                </div>
                  <div class="form-group">
                  <label>Groups</label>
                      <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="groups"
                  >
                    <option value="false" disabled selected>Select</option>

                    <option v-for="(g, i) in group_list" :key="i" :value="g.id">
                      {{ g.name }}
                    </option>
                  </select>
                </div>
                
                </div>
                   
                 

                  <div class="col-lg-1">
                  <div class="form-group ">
                     <label style="visibility: hidden">fgggggggf</label>
                     <!--   @click="searchUser()" -->
                     <button
                            type="button"
                            class="
                              btn btn-primary btn-sm
                              
                              waves-effect waves-light
                              pull-right
                            "
                    
                          
                          >
                            Search
                          </button>
                  
                  </div>

                 

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
           <div class="row">
                           <div class="col-xl-3 col-md-3">
                             <div class="fileContainer">
                                 <div class="card widget-user">
                                    <div class="card-body ">
                                        <h3 class="text-primary text-center" data-plugin="counterup"> <i class="far fa-file-alt"></i></h3>
                                        <h5 class="font-16 text-center">Project Requirements</h5>
                                        
                                    </div>
                                    <div class="row pr-2">
                                      <div class="col-md-12">
                                        <span class="downloadButton float-right"><i class="fas fa-download"></i></span> 
                                      </div>
                                      </div>                                    
                                    <!-- <span class="downloadButton"><i class="fas fa-download"></i></span> -->
                                    
                                </div>
                                <!-- <div class="middle">
                
                <div class="row">
                  <div class="col-md-12">
                    <div class="text">
                      
                      <br />
                      <span class="fileInfo">
                        <label class="labelRightMargin">File type:</label>
                        <br />
                        
                      </span>
                      <div class="row mt-5">
                        <div class="col-md-12">
                          <span class="float-right" >
                            <a>
                              <i class="fas fa-download" title="Download"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->

                             </div>
                              
                            </div>
        
                            <div class="col-xl-3 col-md-3">
                                <div class="card widget-user">
                                    <div class="card-body text-center">
                                        <h3 class="text-primary" data-plugin="counterup"> <i class="far fa-file-alt"></i></h3>
                                        <h5 class="font-16">System Requirements</h5>
                                    </div>
                                    <div class="row pr-2">
                                      <div class="col-md-12">
                                        <span class="downloadButton float-right"><i class="fas fa-download"></i></span> 
                                      </div>
                                      </div>
                                    <!-- <span class="downloadButton"><i class="fas fa-download"></i></span> -->
                                </div>
                            </div>
        
                            <div class="col-xl-3 col-md-3">
                                <div class="card widget-user">
                                    <div class="card-body text-center">
                                        <h3 class="text-primary" data-plugin="counterup"><i class="far fa-file-alt"></i></h3>
                                        <h5 class="font-16">Monthly evaluation</h5>
                                    </div>
                                    <div class="row pr-2">
                                      <div class="col-md-12">
                                        <span class="downloadButton float-right"><i class="fas fa-download"></i></span> 
                                      </div>
                                      </div>
                                    <!-- <span class="downloadButton"><i class="fas fa-download"></i></span> -->
                                </div>
                                
                            </div>
        
                            <div class="col-xl-3 col-md-3">
                                <div class="card widget-user">
                                    <div class="card-body text-center">
                                        <h3 class="text-primary" data-plugin="counterup"><i class="far fa-file-alt"></i></h3>
                                        <h5 class="font-16">Attendance records</h5>
                                    </div>
                                    <div class="row pr-2">
                                      <div class="col-md-12">
                                        <span class="downloadButton float-right"><i class="fas fa-download"></i></span> 
                                      </div>
                                      </div>
                                    <!-- <span class="downloadButton"><i class="fas fa-download"></i></span> -->
                                </div>
                            </div>
                        </div>
                        <div class="row">
                           <div class="col-xl-3 col-md-3">
                             <div class="fileContainer">
                                 <div class="card widget-user">
                                    <div class="card-body ">
                                        <h3 class="text-primary text-center" data-plugin="counterup"> <i class="far fa-file-alt"></i></h3>
                                        <h5 class="font-16 text-center">Project Requirements</h5>
                                        
                                    </div>
                                    <div class="row pr-2">
                                      <div class="col-md-12">
                                        <span class="downloadButton float-right"><i class="fas fa-download"></i></span> 
                                      </div>
                                      </div>                                    
                                    <!-- <span class="downloadButton"><i class="fas fa-download"></i></span> -->
                                    
                                </div>
                                <!-- <div class="middle">
                
                <div class="row">
                  <div class="col-md-12">
                    <div class="text">
                      
                      <br />
                      <span class="fileInfo">
                        <label class="labelRightMargin">File type:</label>
                        <br />
                        
                      </span>
                      <div class="row mt-5">
                        <div class="col-md-12">
                          <span class="float-right" >
                            <a>
                              <i class="fas fa-download" title="Download"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->

                             </div>
                              
                            </div>
        
                            <div class="col-xl-3 col-md-3">
                                <div class="card widget-user">
                                    <div class="card-body text-center">
                                        <h3 class="text-primary" data-plugin="counterup"> <i class="far fa-file-alt"></i></h3>
                                        <h5 class="font-16">System Requirements</h5>
                                    </div>
                                    <div class="row pr-2">
                                      <div class="col-md-12">
                                        <span class="downloadButton float-right"><i class="fas fa-download"></i></span> 
                                      </div>
                                      </div>
                                    <!-- <span class="downloadButton"><i class="fas fa-download"></i></span> -->
                                </div>
                            </div>
        
                            <div class="col-xl-3 col-md-3">
                                <div class="card widget-user">
                                    <div class="card-body text-center">
                                        <h3 class="text-primary" data-plugin="counterup"><i class="far fa-file-alt"></i></h3>
                                        <h5 class="font-16">Monthly evaluation</h5>
                                    </div>
                                    <div class="row pr-2">
                                      <div class="col-md-12">
                                        <span class="downloadButton float-right"><i class="fas fa-download"></i></span> 
                                      </div>
                                      </div>
                                    <!-- <span class="downloadButton"><i class="fas fa-download"></i></span> -->
                                </div>
                                
                            </div>
        
                            <div class="col-xl-3 col-md-3">
                                <div class="card widget-user">
                                    <div class="card-body text-center">
                                        <h3 class="text-primary" data-plugin="counterup"><i class="far fa-file-alt"></i></h3>
                                        <h5 class="font-16">Attendance records</h5>
                                    </div>
                                    <div class="row pr-2">
                                      <div class="col-md-12">
                                        <span class="downloadButton float-right"><i class="fas fa-download"></i></span> 
                                      </div>
                                      </div>
                                    <!-- <span class="downloadButton"><i class="fas fa-download"></i></span> -->
                                </div>
                            </div>
                        </div>
                        <div class="row">
                           <div class="col-xl-3 col-md-3">
                             <div class="fileContainer">
                                 <div class="card widget-user">
                                    <div class="card-body ">
                                        <h3 class="text-primary text-center" data-plugin="counterup"> <i class="far fa-file-alt"></i></h3>
                                        <h5 class="font-16 text-center">Project Requirements</h5>
                                        
                                    </div>
                                    <div class="row pr-2">
                                      <div class="col-md-12">
                                        <span class="downloadButton float-right"><i class="fas fa-download"></i></span> 
                                      </div>
                                      </div>                                    
                                    <!-- <span class="downloadButton"><i class="fas fa-download"></i></span> -->
                                    
                                </div>
                                <!-- <div class="middle">
                
                <div class="row">
                  <div class="col-md-12">
                    <div class="text">
                      
                      <br />
                      <span class="fileInfo">
                        <label class="labelRightMargin">File type:</label>
                        <br />
                        
                      </span>
                      <div class="row mt-5">
                        <div class="col-md-12">
                          <span class="float-right" >
                            <a>
                              <i class="fas fa-download" title="Download"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->

                             </div>
                              
                            </div>
        
                            <div class="col-xl-3 col-md-3">
                                <div class="card widget-user">
                                    <div class="card-body text-center">
                                        <h3 class="text-primary" data-plugin="counterup"> <i class="far fa-file-alt"></i></h3>
                                        <h5 class="font-16">System Requirements</h5>
                                    </div>
                                    <div class="row pr-2">
                                      <div class="col-md-12">
                                        <span class="downloadButton float-right"><i class="fas fa-download"></i></span> 
                                      </div>
                                      </div>
                                    <!-- <span class="downloadButton"><i class="fas fa-download"></i></span> -->
                                </div>
                            </div>
        
                            <div class="col-xl-3 col-md-3">
                                <div class="card widget-user">
                                    <div class="card-body text-center">
                                        <h3 class="text-primary" data-plugin="counterup"><i class="far fa-file-alt"></i></h3>
                                        <h5 class="font-16">Monthly evaluation</h5>
                                    </div>
                                    <div class="row pr-2">
                                      <div class="col-md-12">
                                        <span class="downloadButton float-right"><i class="fas fa-download"></i></span> 
                                      </div>
                                      </div>
                                    <!-- <span class="downloadButton"><i class="fas fa-download"></i></span> -->
                                </div>
                                
                            </div>
        
                            <div class="col-xl-3 col-md-3">
                                <div class="card widget-user">
                                    <div class="card-body text-center">
                                        <h3 class="text-primary" data-plugin="counterup"><i class="far fa-file-alt"></i></h3>
                                        <h5 class="font-16">Attendance records</h5>
                                    </div>
                                    <div class="row pr-2">
                                      <div class="col-md-12">
                                        <span class="downloadButton float-right"><i class="fas fa-download"></i></span> 
                                      </div>
                                      </div>
                                    <!-- <span class="downloadButton"><i class="fas fa-download"></i></span> -->
                                </div>
                            </div>
                        </div>
                        <Pagination :pagination="pagination" /> 
        </div>
       
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <FileUploader/>

        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import axios from "@/axios";
import Layout from "../Layout.vue";
import PageTitle from "@/components/layouts/partials/PageTitle";
import Swal from "sweetalert2";
import permissions from "@/permisson";
import Pagination from "@/components/layouts/partials/Pagination";
import FileUploader from "../partials/FileUploader.vue";

export default {
  name: "FilesList",
  components: {
    Layout,
    PageTitle,
    Pagination,
    FileUploader
  },
  data() {
    return {
      user_list: null,
      first_name: null,
      last_name: null,
      email: null,
      username: null,
      groups: null,
      group_list: null,
      pagination: {
        count: null,
        next: null,
        previous: null,
        showing: 0,
        page: null,
  }
    };
  },
  methods: {
    getUserList: function () {

      let endPoint = "users"
      var queryParam = {
        first_name: this.$route.query.first_name,
        last_name: this.$route.query.last_name,
        email: this.$route.query.email,
        groups: this.$route.query.groups,
        username: this.$route.query.username,
        page: this.$route.query.page,
      }

      axios
        .get(endPoint,{
        params: queryParam
      })
        .then((response) => {
          this.user_list = response.data.results;
          this.pagination.count = response.data.count;
          this.pagination.next = response.data.next;
          this.pagination.previous = response.data.previous;
          this.pagination.showing = response.data.results.length;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    hasModulePermission(...module_name) {
      return permissions.hasModulePermission(...module_name);
    },

    hasModelPermission(model_name) {
      return permissions.hasModelPermission(model_name);
    },

    hasPermission(permission_name) {
      return permissions.hasPermission(permission_name);
    },
    userDelete: function (id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((response) => {
        if (response.isConfirmed) {
          axios.delete("users/" + id + "/").then((response) => {
            if (response.status === 204) {
              this.getUserList();
            }
          });
          Swal.fire("Deleted!", "User has been deleted!!", "success");
        } else {
          Swal.fire("Cancelled", "User has not been deleted !", "error");
        }
      });
    },

    
// search start here
    searchUser() {

      this.$router.push({
        path: "user-list",
        query: {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          groups: this.groups,
          username: this.username,
        },
      });

    },
      getGroups: function () {
      axios
        .get("group_short_list")
        .then((response) => {
          this.group_list = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    // this.getUserList();
    // this.getGroups();
  },
   updated() {
    // this.getUserList()
  }
};
</script>

<style  scoped>
.fa-file-alt:before {
    content: "\f15c";
    font-size: 50px;
}
/* .downloadButton{
  color: red;
} */
.fa-download:before {
    content: "\f019";
    float: right;
}
/* .fileContainer {
  position: relative;
  width: 100%;
}
.fileContainer:hover .middle {
  opacity: 1;
} */
</style>