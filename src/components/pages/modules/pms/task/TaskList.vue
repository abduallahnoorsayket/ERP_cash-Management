<template>
  <Layout>
    <template v-slot:module_content>
      <PageTitle title="Task List" />

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover mb-0 table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Task Id</th>
                      <th scope="col" title="Expected Start Date">ESD</th>
                      <th scope="col" title="Start Date">SD</th>
                      <th scope="col" title="Expected complete Date">ECD</th>
                      <th scope="col" title="complete_date">CD</th>
                      <th scope="col" title="estimated_duration">ED</th>
                      <th scope="col" >Progress</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(task, index) in all_task_list"
                      :key="index"
                    >
                      <th scope="row">{{ task.name }}</th>
                      <td>{{ task.taskId }}</td>
                      <td>{{ task.expected_start_date }}</td>
                      <td>{{ task.start_date }}</td>
                      <td>{{ task.expected_complete_date }}</td>
                      <td>{{ task.complete_date }}</td>
                      <td>{{ task.estimated_duration }}</td>
                      <td>{{ task.progress }}</td>
                      <td>{{ task.status }}</td>

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
                              <router-link :to="{name: 'TaskEdit', params: { id: task.id },}" class="dropdown-item"> <i class="fas fa-edit"></i> Edit </router-link>
                            </li>
                            <li>
                              <a href="#" @click="taskDelete(task.id)"  class="dropdown-item"> <i class="fas fa-trash"></i> Delete</a>
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
  name: "TaskList",
  components: {
    Layout,
    PageTitle,
  },
  data() {
    return {
      all_task_list: null,
    };
  },
  methods: {
    getTaskList: function () {
      axios.get("tasks").then((response) => {
        this.all_task_list = response.data.results;
      })
      .catch(function (error) {
          console.log(error);
        });
    },
      taskDelete: function (id) {
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
          axios.delete("sprints/" + id + "/").then((response) => {
            if (response.status === 204) {
              this.getTaskList();
            }
          });
          Swal.fire("Deleted!", "Task has been deleted!!", "success");
        } else {
          Swal.fire("Cancelled", "Task has not been deleted !", "error");
        }
      });
    }
  },
  created() {
    this.getTaskList();
  },
};
</script>

<style lang="scss" scoped>
</style>