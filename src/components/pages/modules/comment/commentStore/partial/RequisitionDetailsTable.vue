<template>
  <table class="table table-sm mb-0">
    <thead>
      <tr>
        <th scope="col">Item</th>
        <th scope="col">Unit</th>
        <th scope="col">Quantity</th>
        <th scope="col">Amount</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(r, index) in reqDetail" :key="index">
        <td>
          <!-- <button class="btn btn-purple waves-effect waves-light btn-xs" 
            @click="details_obj(r.object_history)">
             {{ r.item.name }}
            </button> -->
          <div class="dropdown notification-list">
            <a
              class="nav-link dropdown-toggle waves-effect waves-light"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              {{ r.item.name }}
            </a>
            <div class="dropdown-menu dropdown-lg">
              <div class="noti-scroll" style="height: auto !important">
                <table class="table table-sm mb-0 table-bordered obj_history">
                   <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Total</th>
                    <th scope="col">By</th>
                  </tr>
                </thead>
                  <tr  v-for="(r, index) in r.object_history" :key="index">
                    <td>{{r.item}}</td>
                    <td>{{r.unit}}</td>
                    <td>{{r.quantity}}</td>
                    <td>{{r.amount}}</td>
                    <td>{{r.total}}</td>
                    <td>{{r.created_by}}</td>
                  </tr>
                
                </table>
              </div>
            </div>
          </div>
        </td>
        <td>{{ r.unit.name }}</td>
        <td>{{ r.quantity }}</td>
        <td>{{ r.amount }}</td>
        <td>{{ r.total }}</td>
      </tr>
    </tbody>
  </table>

</template>

<script>


export default {
  name: "RequisitionDetailsTable",
  components: {
  },
  props: ["reqDetail"],
  data() {
    return {
    };
  },
  methods: {

  },
};
</script>

<style scoped>
.obj_history {
  font-size: 11px;
}
</style>