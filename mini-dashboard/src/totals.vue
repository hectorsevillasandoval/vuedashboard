<template lang="html">
  <div id="totals">
    <h1>{{msg}}</h1>

  </div>
</template>

<script>
export default {
  name: "totals",
  data(){
    return {
      msg: "Soy totals component",
      totalsales : null,
      totalrefund : null,
      totaltax : null,
      totalcoupons : null,
      totalregistered : null,
      totalguestcustomers : null
    }
  },
  methods: {
    totalSales(){},
    totalRefund(){},
    totalTax(){},
    totalCoupons(){},
    totalRegistered(){},
    totalGuestCustomers(){}
  }
}
</script>

<style lang="css">
</style>
