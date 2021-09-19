<template>
  <div class="table-responsive">
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
          <td >
            <button class="btn btn-purple waves-effect waves-light btn-xs" 
            @click="details_obj(r.object_history)">
             {{ r.item.name }}
            </button>
          </td>
          <td>{{ r.unit.name }}</td>
          <td>{{ r.quantity }}</td>
          <td>{{ r.amount }}</td>
          <td>{{ r.total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name:"RequisitionDetailsTable",
    props: ['reqDetail'],
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style scoped>
</style>