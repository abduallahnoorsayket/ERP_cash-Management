<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Department List" />

      <div class="row">
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
                    <tr
                      v-for="(user, index) in user_list"
                      :key="index"
                    >
                      <td scope="row">{{ user.first_name }}</td>
                      <td scope="row">{{ user.last_name }}</td>
                      <td scope="row">{{ user.username }}</td>
                      <td scope="row">{{ user.email }}</td>
                      <td scope="row">
                        <span class="badge badge-info" v-for="u in user.groups" :key="u.id">
                             {{ u.name }}
                        </span>
                       
                        </td>
                        <td>
                          {{user.last_login}}
                        </td>
                      <td scope="row">
                        <i :class="[user.is_active ? 'fas fa-check-circle  ' : 'fas fa-times-circle']"></i>
                      </td>
                  


                      <td>
                        <div class="btn-group dropdown mt-2 mr-1">
                        
                          <button
                            type="button"
                            class="
                              btn btn-primary btn-sm
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
                           
                            <li>
                              <router-link :to="{name: 'UserEdit', params: { id: user.id },}" class="dropdown-item"> <i class="fas fa-edit"></i> Edit </router-link>
                            </li>
                            <li>
                              <a href="#" @click="userDelete(user.id)"  class="dropdown-item"> <i class="fas fa-trash"></i> Delete</a>
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
      </div>
    </template>
  </Layout>
</template>

<script>
import axios from "@/axios";
import Layout from "../Layout.vue";
import PageTitle from "@/components/layouts/partials/PageTitle";
import Swal from "sweetalert2";

export default {
  name: "DepartmentList",
  components: {
    Layout,
    PageTitle,
  },
  data() {
    return {
      user_list: null,
    };
  },
  methods: {
    getUserList: function () {
      axios.get("users/").then((response) => {
        this.user_list = response.data.results;
      })
      .catch(function (error) {
          console.log(error);
        });
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
    }
  },
  created() {
    this.getUserList();
  },
};
</script>

<style lang="scss" scoped>
</style>