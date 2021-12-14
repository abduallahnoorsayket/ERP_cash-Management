<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Files List" />
      <div class="row" v-if="files_list">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
               <form action @submit.prevent="searchFileName" autocomplete="off">
                <div class="row">
                <div class="col-md-10 col-lg-10">
                 <div class="form-group">
                  <!-- <label>First Name</label> -->
                   <input
                   placeholder="Search by file name..."
                    type="text"
                    class="form-control"
                     v-model="file_name"
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
                              @click="searchFileName()" 
                          >
                            Search
                          </button>
                  
                  </div>

                </div>
               
                
              </div>
                </form>
              
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                 <div class="form-group">
                  <!-- <label>File Name</label>
                   <input
                    type="text"
                    class="form-control"
                    v-model="file_name"
                  /> -->
                
                </div>
                <div class="form-group">
                  <label>Content type</label>
                   <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="content_type"
                     :class="{ 'parsley-error': errors && errors.content_type }"
                  >
                    <option value="" selected>Select</option>

                    <option v-for="d in all_content_type" :key="d.id" :value="d.id">
                      {{ d.model }}
                    </option>
                  </select>
                
                </div>
                <div class="form-group">
                  <label>Created by</label>
                    <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="created_by"
                     :class="{ 'parsley-error': errors && errors.created_by }"
                  >
                    <option value="" selected>Select</option>

                    <option v-for="d in members" :key="d.id" :value="d.id">
                      {{ d.first_name+''+d.last_name }}
                    </option>
                  </select>
                </div>
                  <div class="form-group">
                  <label>Order by <span class="text-muted">(created at)</span></label>
                      <select
                    class="form-control"
                    data-toggle="select2"
                    v-model="ordering"
                    @change="orderingBy"
                  >
                    <option value="" selected>Select</option>
                    <option value="created_at" >ASC</option>
                    <option value="-created_at" >DSC</option>

                   
                  </select>
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
                    @click="searchFile()" 
                          
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
           <div class="row" v-if="files_list && files_list.length >0">
                           <div class="col-xl-3 col-md-3" v-for="(file,index) in files_list" :key="index">
                             <div class="fileContainer">
                                 <div class="card widget-user">
                                    <div class="card-body ">
                                        <h3 class="text-primary text-center" data-plugin="counterup"> <i class="far fa-file-alt"></i></h3>
                                        <h5 class="font-16 text-center" v-if="file.file_name">{{file.file_name}}</h5>
                                        
                                    </div>
                                    <div class="row pr-2">
                                      <div class="col-md-12">
                                        <span class="downloadButton float-right text-secondary" title="Download" v-if="file.upload_files" >
                                         <a :href="file.upload_files">
                              <i class="fas fa-download"></i>
                            </a>
                                        </span> 
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
        
                            
                        </div>
                        <div v-else class="alert alert-success" role="alert">No Data Found!</div>
                        
                        <Pagination :pagination="pagination" /> 
        </div>
       
      </div>
      <!-- <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <FileUploader/>

        </div>
      </div> -->
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
// import FileUploader from "../../../../layouts/partials/FileUploader.vue";

export default {
  name: "FilesList",
  components: {
    Layout,
    PageTitle,
    Pagination,
    // FileUploader
  },
  data() {
    return {
      files_list: null,
      file_name: null,
      all_content_type:null,
      created_by:null,
      members:null,
      content_type:null,
      ordering:null,
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
    getFilesList: function () {

      let endPoint = "file"
      var queryParam = {
        file_name: this.$route.query.file_name,
        content_type: this.$route.query.content_type,
         ordering:this.$route.query.ordering,
         created_by:this.$route.query.created_by,

        // first_name: this.$route.query.first_name,
        // last_name: this.$route.query.last_name,
        // email: this.$route.query.email,
        // groups: this.$route.query.groups,
        // username: this.$route.query.username,
        // page: this.$route.query.page,
      }

      axios
        .get(endPoint,{
        params: queryParam
      })
        .then((response) => {
          this.files_list = response.data.results;
          this.pagination.count = response.data.count;
          this.pagination.next = response.data.next;
          this.pagination.previous = response.data.previous;
          this.pagination.showing = response.data.results.length;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
      getContenttype: function () {
      axios
        .get("content-type-short-list")
        .then((response) => {
          this.all_content_type = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
     getUsers: function () {
       axios
        .get("project_member")
        .then((response) => {
          this.members = response.data;
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
 orderingBy(){
  this.$router.push({
        path: "files-list",
        query: {
          ordering: this.ordering,
        },
      });
 },
    
// search start here
    searchFile() {
      this.$router.push({
        path: "files-list",
        query: {
          // file_name: this.file_name,
          content_type: this.content_type,
          created_by:this.created_by
        },
      });
    },
     searchFileName() {
      this.$router.push({
        path: "files-list",
        query: {
          file_name: this.file_name,
        },
      });
    },
  },
  created() {
    this.getFilesList();
    this.getContenttype();
    this.getUsers();
  },
   updated() {
    this.getFilesList();
    this.getContenttype();
    this.getUsers();
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
    color: #808080;
}
/* .fileContainer {
  position: relative;
  width: 100%;
}
.fileContainer:hover .middle {
  opacity: 1;
} */
</style>