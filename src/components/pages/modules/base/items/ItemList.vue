<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="ClientList List" />

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
                      v-for="(item, index) in item_list"
                      :key="index"
                    >
                      <th scope="row">{{ item.name }}</th>
                      <th scope="row">{{ item.status == true ? "Yes" : "No" }}</th>


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
                              <router-link :to="{name: 'ItemEdit', params: { id: item.id },}" class="dropdown-item"> <i class="fas fa-edit"></i> Edit </router-link>
                            </li>
                            <li>
                              <a href="#" @click="itemDelete(item.id)"  class="dropdown-item"> <i class="fas fa-trash"></i> Delete</a>
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
  name: "ItemList",
  components: {
    Layout,
    PageTitle,
  },
  data() {
    return {
      item_list: null,
    };
  },
  methods: {
    getItemList: function () {
      axios.get("items/").then((response) => {
        this.item_list = response.data;
      })
      .catch(function (error) {
          console.log(error);
        });
    },
      itemDelete: function (id) {
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
          axios.delete("items/" + id + "/").then((response) => {
            if (response.status === 204) {
              this.getItemList();
            }
          });
          Swal.fire("Deleted!", "Item has been deleted!!", "success");
        } else {
          Swal.fire("Cancelled", "Item has not been deleted !", "error");
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