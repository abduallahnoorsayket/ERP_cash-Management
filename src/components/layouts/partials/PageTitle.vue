<template>
  <div class="row">
    <div class="col-12">
      <div class="page-title-box">
        <!-- <div class="page-title-btn btn-group float-right">
          <button
            type="button"
            class="
              btn btn-primary
              dropdown-toggle
              page-title-drop
              waves-effect waves-light
            "
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Settings <i class="fa fa-cog ml-1"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-right">
            <li><a href="#" class="dropdown-item">Action</a></li>
            <li><a href="#" class="dropdown-item">Another action</a></li>
            <li><a href="#" class="dropdown-item">Something else here</a></li>
            <li class="dropdown-divider"></li>
            <li><a href="#" class="dropdown-item">Separated link</a></li>
          </ul>
        </div> -->
        <h4 class="page-title">{{title}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  name: "PageTitle",
  components: {},
  
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>