<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Department List" />

      <div class="row">
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
                    <tr
                      v-for="(dept, index) in all_dep_list"
                      :key="index"
                    >
                      <th scope="row">{{ dept.name }}</th>


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
                              <router-link :to="{name: 'DepartmentEdit', params: { id: dept.id },}" class="dropdown-item"> <i class="fas fa-edit"></i> Edit </router-link>
                            </li>
                            <li>
                              <a href="#" @click="deptDelete(dept.id)"  class="dropdown-item"> <i class="fas fa-trash"></i> Delete</a>
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
      all_dep_list: null,
    };
  },
  methods: {
    getDeptList: function () {
      axios.get("departments/").then((response) => {
        this.all_dep_list = response.data;
      })
      .catch(function (error) {
          console.log(error);
        });
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
    }
  },
  created() {
    this.getDeptList();
  },
};
</script>

<style lang="scss" scoped>
</style>