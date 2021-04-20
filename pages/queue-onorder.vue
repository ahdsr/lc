<template>
  <!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->

  <div id="app"></div>
</template>

<script>
export default {
  name: 'app',
  components: {
    leftNavigation,
  },

  data() {
    return {
      property: {
        log: 'Log',
        corpcode: 'Corp Code',
        clientNumber: 'Client Number',
        unitNumber: 'Unit Number',
        orderType: 'Order Type',
        currentStatus: 'Current Status',
        year: 'Year',
        manufacturer: 'Manufacturer',
        make: 'Make',
        model: 'Model',
        factoryOrderNumber: 'Factory Order Number',
        vin: 'VIN',
        fleetSpecID: 'Fleet Spec ID',
        dioInd: 'DIO Indicator',
        upfitInd: 'Upfit Indicator',
        creditInd: 'Credit',
        insuranceInd: 'Insurance',
        billingInd: 'Billing',
        dealerInd: 'Dealer',
        registrationInd: 'Registration',
        upfitSoftError: 'Upfit Soft Error',
        capping: 'Capping',
        lastUpdateDate: 'Date',
        lastUpdateTime: 'Time',
        lastUpdateUserID: 'User ID',
      },
    }
  },
}
</script>

<style></style>
