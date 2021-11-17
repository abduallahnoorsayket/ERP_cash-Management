<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Group Update" />

      <div class="card">
        <div class="card-body">
          <form @submit.prevent="submitUserForm" autocomplete="off">
            <div class="row ">
              <div class="col-md-12">
                <div class="form-group ">
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form_data.name"
                    :class="{ 'parsley-error': errors && errors.name }"
                  />
                  <ValidationError :error="errors.name" v-if="errors" />
                </div>

                <div class="form-group">
                  <label>User Permissions</label>
                  <div class="p-listbox p-component">
                    <!-- <div class="p-listbox-header">
                      <div class="p-listbox-filter-container">
                        <input
                          type="text"
                          class="p-listbox-filter p-inputtext p-component"
                          v-model="searchQuery"
                          placeholder="Filter"
                        />
                        <span class="p-listbox-filter-icon pi pi-search"></span>
                      </div>
                    </div> -->
                    <div class="p-listbox-list-wrapper">
                      <div
                        role="listbox"
                        aria-multiselectable="multiple"
                        class="p-listbox-list permission-custom-height"
                      >
                        <div
                          class="module-permission-section"
                        >
                          <div class="main-card lastActivityCard">
                            <h5 class="listTitle">Base Module</h5>
                          </div>
                          <div class="row module">
                            <div class="col-md-12">
                              <div class="p-listbox-item">
                                <label class="form-check-label">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                  />
                                  <span class="checkmark"></span>
                                    Base Module
                                </label>
                              </div>
                            </div>
                          </div>
                           <div class="row submodule">
                              <div class="col-md-12">
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 600"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    User Management
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="row permission_name">
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    User Add
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    User Edit
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    User Delete
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    User View
                                  </label>
                                </div>
                                
                              </div>
                            </div>
                            <div class="row submodule">
                              <div class="col-md-12">
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 600"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Group Management
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="row permission_name">
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Group Add
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Group Edit
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Group Delete
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Group View
                                  </label>
                                </div>
                                
                              </div>
                            </div>
                            <div class="row submodule">
                              <div class="col-md-12">
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 600"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Depertment Management
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="row permission_name">
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Depertment Add
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Depertment Edit
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Depertment Delete
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Depertment View
                                  </label>
                                </div>
                                
                              </div>
                            </div>
                             <div class="row submodule">
                              <div class="col-md-12">
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 600"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Client Management
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="row permission_name">
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Client Add
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Client Edit
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Client Delete
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Client View
                                  </label>
                                </div>
                                
                              </div>
                            </div>
                             <div class="row submodule">
                              <div class="col-md-12">
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 600"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Item Management
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="row permission_name">
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Item Add
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Item Edit
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Item Delete
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Item View
                                  </label>
                                </div>
                                
                              </div>
                            </div>
                             <div class="row submodule">
                              <div class="col-md-12">
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 600"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Unit Management
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="row permission_name">
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Unit Add
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Unit Edit
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Unit Delete
                                  </label>
                                </div>
                                
                              </div>
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                    />
                                    <span class="checkmark"></span>
                                    Unit View
                                  </label>
                                </div>
                                
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>



                  <!-- <input
                    type="text"
                    class="form-control search-input"
                    autocomplete="off"
                    placeholder="search..."
                    v-model="searchQuery"
                  />
                  <div class="scr_view">
                    <div
                      class="cus_check_padding checkbox-primary"
                      v-for="p in resultQuery"
                      :key="p.id"
                    >
                      <input
                        :id="p.id"
                        type="checkbox"
                        name="form_data.permissions[]"
                        unchecked=""
                        v-model="form_data.permissions"
                        :value="p.id"
                      />
                      <label for="checkbox"> {{ p.name }} </label>
                    </div>
                    <ValidationError
                      :error="errors.permissions"
                      v-if="errors"
                    />
                  </div> -->
                </div>

              </div>
              <!-- end col -->

              <div class="col-md-6">
                
              </div>
              <!-- end col -->

              <div class="col-md-12">
                <div class="form-group">
                  <button
                    @submit.prevent="submitUserForm"
                    type="submit"
                    class="btn btn-primary waves-effect waves-light cus_right"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          <!-- end row -->
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
import ValidationError from "@/components/layouts/partials/ValidationError.vue";
// import permissions from "@/permisson";

export default {
  name: "GroupCreate",
  components: {
    Layout,
    PageTitle,
    ValidationError,
  },
  data() {
    return {
      errors: null,
      user_permissions: null,
      searchQuery: null,
      form_data: {
        name: null,
        permissions: [],
      },
    };
  },
  methods: {
    getGroupsEditData: function () {
      axios
        .get(`groups/${this.$route.params.id}/`)
        .then((response) => {
          this.form_data.name = response.data.name;
          this.form_data.permissions = response.data.permissions.map(
            (permission) => permission.id
          );

          this.getPermission();
        })
        .catch((err) => {
          console.log("error", err);
        });
    },

    getPermission: function () {
      axios
        .get("permissions")
        .then((response) => {
          this.user_permissions = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    submitUserForm: function () {
      axios
        .put("groups/" + this.$route.params.id + "/", this.form_data)
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "You have successfully Updated a Group.",
          }).then(() => {
            this.$router.push({ name: "GroupList" });
          });
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
  },
  created() {
    this.getPermission();
    this.getGroupsEditData();
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.user_permissions.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.user_permissions;
      }
    },
  },
};
</script>

<style scoped>
.cus_right {
  float: right;
}
.scr_view {
  overflow-y: scroll;
  height: 150px;
}
.cus_check_padding label {
  padding-left: 8px;
}
.lastActivityCard {
    /* background: #e6f7f4; */
    background: #f6627247;
    padding: 1px;
    border-left: 2px solid #F66272;
    border-radius: 1px;
    margin: 0px 0px 15px 0px;
  }
  .listTitle {
    margin-left: 10px;
    margin-top: 10px;
  }
</style>