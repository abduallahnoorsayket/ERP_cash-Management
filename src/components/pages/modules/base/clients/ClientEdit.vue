<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Client Edit" />
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
                    data-toggle="input-mask"
                    data-mask-format="00/00/0000"
                    v-model="name"
                    :class="{ 'parsley-error': errors && errors.name }"
                  />
                  <ValidationError :error="errors.name" v-if="errors" />
                </div>

              
              </div>
              <!-- end col -->

             
              <!-- end col -->

              <div class="col-md-12">
                <div class="form-group">
                  <label>Description </label>
                  <textarea
                    type="textarea"
                    class="form-control"
                    data-toggle="input-mask"
                    data-mask-format="000.000.000-00"
                    data-reverse="true"
                    v-model="description"
                  />
                </div>

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
import ValidationError from "@/components/layouts/partials/ValidationError.vue"
import Swal from "sweetalert2";

export default {
  name: "ClientEdit",
  components: {
    Layout,
    PageTitle,
    ValidationError,
  },
  data() {
    return {
      name: null,
      description: null,
      errors: null,
    };
  },
  methods: {

    getDeptEditData: function () {
      axios.get(`clients/${this.$route.params.id}/`).then(
        (response) => {
          console.log("329", response.data);
          this.name = response.data.name;
          this.description = response.data.description;
         
        }
      ).catch((err) => {
        console.log("error", err)
      })
    },

 

    submitUserForm: function () {
      axios
        .put("clients/" + this.$route.params.id + "/", {
          name: this.name,
          description: this.description,
      
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "You have successfully Update a Client.",
          }).then((result) => {
            this.$router.push({name:'ClientList'});
          });
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
 
  },
  created() {
    this.getDeptEditData();

  },
};
</script>

<style scoped>
.cus_right {
  float: right;
}
</style>