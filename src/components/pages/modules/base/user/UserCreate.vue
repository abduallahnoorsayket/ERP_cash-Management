<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="User Create" />

      <div class="card">
        <div class="card-body">
          <form @submit.prevent="submitUserForm" autocomplete="off">
            <div class="row">
                <div class="col-md-6">
                <div class="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                    v-model="form_data.first_name"
                    :class="{ 'parsley-error': errors && errors.first_name }"
                  />
                  <ValidationError :error="errors.first_name" v-if="errors" />
                </div>
                 <div class="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form_data.username"
                    :class="{ 'parsley-error': errors && errors.username }"
                  />
                  <ValidationError :error="errors.username" v-if="errors" />
                </div>
                 
                 
               
              </div>
              <div class="col-md-6">
                   <div class="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                    v-model="form_data.last_name"
                    :class="{ 'parsley-error': errors && errors.last_name }"
                  />
                  <ValidationError :error="errors.last_name" v-if="errors" />
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                    v-model="form_data.email"
                    :class="{ 'parsley-error': errors && errors.email }"
                  />
                  <ValidationError :error="errors.email" v-if="errors" />
                </div>
                
              </div>
            </div>
              
              <!-- end col -->
              <div class="row">
                <div class="col-md-12">
                <div class="form-group">
                  <label>Password </label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="form_data.password"
                    :class="{ 'parsley-error': errors && errors.password }"
                  />
                  <ValidationError :error="errors.password" v-if="errors" />
                </div>
              </div>
              </div>
             
             <div class="row">
                <div class="col-md-6">
                  <div class="form-group ml-1">
                  <label>Active </label>
                  <div class="cus_check_padding  checkbox-primary">
                    <input
                      id="checkbox"
                      type="checkbox"
                      unchecked=""
                      v-model="form_data.is_active"
                    />
                    <label for="checkbox"
                      >{{ form_data.is_active == true ? "Yes" : "No" }}
                    </label>
                  </div>
                </div>
              

              </div>
              <div class="col-md-6">
                   <div class="form-group ml-1">
                  <label>Superuser </label>
                  <div class="cus_check_padding checkbox-primary">
                    <input
                      id="checkbox1"
                      type="checkbox"
                      unchecked=""
                      v-model="form_data.is_superuser"
                    />
                    <label for="checkbox"
                      >{{ form_data.is_superuser == true ? "Yes" : "No" }}
                    </label>
                  </div>
                </div>
              </div>
             </div>
              <!-- end col -->
             <div class="row">
                <div class="col-md-12">
                <div class="form-group">
                  <label>User Groups</label>
                  <input
                    type="text"
                    class="form-control search-input"
                    autocomplete="off"
                    placeholder="search..."
                    v-model="group_search"
                  />
                  <div class="scr_view">
                    <div
                      class="cus_check_padding checkbox-primary"
                      v-for="g in filterGroups"
                      :key="g.id"
                    >
                      <input
                        :id="g.id"
                        type="checkbox"
                        name="form_data.groups[]"
                        unchecked=""
                        v-model="form_data.groups"
                        :value="g.id"
                      />
                      <label for="checkbox"> {{ g.name }} </label>
                    </div>
                    <ValidationError :error="errors.groups" v-if="errors" />
                  </div>
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
                    v-model="searchQuery"
                    class="form-control search-input"
                    autocomplete="off"
                    placeholder="search..."
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
                        name="form_data.user_permissions[]"
                        unchecked=""
                        v-model="form_data.user_permissions"
                        :value="p.id"
                      />
                      <label for="checkbox"> {{ p.name }} </label>
                    </div>
                    <ValidationError
                      :error="errors.user_permissions"
                      v-if="errors"
                    />
                  </div> -->
                </div>
                

              </div>
             </div>

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
  name: "UserCreate",
  components: {
    Layout,
    PageTitle,
    ValidationError,
  },
  data() {
    return {
      errors: null,
      searchQuery: null,
      user_permissions: null,
      groups: null,
      group_search: null,
      form_data: {
        is_active: false,
        is_superuser: false,
        first_name: null,
        last_name: null,
        password: null,
        username: null,
        email: null,
        user_permissions: [],
        groups: [],
      },
    };
  },
  methods: {
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

    getGroups: function () {
      axios
        .get("group_short_list")
        .then((response) => {
          this.groups = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    // getPermissions: function () {
    //   this.can_verify_requisition = permissions.hasPermission(
    //     "verify_project_requisition"
    //   );
    //   this.can_approve_requisition = permissions.hasPermission(
    //     "approve_project_requisition"
    //   );

    //   this.can_delete_requisition = permissions.hasPermission(
    //     "delete_projectrequisition"
    //   );
    //   this.can_edit_requisition = permissions.hasPermission(
    //     "change_projectrequisition"
    //   );
    //   this.is_superuser = permissions.is_superuser();
    // },

    submitUserForm: function () {
      axios
        .post("users/", this.form_data)
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "You have successfully created a User.",
          }).then(() => {
            this.$router.push("user-list");
          });
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
  },
  created() {
    this.getGroups();
    this.getPermission();
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

    filterGroups() {
      if (this.group_search) {
        return this.groups.filter((item) => {
          return this.group_search.toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.groups;
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
/* list box height */
.permission-custom-height{
  height: 500px !important;
}
</style>