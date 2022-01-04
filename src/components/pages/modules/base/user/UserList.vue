<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="User List" />

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-2">
                 <div class="form-group">
                  <label>First Name</label>
                   <input
                    type="text"
                    class="form-control"
                    v-model="first_name"
                  />
                
                </div>
                
                </div>
                   <div class="col-lg-2">
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

                 

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-sm mb-0 table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Username</th>
                      <th scope="col">Email</th>
                      <th scope="col">Groups</th>
                      <th scope="col">Last Login</th>

                      <th scope="col">Active</th>

                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user, index) in user_list" :key="index">
                      <td scope="row">{{ user.first_name }}</td>
                      <td scope="row">{{ user.last_name }}</td>
                      <td scope="row">{{ user.username }}</td>
                      <td scope="row">{{ user.email }}</td>
                      <td scope="row">
                        <span
                          class="badge badge-info"
                          v-for="u in user.groups"
                          :key="u.id"
                        >
                          {{ u.name }}
                        </span>
                      </td>
                      <td>
                        {{ user.last_login }}
                      </td>
                      <td scope="row">
                        <i
                          :class="[
                            user.is_active
                              ? 'fas fa-check-circle  '
                              : 'fas fa-times-circle',
                          ]"
                        ></i>
                      </td>

                      <td>
                        <div class="btn-group dropdown mt-2 mr-1">
                          <button
                            type="button"
                            class="
                              btn btn-primary btn-xs
                              dropdown-toggle
                              waves-effect waves-light
                            "
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="fa fa-cog ml-1"></i>
                          </button>
                          <ul class="dropdown-menu">
                            <li v-if="hasPermission('change_user')">
                              <router-link
                                :to="{
                                  name: 'UserEdit',
                                  params: { id: user.id },
                                }"
                                class="dropdown-item"
                              >
                                <i class="fas fa-edit"></i> Edit
                              </router-link>
                            </li>
                            <li v-if="hasPermission('delete_user')">
                              <a
                                href="#"
                                @click="userDelete(user.id)"
                                class="dropdown-item"
                              >
                                <i class="fas fa-trash"></i> Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
       <div class="col-md-12"> 
    <Pagination :pagination="pagination" /> 
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

export default {
  name: "DepartmentList",
  components: {
    Layout,
    PageTitle,
    Pagination
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
    getUserList: function (e) {

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
    this.getUserList();
    this.getGroups();
  },
   updated() {
    this.getUserList()
  }
};
</script>

<style lang="scss" scoped>
</style>