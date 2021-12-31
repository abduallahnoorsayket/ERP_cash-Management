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
                  v-model="message"
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
                   @click="searchNotification(seen=null)"
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
                  @click="searchNotification(seen=null)" 
                  
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
         <div class="card comment_card_color">
        <div class="card-body">
          <div class="float-right">
            <router-link to="/notification">
            <div class="checkbox checkbox-inline form-check form-check-inline">
             <button class="btn btn-primary waves-effect waves-light btn-xs" >All</button>
            </div>
            </router-link>
            <div
              class="
                checkbox checkbox-success checkbox-inline
                form-check form-check-inline
              "
            >
            <button class="btn btn-primary waves-effect waves-light btn-xs" @click="searchNotification(seen=false)"> Unseen</button>
            </div>
          
          </div>

          <h4 class="header-title mb-4">Notification List</h4>

          <div class="row">
            <div class="col-md-12">
              <div  v-for="(notification, k) in notification_list" :key="k">
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
                  <strong class="mr-auto">By - {{notification.first_name}} {{notification.last_name}}({{notification.created_by.username}})</strong>
                  <small>{{notification.created_at}}</small>
                  <button
                    type="button"
                    class="ml-2 close"
                    data-dismiss="toast"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <button
                    type="button"
                    class="ml-2 close"
                    data-dismiss="toast"
                    aria-label="Close"
                    v-if="!notification.views"
                     @click="markAsSeen(notification)"
                  >
                    <span aria-hidden="true" title="Mark as seen">&#10003;</span>
                  </button>
                </div>
                <div class="toast-body cursor_notification" @click="notificationDetails(notification)">
                 <a> {{notification.message}} </a>
                </div>
              </div>
             </div>
           
            </div>
          </div>
        </div>
      </div>
        </div>
        <div class="col-md-12"> 
    <Pagination :pagination="pagination" /> 
        </div>
      </div>
</template>

<script>
import axios from "@/axios";
// import Swal from "sweetalert2";
import NAVIGATE from "../Navigation";
import Pagination from "@/components/layouts/partials/Pagination";

export default {
  name: "NotificationList",
  components: {
    Pagination,
  },
  data() {
    return {
     notification_list: null,
     content_type : null,
     content: null,
     message: null,
     created_by: null,
     members: null,
     object_id: null,
     seen: null,
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
   
    getNotificationList: function () {
      let endPoint = "notification/";
      var queryParam = {
        object_id: this.$route.query.object_id,
        message: this.$route.query.message,
        content_type: this.$route.query.content_type,
        created_by: this.$route.query.created_by,
        seen: this.$route.query.seen,
        page: this.$route.query.page,
      };
      axios
        .get(endPoint, {
          params: queryParam,
        })
        .then((response) => {
          this.notification_list = response.data.results;
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
  
    notificationDetails: function (notification) {
      // console.log('124',notification.views)
      if(notification.views) {
        console.log('notify true go to object page')
          this.goToNotificationPage(notification)
      } else {
        this.markAsSeen(notification)
      }
    },
     goToNotificationPage: function (notification) {
      let redirect_path = NAVIGATE[notification.content_type.app_label + "__" + notification.content_type.model]
      this.$router.push(`/${redirect_path}/` + notification.object_id)
      // this.$router.push(`/project-requisition-details/` + notification.object_id)
    },

      searchNotification() {
        // console.log('251',this.seen)
      this.$router.push({
        path: "notification",
        query: {
          content_type: this.content,
          message: this.message,
          object_id: this.object_id,
          created_by: this.created_by,
          seen: this.seen,
        },
      });
    },
    
  markAsSeen: function (notification) {
        axios
        .patch(`notification/${notification.id}/`,{
          views: true
        })
        .then(() => {
          this.getNotificationList();
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
  },
  watch: {
    $route(to,from) {
    console.log("to",to)
    console.log("from",from)
      this.getNotificationList();
 
    }
  },
  created() {
    this.getNotificationList();
    this.getContentType()
    this.getMembers()
  },

};
</script>

<style  scoped>
.unseen {
    color: #16181b;
    text-decoration: none;
    background-color: #f8f9fa;
    border-bottom: 1px solid white;
}
.cursor_notification {
  cursor: pointer;
}
</style>