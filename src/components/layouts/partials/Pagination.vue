<template>
  <div class="row">
    <div class="col-md-10">
      <p>
        Showing {{ pagination.showing }} of {{ pagination.count }}
      </p>
    </div>
    <div class="col-md-2">
      <ul class="pagination" v-if="pagination.count">
        <li :class="{ disabled: !pagination.previous }" class="page-item">
          <a
            class="page-link"
            href="#!"
            v-on:click="setPage(pagination.previous)"
            ><i class="fa fa-angle-left"> </i> Previous</a
          >
        </li>

        <li :class="{ disabled: !pagination.next }" class="page-item">
          <a class="page-link" href="#!" v-on:click="setPage(pagination.next)">
            Next <i class="fa fa-angle-right"> </i
          ></a>
        </li>
      </ul>
    </div>
  </div>
  <p>
    <!-- Showing {{ pagination.showing }} of {{ pagination.count }} -->
  </p>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pagination"],
  data() {
    return {
      //   pagination: {
      //       count: 0,
      //       next: null,
      //       previous: null,
      //       showing: 0,
      //       page: null,
      // }
    };
  },
  methods: {
    setPage(page) {
      let queryStr = {};
      if (this.$route.query.length > 0) {
        queryStr = this.$route.query;
      }
      // console.log("38", queryStr);
      queryStr["page"] = page;
      // console.log("40", queryStr);
      this.$router.push({
        path: "version-list",
        query: { page: page },
      });
    },
  },
};
</script>

<style scoped>
</style>