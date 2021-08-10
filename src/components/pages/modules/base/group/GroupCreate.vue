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
                  <input
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
                  </div>
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
          }).then((result) => {
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