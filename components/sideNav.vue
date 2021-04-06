<template>
  <div>
    <aside
      class="fixed top-0 left-0 min-h-full bg-green-800 shadow-2xl w-28 lg:visible"
    >
      <div class="flex-col text-center text-white">
        <div class="p-5 bg-element-green hover:bg-blue-500">
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            class="inline-block w-10 animated bounceIn"
          >
            <style>
              .st0 {
                fill: none;
              }
              .st1 {
                fill: #3ebeb0;
              }
              .st2 {
                fill: #35beef;
              }
              .st3 {
                fill: #0086aa;
              }
              .st4 {
                fill: #f3bd19;
              }
              .st5 {
                fill: #353535;
              }
              .st6 {
                fill: #37a595;
              }
            </style>
            <path class="st0" d="M0 0h80v80H0z" />
            <path
              class="st1"
              d="M54.1 40L40 54.1l11.4 11.4c3.3 3.3 8.8 3.3 12.2 0l1.9-1.9c3.3-3.3 3.3-8.8 0-12.2L54.1 40z"
            />
            <path
              class="st2"
              d="M28.6 14.5c-3.3-3.3-8.8-3.3-12.2 0l-1.9 1.9c-3.3 3.3-3.3 8.8 0 12.2L40 54.1 54.1 40 28.6 14.5z"
            />
            <path
              class="st3"
              d="M14.5 51.4c-3.3 3.3-3.3 8.8 0 12.2l1.9 1.9c3.3 3.3 8.8 3.3 12.2 0L40 54.1 25.9 40 14.5 51.4z"
            />
            <path
              class="st4"
              d="M65.5 28.6c3.3-3.3 3.3-8.8 0-12.2l-1.9-1.9c-3.3-3.3-8.8-3.3-12.2 0L40 25.9 54.1 40l11.4-11.4z"
            />
            <path
              class="st5"
              d="M40 32.1c-7 0-14.1 7.9-14.1 7.9L40 54.1 54.1 40S47 32.1 40 32.1z"
            />
            <path
              transform="rotate(-45.098 48.776 48.842)"
              class="st6"
              d="M38.8 46.4h19.9v4.9H38.8z"
            />
          </svg>
        </div>
        <div class="p-4 hover:bg-blue-500">
          <nuxt-link to="/order-home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="inline-block w-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <p class="text-xs">Dashboard</p>
          </nuxt-link>
        </div>

        <div class="p-4 hover:bg-blue-500">
          <a href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="inline-block w-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
          </a>
          <p class="text-xs">Edit Order</p>
        </div>

        <div class="p-4 hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline-block w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          <p class="text-xs">Order Preferences</p>
        </div>

        <div class="p-4 hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline-block w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
          <p class="text-xs">Code Table</p>
        </div>

        <div class="p-4 hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline-block w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            />
          </svg>

          <p class="text-xs">Batch Procressing</p>
        </div>

        <div class="p-4 hover:bg-blue-500">
          <nuxt-link to="/order-bmts">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="inline-block w-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </nuxt-link>
          <p class="text-xs">BMTs</p>
        </div>
        <div class="p-4 hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline-block w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
            />
          </svg>
          <p class="text-xs">Change History</p>
        </div>

        <div class="p-4 hover:bg-blue-500">
          <nuxt-link to="/queue-vehicle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="inline-block w-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </nuxt-link>

          <p class="text-xs">Vehicle Config</p>
        </div>

        <div class="p-4 hover:bg-blue-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline-block w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
            />
          </svg>
          <p class="text-xs">Reference Library</p>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
