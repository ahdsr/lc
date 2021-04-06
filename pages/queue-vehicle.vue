<template>
  <div id="app" class="mx-auto text-xs bg-gray-50 sm:text-xs lg:text-sm">
    <div class="sticky top-0 z-10">
      <stickyNav />
    </div>

    <nav class="sticky top-0 bg-white"></nav>

    <div class="z-20"><sideNav /></div>

    <h1
      class="relative max-w-full pl-40 text-xl font-medium tracking-tight top-8"
    >
      Vehicle Configuration
    </h1>

    <div class="relative pl-40 top-10">
      <crumb />
    </div>

    <main
      id="generalPOS"
      class="mx-auto pb-14 lg:py-8 lg:pl-40 lg:pr-12 lg:pt-20"
    >
      <div class="overflow-x-scroll bg-transparent shadow-lg">
        <div class="flex flex-row bg-transparent">
          <div
            class="flex p-4 bg-white border-2 border-b-0 border-element-bright-blue hover:bg-gray-100"
          >
            Fleet Specifications
          </div>
          <div class="flex p-4 bg-white hover:bg-gray-100">Price & Configs</div>
        </div>
        <queFleetSpecs :property="property" />
      </div>
    </main>
  </div>
</template>

<script>
import queOnOrder from '~/components/queOnOrder'

export default {
  name: 'app',
  components: {
    queOnOrder,
  },
  head() {
    return {
      //     script: [{ src: 'https://code.jquery.com/jquery-1.12.4.js'}],
      //     script: [{ src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'}],
      //
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Tangerine">',
        },
      ],
    }
  },
  data() {
    return {
      property: {
        log: 'Fleet Spec Status',
        corpcode: 'Image',
        clientNumber: 'Client Number',
        unitNumber: 'Client Name',
        orderType: 'Breakdown',
        currentStatus: 'Fleet Spec ID',
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
