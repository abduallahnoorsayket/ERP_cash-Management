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
          <td>{{ r.item.name }}</td>
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
    return {};
  },
};
</script>

<style scoped>
</style>