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
                    v-model="name"
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
                          v-for="(module_obj, perm_index) in user_permissions"
                          :key="perm_index"
                        >
                          <div class="main-card lastActivityCard">
                            <h5 class="listTitle">
                              {{ module_obj.module }} Module
                            </h5>
                          </div>
                          <div class="row module">
                            <div class="col-md-12">
                              <div class="p-listbox-item">
                                <label class="form-check-label">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    @click="ModuleClick($event, perm_index)"
                                    :id="'module_' + perm_index"
                                  />
                                  <span class="checkmark"></span>
                                  {{ module_obj.module }} Module
                                </label>
                              </div>
                            </div>
                          </div>
                          <template
                            v-for="(model, m_index) in module_obj.models"
                            :key="m_index"
                          >
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
                                      @click="
                                        ModelClick($event, perm_index, m_index)
                                      "
                                      :id="
                                        'module_' +
                                        perm_index +
                                        '_model_' +
                                        m_index
                                      "
                                    />
                                    <span class="checkmark"></span>
                                    {{ model.name }}
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="row permission_name">
                              <div
                                class="col-sm-6 col-md-6 col-xl-3"
                                v-for="(
                                  permission, model_index
                                ) in model.permissions"
                                :key="model_index"
                              >
                                <div class="p-listbox-item">
                                  <label
                                    class="form-check-label"
                                    style="font-weight: 300"
                                  >
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      :value="permission.id"
                                      :id="'perm_'+permission.id"
                                      v-model="selectedPermissions"
                                    
                                    />
                                    <span class="checkmark"></span>
                                    {{ permission.name.slice(3) }}
                                  </label>
                                </div>
                                <!-- <ValidationError
                      :error="errors.permissions"
                      v-if="errors"
                    /> -->
                              </div>
                            </div>
                          </template>
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
      name: null,
      selectedPermissions: []
      // form_data: {
       
      // },
    };
  },
  methods: {
    async ModuleClick(e, module_index) {
      // console.log('214',module_index);
      await this.user_permissions[module_index]["models"].forEach(
        (element, key) => {
          console.log(module_index, key);
          document.getElementById(
            "module_" + module_index + "_model_" + key
          ).checked = e.target.checked;
            this.ModelClick(e, module_index, key);
        }
      );
    },
    async ModelClick(e, module_index, model_index) {
      if (e.target.checked) {
        //push id in permissions object
       await this.user_permissions[module_index]["models"][model_index][
          "permissions"
        ].forEach((element) => {
         if(!this.selectedPermissions.includes(element.id)) {
            this.selectedPermissions.push(element.id);
            document.getElementById('perm_'+element.id).checked = e.target.checked;
         }
        });
      } else {
       await this.user_permissions[module_index]["models"][model_index][
          "permissions"
        ].forEach((element) => {
          // this.selectedPermissions.push(element.id);
          let index = this.selectedPermissions.indexOf(element.id);
          if (index !== -1) {
            // console.log(this.selectedPermissions.splice(index));
            this.selectedPermissions.splice(index, 1);
             document.getElementById('perm_'+element.id).checked = e.target.checked;
          }
        });
      }
    },
    getPermission: function () {
      axios
        .get("custom-permissions")
        .then((response) => {
          this.user_permissions = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    submitUserForm: function () {
      axios
        .post("groups/",{
          name: this.name,
          permissions: this.selectedPermissions,
        })
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
</style>
