<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Department List" />

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-11">
                  <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="name" />
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
                      @click="searchDepartment()"
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
                <table class="table table-hover mb-0 table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>

                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(dept, index) in all_dep_list" :key="index">
                      <td scope="row">{{ dept.name }}</td>

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
                            <li v-if="hasPermission('change_department')">
                              <router-link
                                :to="{
                                  name: 'DepartmentEdit',
                                  params: { id: dept.id },
                                }"
                                class="dropdown-item"
                              >
                                <i class="fas fa-edit"></i> Edit
                              </router-link>
                            </li>
                            <li v-if="hasPermission('delete_department')">
                              <a
                                href="#"
                                @click="deptDelete(dept.id)"
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
      all_dep_list: null,
      name: null,
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
    getDeptList: function () {
      let endPoint = "departments/"
      var queryParam = {
        name: this.$route.query.name,
        page: this.$route.query.page,
      }
      axios
        .get(endPoint, {
          params: queryParam
        })
        .then((response) => {
          this.all_dep_list = response.data.results;
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

    deptDelete: function (id) {
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
          axios.delete("departments/" + id + "/").then((response) => {
            if (response.status === 204) {
              this.getDeptList();
            }
          });
          Swal.fire("Deleted!", "Department has been deleted!!", "success");
        } else {
          Swal.fire("Cancelled", "Department has not been deleted !", "error");
        }
      });
    },

     // search section start 
      searchDepartment() {

      this.$router.push({
        path: "department-list",
        query: {
          name: this.name,
        },
      });

    }
  },
  created() {
    this.getDeptList();
  },
  updated() {
    this.getDeptList()
  }
};
</script>

<style lang="scss" scoped>
</style>