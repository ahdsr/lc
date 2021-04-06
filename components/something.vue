<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <section
      class="fixed inset-0 overflow-hidden pointer-events-none"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="absolute inset-0 overflow-hidden">
        <!-- Background overlay, show/hide based on slide-over state. -->
        <div class="absolute inset-0 overflow-hidden" aria-hidden="true"></div>

        <div class="absolute inset-y-0 right-0 flex max-w-full pl-10">
          <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"animate__fadeInRight
      -->
          <div class="w-screen max-w-xs">
            <div
              class="flex flex-col h-full py-6 overflow-hidden bg-white shadow-xl animated slideInRight"
            >
              <div class="px-4 sm:px-6">
                <div class="flex items-start justify-between">
                  <h2
                    class="text-xs font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    Filters
                  </h2>

                  <div class="flex items-center h-7">
                    <button
                      class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span class="sr-only">Close panel</span>
                      <!-- Heroicon name: outline/x -->
                      <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="relative flex-1 px-4 mt-6 sm:px-6">
                <!-- Replace with your content -->

                <div class="absolute inset-0 px-4 sm:px-6">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-1">
                      <label
                        for="country"
                        class="block text-xs font-medium text-gray-700 truncate"
                        >Corp Code</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="block w-full px-3 py-2 mt-1 text-xs truncate bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
                      >
                        <option>FA</option>
                        <option>CA</option>
                      </select>
                    </div>
                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <label
                        for="country"
                        class="block text-xs font-medium text-gray-700 truncate"
                        >Order Type</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="w-full px-3 py-2 mt-1 text-xs truncate bg-white border border-gray-300 rounded-md shadow-sm lock focus:outline-none focus:ring-gray-900 focus:border-gray-900"
                      >
                        <option>Factory</option>
                        <option>Dealer</option>
                        <option>Stock</option>
                      </select>
                    </div>
                    <div class="col-span-2">
                      <label
                        for="last_name"
                        class="block text-xs font-medium text-gray-700"
                        >Log Number</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>
                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <label
                        for="last_name"
                        class="block mt-2 text-xs font-medium text-gray-700"
                        >Client Number</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>
                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <label
                        for="last_name"
                        class="block mt-2 text-xs font-medium text-gray-700"
                        >Unit Number</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>
                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <label
                        for="last_name"
                        class="block mt-2 text-xs font-medium text-gray-700"
                        >VIN</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>
                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <label
                        for="last_name"
                        class="block mt-2 text-xs font-medium text-gray-700"
                        >Current Status</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>
                    <button
                      type="button"
                      class="inline-flex items-center px-6 py-3 mt-4 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Filter
                      <!-- Heroicon name: solid/mail -->
                      <svg
                        class="w-5 h-5 ml-3 -mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                        />
                        <path
                          d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <!-- /End replace -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
