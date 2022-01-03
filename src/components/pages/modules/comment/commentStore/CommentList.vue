<template>
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
                  v-model="comment_body"
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
                   @click="searchComment()"
                >
                 
                  Search
                </button>
              </div>
            </div>
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
                <label>Object Id </label>
                <input type="text" class="form-control" v-model="object_id"/>
              </div>
              <div class="form-group">
                <label>Created By</label>
                <select
                  class="form-control"
                  data-toggle="select2"
                  v-model="created_by"
                >
                  <option  value="false" disabled  selected>Select</option>

                  <option v-for="m in members" :key="m.id" :value="m.id">
                   {{ m.first_name }} {{m.last_name}} ({{m.username}})
                  </option>
                </select>
              </div>
              
          
              <div class="form-group">
                <label>Content Type</label>
                <select
                  class="form-control"
                  data-toggle="select2"
                  v-model="content"
                >
                  <option value="false" disabled selected>Select</option>

                  <option
                   v-for="(c, i) in content_type"
                  :key="i"
                  :value="c.id"
                        >
                   {{c.app_label}} | {{c.model}}
                  </option>
                </select>
              </div>
            </div>

            <div class="col-lg-1">
              <div class="form-group">
                <label style="visibility: hidden">fgggggggf</label>

                <button
                  type="button"
                  class="
                    btn btn-primary btn-sm
                    waves-effect waves-light
                    pull-right
                  "
                  @click="searchComment()" 
                  
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
      <div class="row"></div>
      <div class="card comment_card_color">
        <div class="card-body">
          <!-- <div class="float-right">
            <div class="checkbox checkbox-inline form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1">
                Week
              </label>
            </div>
            <div
              class="
                checkbox checkbox-success checkbox-inline
                form-check form-check-inline
              "
            >
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
                checked=""
              />
              <label class="form-check-label" for="inlineCheckbox2">
                Month
              </label>
            </div>
            <div
              class="
                checkbox checkbox-pink checkbox-inline
                form-check form-check-inline
                mr-0
              "
            >
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option3"
                checked=""
              />
              <label class="form-check-label" for="inlineCheckbox3">
                Year
              </label>
            </div>
          </div> -->

          <!-- <h4 class="header-title mb-4">Comment List</h4> -->

          <div class="row">
            <div class="col-md-12">
              <div  v-for="(comment, k) in comment_list" :key="k">
              <div
                class="toast-bs-custom show mb-3"
                role="alert"
                data-delay="700"
                data-autohide="false"
               
              >
                <div class="toast-header">
                  <img
                    src="assets/images/users/avatar-7.jpg"
                    class="avatar-sm rounded mr-2"
                    alt="..."
                  />
                  <strong class="mr-auto">{{comment.first_name}} {{comment.last_name}}({{comment.created_by.username}})</strong>
                  <small>{{comment.created_datetime}}</small>
                  <button
                    type="button"
                    class="ml-2 close"
                    data-dismiss="toast"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="toast-body">
                  {{comment.comment_body}}
                </div>
              </div>
             </div>
           
            </div>
          </div>
        </div>
      </div>
   
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <Pagination :pagination="pagination" />
    </div>
 
  </div>
</template>

<script>
import axios from "@/axios";
// import Swal from "sweetalert2";
// import permissions from "@/permisson";
import Pagination from "@/components/layouts/partials/Pagination";

export default {
  name: "CommentList",
  components: {
    Pagination,
  },
  data() {
    return {
     comment_list: null,
     content_type : null,
     content: null,
     comment_body: null,
     created_by: null,
     members: null,
     object_id: null,
      pagination: {
        count: null,
        next: null,
        previous: null,
        showing: 0,
        page: null,
      },
    };
  },
  methods: {
   
    getCommentList: function () {
      let endPoint = "comment/";
      var queryParam = {
        object_id: this.$route.query.object_id,
        comment_body: this.$route.query.comment_body,
        content_type: this.$route.query.content_type,
        created_by: this.$route.query.created_by,
        page: this.$route.query.page,
      };
      axios
        .get(endPoint, {
          params: queryParam,
        })
        .then((response) => {
          this.comment_list = response.data.results;
          this.pagination.count = response.data.count;
          this.pagination.next = response.data.next;
          this.pagination.previous = response.data.previous;
          this.pagination.showing = response.data.results.length;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getContentType: function () {
      axios
        .get("content-type-short-list/")
        .then((response) => {
          this.content_type = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

     getMembers: function () {
      axios
        .get("project_member")
        .then((response) => {
          // console.log("252", response.data);
          this.members = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
      searchComment() {
      this.$router.push({
        path: "comment",
        query: {
          content_type: this.content,
          comment_body: this.comment_body,
          object_id: this.object_id,
          created_by: this.created_by,
        },
      });
    },
    
  
  },
  watch: {
    $route(to,from) {
    console.log("to",to)
    console.log("from",from)
      this.getCommentList();
 
    }
  },
  created() {
    this.getCommentList();
    this.getContentType()
    this.getMembers()
  },

};
</script>

<style  scoped>

</style>