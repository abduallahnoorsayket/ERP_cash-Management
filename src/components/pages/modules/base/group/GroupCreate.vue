<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Group Create" />

      <div class="card">
        <div class="card-body">
          <form @submit.prevent="submitUserForm" autocomplete="off">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
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

              <!-- <div class="col-md-6">
               
              </div> -->
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
// import ValidationError from "@/components/layouts/partials/ValidationError.vue";
// import permissions from "@/permisson";

export default {
  name: "GroupCreate",
  components: {
    Layout,
    PageTitle,
    // ValidationError,
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
        .post("groups/", this.form_data)
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "You have successfully created a Group.",
          }).then(() => {
            this.$router.push("group-list");
          });
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
  },
  created() {
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
/*  new permission UI */
.p-listbox .p-listbox-list {
  /* padding: 0.5rem 0; */
  /* height: 485px; */
  height: auto !important;
  padding: 0.2rem 1.5rem;
}
.lastActivityCard {
  /* background: #e6f7f4; */
  background: #d8f3e5;
  padding: 1px;
  border-left: 2px solid #69c5a5;
  border-radius: 1px;
  margin: 0px 0px 15px 0px;
}
.listTitle {
  margin-left: 10px;
  margin-top: 10px;
}
.submodule {
  margin-left: 40px;
}
.permission_name {
  margin-left: 100px;
  margin-bottom: 15px;
}
.module-permission-section {
  margin: 15px 0px 30px 0px;
}
.module {
  margin: 20px 0px 10px 10px;
}
.is_checked {
  color: red;
}
/* new styles */
.p-listbox {
    background: #fff;
    color: #495057;
    border: 1px solid #ced4da;
    border-radius: 3px;
}
/*  new list box style */

.p-listbox {
  background: #fff;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: 3px;
}
.p-component {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 1rem;
  font-weight: 400;
}
.p-listbox .p-listbox-header {
  padding: 0.5rem 0.5rem;
  border-bottom: 0 none;
  color: #495057;
  background: #f5f5f5;
  margin: 0;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.p-component,
.p-component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.p-listbox-filter-container,
.p-listbox-item {
  position: relative;
}

.p-listbox .p-listbox-header .p-listbox-filter {
  padding-right: 1.5rem;
  width: 100%;
  outline: none;
}

.p-fluid .p-inputtext {
  width: 100%;
}
.p-inputtext {
  margin: 0;
}

.p-inputtext {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 14px;
  color: #495057;
  background: #fff;
  padding: 0.3rem 0.5rem;
  border: 1px solid #ced4da;
  -webkit-transition: background-color 0.2s, color 0.2s, border-color 0.2s, -webkit-box-shadow 0.2s;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, -webkit-box-shadow 0.2s;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, -webkit-box-shadow 0.2s;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 3px;
}

.p-listbox .p-listbox-header .p-listbox-filter-icon {
  right: 0.5rem;
  color: #6c757d;
}


.p-link,
.pi {
  font-size: 1rem;
}
.p-listbox-filter-icon {
  position: absolute;
  top: 50%;
  margin-top: -0.5rem;
}

.pi-search:before {
  content: "\E908";
}

.pi:before {
  --webkit-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.p-listbox-list-wrapper {
  overflow: auto;
}
/* .p-listbox .p-listbox-list {
  padding: 0.5rem 0;
} */

.p-listbox-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.p-listbox .p-listbox-list .p-listbox-item {
  margin: 0;
  padding: 0.1rem 1rem;
  border: 0 none;
  color: #495057;
  -webkit-transition: -webkit-box-shadow 0.2s;
  transition: -webkit-box-shadow 0.2s;
  transition: box-shadow 0.2s;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  border-radius: 0;
  font-size: 13px;
  text-transform: capitalize;
}
.p-ink {
  display: block;
  position: absolute;
  background: hsla(0, 0%, 100%, 0.5);
  border-radius: 100%;
  -webkit-transform: scale(0);
  transform: scale(0);
}

.p-listbox .p-listbox-header .p-listbox-filter-icon {
  right: 0.5rem;
  color: #6c757d;
}



.p-link,
.pi {
  font-size: 1rem;
}


.p-listbox .p-listbox-list {
  /* padding: 0.5rem 0; */
  height: 185px;
  padding: 0.2rem 1rem;
}
</style>