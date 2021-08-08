<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Unit List" />

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover mb-0 table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Status</th>
               
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(unit, index) in unit_list"
                      :key="index"
                    >
                      <td scope="row">{{ unit.name }}</td>
                      <td scope="row">
                        <i :class="[unit.status ? 'fas fa-check-circle  ' : 'fas fa-times-circle']"></i>
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
                              <router-link :to="{name: 'UnitsEdit', params: { id: unit.id },}" class="dropdown-item"> <i class="fas fa-edit"></i> Edit </router-link>
                            </li>
                            <li>
                              <a href="#" @click="unitDelete(unit.id)"  class="dropdown-item"> <i class="fas fa-trash"></i> Delete</a>
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
  name: "UnitList",
  components: {
    Layout,
    PageTitle,
  },
  data() {
    return {
      unit_list: null,
    };
  },
  methods: {
    getItemList: function () {
      axios.get("units/").then((response) => {
        this.unit_list = response.data;
      })
      .catch(function (error) {
          console.log(error);
        });
    },
      unitDelete: function (id) {
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
          axios.delete("units/" + id + "/").then((response) => {
            if (response.status === 204) {
              this.getItemList();
            }
          });
          Swal.fire("Deleted!", "Unit has been deleted!!", "success");
        } else {
          Swal.fire("Cancelled", "Unit has not been deleted !", "error");
        }
      });
    }
  },
  created() {
    this.getItemList();
  },
};
</script>

<style lang="scss" scoped>
</style>