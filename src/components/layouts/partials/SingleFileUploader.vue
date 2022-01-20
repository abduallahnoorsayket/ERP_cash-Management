<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="col-md-2 col-lg-2">
            <div class="form-group mt-1">
              <label style="visibility: hidden">fgggggggf</label>
              <button
                type="button"
                class="
                  btn btn-primary btn-sm
                  waves-effect waves-light
                  pull-left
                "
                @click="addNewRow"
              >
                <i class="fas fa-plus-circle"></i>
              </button>
            </div>
          </div>
          <div class="row" v-for="(dom_repeat, k) in dom_repeats" :key="k">
            <div class="col-md-1 col-lg-1">
              <div class="form-group">
                <label style="visibility: hidden">fgggggggf</label>
                <button
                   v-if="dom_repeats.length > 1"
                  type="button"
                  class="btn btn-sm btn-primary mr-3"
                  @click="deleteRow(k, dom_repeat)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
            <div class="col-md col-lg">
              <div class="form-group">
                <label>Upload file</label>
                <div class="custom-file">
                  <input
                    required
                    type="file"
                    class="custom-file-input"
                    id="customFile"
                    name="filename"
                    ref="file"
                    @change="handleImage($event, k)"
                  />
                  <label class="custom-file-label" for="customFile"
                    >Choose file...</label
                  >
                  <div class="invalid-feedback">
                    Example invalid custom file feedback
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md col-lg">
              <div class="form-group">
                <label>File Name</label>
                <div class="form-group">
                  <input
                    v-model="dom_repeat.file_name"
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-11 mt-4" v-if="files_list">
            <div class="row">
              <div
                class="col-xl-2 col-md-2"
                v-for="(file, i) in files_list"
                :key="i"
              >
                <div class="fileContainer">
                  <div class="card widget-user">
                    <div class="card-body">
                      <h3
                        class="text-primary text-center"
                        data-plugin="counterup"
                      >
                        <i class="far fa-file-alt"></i>
                      </h3>

                      <h5 class="font-16 text-center" v-if="file.file_name">
                        {{ file.file_name }}
                      </h5>
                    </div>
                    <div class="row pr-2">
                      <div class="col-md-12">
                        <span
                          class="downloadButton float-right text-secondary"
                          title="Download"
                          v-if="file.upload_files"
                        >
                          <a :href="file.upload_files">
                            <i class="fas fa-download"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import Swal from "sweetalert2";
import Pagination from "@/components/layouts/partials/Pagination";

export default {
  name: "SingleFileUploader",
  props: ["content_type_id", "object_id"],
  data() {
    return {
      // Content_Type: null,
      // Object_Id: null,
      upload_files: null,
      created_by: null,
      files_list: null,
      dom_repeats: [
        {
          file_name: null,
          file: null,
        },
      ],
      pagination: {
        count: null,
        next: null,
        previous: null,
        showing: 0,
        page: null,
      },
    };
  },
  created() {
    // this.getFilesList();
    const userData = JSON.parse(localStorage.getItem("userData"));
    this.created_by = userData.id;
  },
  methods: {
    /*for file upload*/
    handleImage(event, k) {
      console.log("139", k, event.target.files[0]);
      this.dom_repeats[k].file = event.target.files[0];
      console.log("141", this.dom_repeats);
      // this.upload_files = this.$refs.file.files[0];
      // console.log("227", this.$refs.file, this.upload_files);
    },
    ResetModal() {
      this.upload_files = null;
      this.file_name = null;
    },
    getFilesList: function () {
      let endPoint = "file/";
      var queryParam = {
        object_id: this.$props.object_id,
        content_type: this.$props.content_type_id,
        page: this.$route.query.page,
      };
      axios
        .get(endPoint, {
          params: queryParam,
        })
        .then((response) => {
          this.files_list = response.data.results;
          this.pagination.count = response.data.count;
          this.pagination.next = response.data.next;
          this.pagination.previous = response.data.previous;
          this.pagination.showing = response.data.results.length;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    submitAddFile() {
      var bodyFormData = new FormData();
      bodyFormData.append("file_name", this.file_name);
      bodyFormData.append("upload_files", this.upload_files);
      bodyFormData.append("object_id", this.$props.object_id);
      bodyFormData.append("content_type", this.$props.content_type_id);
      bodyFormData.append("created_by", this.created_by);

      axios
        .post("file/", bodyFormData)
        .then((response) => {
          Swal.fire({
            icon: "success",
            text: "You have successfully Added File..",
          }).then((result) => {
            this.ResetModal();
            this.getFilesList();
            console.log(result);
          });
          console.log(response);
        })
        .catch((error) => {
          this.AddAttendance_error = error.response.data;
          console.log("--++", error.response);
        });
    },
    addNewRow: function () {
      this.dom_repeats.push({
        file_name: null,
        file: null,
      });
    },
    deleteRow: function (index, dom_repeat) {
      var idx = this.dom_repeats.indexOf(dom_repeat);
      console.log(idx, index);
      if (idx > 0) {
        this.dom_repeats.splice(idx, 1);
      }
    },
  },
};
</script>

<style scoped>
.card-body {
  padding: 1.25rem 1.25rem 0rem 1.25rem;
}
.font-16 {
  font-size: 12px !important;
}
.fa-download:before {
  content: "\f019";
  float: right;
  color: #808080;
}
</style>
