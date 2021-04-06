<template>
  <div class="mx-auto text-xs bg-gray-50 sm:text-xs lg:text-sm">
    <!-- <modalSignOut /> -->

    <div class="sticky top-0 z-10">
      <stickyNav />
    </div>

    <nav class="sticky top-0 bg-white"></nav>

    <div class="z-20"><sideNav /></div>

    <div class="z-20"><pageNav /></div>

    <div class="relative pl-40 top-10">
      <crumb />
    </div>
    <main
      id="generalPOS"
      class="mx-auto pb-14 lg:py-8 lg:pl-40 lg:pr-12 lg:pt-20"
    >
      <h1 class="relative pl-40 text-xl font-medium tracking-tight top-8">
        Order Maintanance
      </h1>
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-12 bg-white sm:p-6 lg:p-10">
                  <div
                    class="relative w-3 bg-element-bright-blue top-6 -left-10 text-element-bright-blue"
                  >
                    *
                  </div>
                  <div>
                    <h2
                      id="payment_details_heading"
                      class="text-xl font-bold tracking-tight text-element-dark-blue"
                    >
                      General Order
                    </h2>
                    <p class="mt-1 text-gray-500"></p>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-7 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium tracking-wide text-gray-700">
                        Log Number
                      </p>
                      <p class="text-gray-500">50119171</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Client</p>
                      <p class="text-gray-500">9990</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <label
                        for="last_name"
                        class="block font-medium text-gray-700"
                        >Unit</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700 truncate">
                        Purchase Order Date
                      </p>
                      <p class="text-gray-500">03/11/2021</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700 truncate">
                        Purchase Number
                      </p>
                      <p class="text-gray-500">50119171-001</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700 truncate">Order ID</p>
                      <p class="text-gray-500">3003428</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700 truncate">
                        Ordered By & Date
                      </p>
                      <p class="text-gray-500">Mr. Smith - 03/11/2021</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="email_address"
                        class="block font-medium text-gray-700 truncate"
                        >Vehicle Breakdown</label
                      >
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autocomplete="email"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="email_address"
                        class="block font-medium text-gray-700 truncate"
                        >Client Asset ID</label
                      >
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autocomplete="email"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>
                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="email_address"
                        class="block font-medium text-gray-700 truncate"
                        >Client Purchase Order Number</label
                      >
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autocomplete="email"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>
                  </div>
                  <div class="border-b">
                    <h2
                      id="payment_details_heading"
                      class="mt-10 text-base font-bold leading-6 text-gray-700 truncate"
                    >
                      Client Information
                    </h2>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-7 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700 truncate">
                        Order Type
                      </p>
                      <p class="text-gray-500">Stock</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="country"
                        class="block font-medium text-gray-700 truncate"
                        >Vehicle Located</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="block w-full px-3 py-2 mt-1 truncate bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
                      >
                        <option>Client</option>
                      </select>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block font-medium text-gray-700 truncate"
                        >Expiration date</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 truncate border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
                        placeholder="MM / YY"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="security_code"
                        class="flex items-center font-medium text-gray-700 truncate"
                      >
                        <span>Security code</span>
                        <!-- Heroicon name: solid/question-mark-circle -->
                        <svg
                          class="flex-shrink-0 w-5 h-5 ml-1 text-gray-300"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </label>
                      <input
                        type="text"
                        name="security_code"
                        id="security_code"
                        autocomplete="cc-csc"
                        class="block w-full px-3 py-2 mt-1 truncate border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="country"
                        class="block font-medium text-gray-700 truncate"
                        >Country / Region</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="postal_code"
                        class="block font-medium text-gray-700"
                        >ZIP / Postal</label
                      >
                      <input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autocomplete="postal-code"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>
                  </div>

                  <div class="border-b">
                    <h2
                      id="payment_details_heading"
                      class="mt-10 text-base font-bold leading-6 text-gray-700 truncate"
                    >
                      Dealer Contact Information
                    </h2>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-7 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block font-medium text-gray-700 truncate"
                        >Dealership Name</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block font-medium text-gray-700 truncate"
                        >First Name</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block font-medium text-gray-700 truncate"
                        >Last Name</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block font-medium text-gray-700 truncate"
                        >Phone Number</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block font-medium text-gray-700 truncate"
                        >Ext</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block font-medium text-gray-700 truncate"
                        >Email</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 font-medium text-white border border-transparent rounded-md shadow-sm bg-element-green hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>

    <!--Approval-->
    <main
      id="approvalPOS"
      class="mx-auto pb-14 lg:py-8 lg:pl-40 lg:pr-12 lg:pt-0"
    >
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-12 bg-white sm:p-6 lg:p-10">
                  <div
                    class="relative w-3 bg-element-bright-blue top-6 -left-10 text-element-bright-blue"
                  >
                    *
                  </div>
                  <div>
                    <h2
                      id="payment_details_heading"
                      class="text-xl font-bold tracking-tight text-element-dark-blue"
                    >
                      Approval
                    </h2>
                    <p class="mt-1 text-gray-500"></p>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-7 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="first_name"
                        class="block font-medium text-gray-700"
                        >Year</label
                      >
                      <p>asdasd</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <div>
                        <p class="block font-medium text-gray-700">
                          Dealer Installed Options
                        </p>
                        <button
                          type="button"
                          class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          aria-pressed="false"
                        >
                          <span class="sr-only">Use setting</span>
                          <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                          <span
                            class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow pointer-events-none ring-0"
                          >
                            <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-gray-400 bg-white"
                                fill="none"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-indigo-600 bg-white"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                />
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <div>
                        <p class="block font-medium text-gray-700">
                          Dealer Installed Options
                        </p>
                        <button
                          type="button"
                          class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          aria-pressed="false"
                        >
                          <span class="sr-only">Use setting</span>
                          <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                          <span
                            class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow pointer-events-none ring-0"
                          >
                            <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-gray-400 bg-white"
                                fill="none"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-indigo-600 bg-white"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                />
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <div>
                        <p class="block font-medium text-gray-700">
                          Dealer Installed Options
                        </p>
                        <button
                          type="button"
                          class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          aria-pressed="false"
                        >
                          <span class="sr-only">Use setting</span>
                          <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                          <span
                            class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow pointer-events-none ring-0"
                          >
                            <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-gray-400 bg-white"
                                fill="none"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-indigo-600 bg-white"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                />
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <div>
                        <p class="block font-medium text-gray-700">
                          Dealer Installed Options
                        </p>
                        <button
                          type="button"
                          class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          aria-pressed="false"
                        >
                          <span class="sr-only">Use setting</span>
                          <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                          <span
                            class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow pointer-events-none ring-0"
                          >
                            <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-gray-400 bg-white"
                                fill="none"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-indigo-600 bg-white"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                />
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <div>
                        <p class="block font-medium text-gray-700">
                          Dealer Installed Options
                        </p>
                        <button
                          type="button"
                          class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          aria-pressed="false"
                        >
                          <span class="sr-only">Use setting</span>
                          <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                          <span
                            class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow pointer-events-none ring-0"
                          >
                            <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-gray-400 bg-white"
                                fill="none"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-indigo-600 bg-white"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                />
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <div>
                        <p class="block font-medium text-gray-700">
                          Dealer Installed Options
                        </p>
                        <button
                          type="button"
                          class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          aria-pressed="false"
                        >
                          <span class="sr-only">Use setting</span>
                          <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                          <span
                            class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow pointer-events-none ring-0"
                          >
                            <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-gray-400 bg-white"
                                fill="none"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-indigo-600 bg-white"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                />
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 font-medium text-white border border-transparent rounded-md shadow-sm bg-element-green hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>

    <!--Driver-->
    <main
      id="driverPOS"
      class="mx-auto pb-14 lg:py-8 lg:pl-40 lg:pr-12 lg:pt-0"
    >
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-12 bg-white sm:p-6 lg:p-10">
                  <div class="pb-4 border-b">
                    <div
                      class="relative w-3 bg-element-bright-blue top-6 -left-10 text-element-bright-blue"
                    >
                      *
                    </div>
                    <h2
                      id="payment_details_heading"
                      class="text-xl font-bold tracking-tight text-element-dark-blue"
                    >
                      Driver
                    </h2>
                    <p class="mt-1 text-gray-500"></p>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">First Name</p>
                      <p class="text-gray-500">Tom</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Middle Name</p>
                      <p class="text-gray-500">Rick</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Last Name</p>
                      <p class="text-gray-500">Rick</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="last_name"
                        class="block font-medium text-gray-700"
                        >Employee ID</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Driver Breakdown</p>
                      <p class="text-gray-500">9999-DCTEST</p>
                    </div>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Address Line 1</p>
                      <p class="text-gray-500">847 W Monroe St APT 24</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Address Line 2</p>
                      <p class="text-gray-500"></p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">City</p>
                      <p class="text-gray-500">Chicago</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">State</p>
                      <p class="text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">County</p>
                      <p class="text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">County</p>
                      <p class="text-gray-500">Cook</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Zip Code</p>
                      <p class="text-gray-500">60607-2635</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Email</p>
                      <p class="text-gray-500"></p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Phone</p>
                      <p class="text-gray-500"></p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">
                        Vehicle Eligibility
                      </p>
                      <p class="text-gray-500">
                        Authorized to drive company vehicle
                      </p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Role</p>
                      <p class="text-gray-500">Driver</p>
                    </div>
                  </div>

                  <div class="bg-blue-100">
                    <h2
                      id="payment_details_heading"
                      class="p-2 mt-10 font-medium leading-6 text-gray-700"
                    >
                      Garaging Address
                    </h2>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Address Line 1</p>
                      <p class="text-gray-500">847 W Monroe St APT 24</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Address Line 2</p>
                      <p class="text-gray-500"></p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">City</p>
                      <p class="text-gray-500">Chicago</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">State</p>
                      <p class="text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">County</p>
                      <p class="text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">County</p>
                      <p class="text-gray-500">Cook</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Zip Code</p>
                      <p class="text-gray-500">60607-2635</p>
                    </div>
                  </div>

                  <div class="bg-blue-100">
                    <h2
                      id="payment_details_heading"
                      class="p-2 mt-10 font-medium leading-6 text-gray-700"
                    >
                      Delivery Address
                    </h2>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Address Line 1</p>
                      <p class="text-gray-500">847 W Monroe St APT 24</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Address Line 2</p>
                      <p class="text-gray-500"></p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">City</p>
                      <p class="text-gray-500">Chicago</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">State</p>
                      <p class="text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">County</p>
                      <p class="text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">County</p>
                      <p class="text-gray-500">Cook</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Zip Code</p>
                      <p class="text-gray-500">60607-2635</p>
                    </div>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 font-medium text-white border border-transparent rounded-md shadow-sm bg-element-green hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>

    <!--Vehicle-->
    <main
      id="vehiclePOS"
      class="mx-auto pb-14 lg:py-8 lg:pl-40 lg:pr-12 lg:pt-0"
    >
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-12 bg-white sm:p-6 lg:p-10">
                  <div class="pb-4 border-b">
                    <div
                      class="relative w-3 bg-element-bright-blue top-6 -left-10 text-element-bright-blue"
                    >
                      *
                    </div>
                    <h2
                      id="payment_details_heading"
                      class="text-xl font-bold tracking-tight text-element-dark-blue"
                    >
                      Vehicle
                    </h2>
                    <p class="mt-1 text-gray-500"></p>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Product Class</p>
                      <p class="text-gray-500">Car</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Log Numeber</p>
                      <p class="text-gray-500">5011911</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Client</p>
                      <p class="text-gray-500">9990</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <p class="font-medium text-gray-700">Unit</p>
                      <p class="text-gray-500">General Motors</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Make</p>
                      <p class="text-gray-500">Chevrolet</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Model</p>
                      <p class="text-gray-500">Camaro</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">ACode</p>
                      <p class="text-gray-500">Camaro</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="last_name"
                        class="block font-medium text-gray-700"
                        >Model Code</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="country"
                        class="block font-medium text-gray-700"
                        >Trim</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">MFR DAN</p>
                      <p class="text-gray-500">Car</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Year</p>
                      <p class="text-gray-500">2020</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <p class="font-medium text-gray-700">Manufacturer</p>
                      <p class="text-gray-500">General Motors</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Make</p>
                      <p class="text-gray-500">Chevrolet</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">Model</p>
                      <p class="text-gray-500">Camaro</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-700">ACode</p>
                      <p class="text-gray-500">Camaro</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="last_name"
                        class="block font-medium text-gray-700"
                        >Model Code</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="country"
                        class="block font-medium text-gray-700"
                        >Trim</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Table -->
                <div class="flex flex-col px-4 py-6 bg-white">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div
                      class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
                    >
                      <div
                        class="border-b border-gray-200 shadow sm:rounded-lg"
                      >
                        <table
                          class="w-auto divide-y divide-gray-200 table-fixed"
                        >
                          <thead class="align-top bg-element-bright-blue">
                            <tr>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase alu"
                              >
                                <TheFooter />
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Equipment Category
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Option Code
                              </th>
                              <th
                                scope="col"
                                class="w-1/6 px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Option Code External
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Option Description
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Quantity
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Type
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                PPO
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                DPO
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Driver Price
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Invoice
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                MSRP
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Transmit
                              </th>
                            </tr>
                          </thead>
                          <tbody class="align-top">
                            <!-- Odd row -->
                            <tr
                              class="bg-white hover:bg-green-100 focus:bg-blue-100"
                            >
                              <td
                                class="px-4 py-4 font-medium text-gray-700 whitespace-nowrap"
                              >
                                <overflow />
                              </td>

                              <td
                                class="px-4 py-4 font-medium text-gray-700 whitespace-nowrap"
                              >
                                0002
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-normal"
                              >
                                Preferred Equipment Group 2SS Preferred
                                Equipment Group 2SS Preferred Equipment Group
                                2SS Preferred Equipment Group 2SS Preferred
                                Equipment Group 2SS Preferred Equipment Group
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                1
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                OTC
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                S
                              </td>
                            </tr>

                            <!-- Even row -->
                            <tr class="bg-gray-50 hover:bg-green-100">
                              <td
                                class="px-4 py-4 font-medium text-gray-700 whitespace-nowrap"
                              >
                                <overflow />
                              </td>

                              <td
                                class="px-4 py-4 font-medium text-gray-700 whitespace-nowrap"
                              >
                                0002
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                Preferred Equipment Group 2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                1
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                OTC
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                S
                              </td>
                            </tr>

                            <tr class="bg-white hover:bg-green-100">
                              <td
                                class="px-4 py-4 font-medium text-gray-700 whitespace-nowrap"
                              >
                                <overflow />
                              </td>

                              <td
                                class="px-4 py-4 font-medium text-gray-700 whitespace-nowrap"
                              >
                                0002
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                Preferred Equipment Group 2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                1
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                OTC
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                S
                              </td>
                            </tr>

                            <!-- Even row -->
                            <tr class="bg-gray-50 hover:bg-green-100">
                              <td
                                class="px-4 py-4 font-medium text-gray-700 whitespace-nowrap"
                              >
                                <overflow />
                              </td>

                              <td
                                class="px-4 py-4 font-medium text-gray-700 whitespace-nowrap"
                              >
                                0002
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                Preferred Equipment Group 2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                1
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                OTC
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                S
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 font-medium text-white border border-transparent rounded-md shadow-sm bg-element-green hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>

    <!--DIO -->
    <main id="dioPOS" class="mx-auto pb-14 lg:py-8 lg:pl-40 lg:pr-12 lg:pt-0">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-12 bg-white sm:p-6 lg:p-10">
                  <div>
                    <h2
                      id="payment_details_heading"
                      class="text-xl font-bold tracking-tight text-element-dark-blue"
                    >
                      Dealer Installed Options
                    </h2>
                    <p class="mt-1 text-gray-500"></p>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 font-medium text-white border border-transparent rounded-md shadow-sm bg-element-green hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>

    <!--Upfit-->
    <main id="upfitPOS" class="mx-auto pb-14 lg:py-8 lg:pl-40 lg:pr-12 lg:pt-0">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-12 bg-white sm:p-6 lg:p-10">
                  <div>
                    <h2
                      id="payment_details_heading"
                      class="text-xl font-bold tracking-tight text-element-dark-blue"
                    >
                      Upfit
                    </h2>
                    <p class="mt-1 text-gray-500"></p>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 font-medium text-white border border-transparent rounded-md shadow-sm bg-element-green hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>

    <!--Fees & Charges-->
    <main id="feesPOS" class="mx-auto pb-14 lg:py-8 lg:pl-40 lg:pr-12 lg:pt-0">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-12 bg-white sm:p-6 lg:p-10">
                  <div>
                    <h2
                      id="payment_details_heading"
                      class="text-xl font-bold tracking-tight text-element-dark-blue"
                    >
                      Fees & Charges
                    </h2>
                    <p class="mt-1 text-gray-500"></p>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 font-medium text-white border border-transparent rounded-md shadow-sm bg-element-green hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    },
  },
}
</script>

<style></style>
