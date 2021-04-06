<template>
  <div class="min-h-screen mx-auto text-xs bg-gray-50 sm:text-xs lg:text-sm">
    <div class="sticky top-0 z-10">
      <stickyNav />
    </div>

    <nav class="sticky top-0 bg-white"></nav>

    <div class="z-20"><sideNav /></div>

    <h1 class="relative pl-40 text-xl font-medium tracking-tight top-8">
      Dashboard
    </h1>

    <div class="relative pl-40 top-10">
      <crumb />
    </div>




    <div class="relative pl-40 mx-auto pt-14">
      <div class="relative lg:grid lg:grid-cols-4 lg:gap-x-8">
        <div class="col-span-1">
          <h2
            class="text-3xl font-light tracking-tight text-gray-700 sm:text-4xl"
          >
            Welcome back to Ordering
            <span class="text-yellow-500">Super User</span>
          </h2>
        </div>

        <div
          class="col-span-1 pt-3 pb-10 pl-3 overflow-hidden bg-white rounded-lg shadow"
        >
          <nuxt-link to="/queue-onorder">
            <div class="absolute p-3 rounded-md bg-element-dark-blue">
              <!-- Heroicon name: outline/users -->
              <svg
                class="w-6 h-6 text-white"
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <p class="ml-16 text-sm font-medium text-gray-500">
              On-Order Queue
            </p>
          </nuxt-link>
        </div>
        <div class="pt-3 pb-10 pl-3 overflow-hidden bg-white rounded-lg shadow">
          <nuxt-link to="/queue-onorder">
            <div class="absolute p-3 rounded-md bg-element-dark-blue">
              <!-- Heroicon name: outline/users -->
              <svg
                class="w-6 h-6 text-white"
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <p class="ml-16 text-sm font-medium text-gray-500">
              On-Order Queue
            </p>
          </nuxt-link>
        </div>
        <div class="pt-3 pb-10 pl-3 overflow-hidden bg-white rounded-lg shadow">
          <nuxt-link to="/queue-onorder">
            <div class="absolute p-3 rounded-md bg-element-dark-blue">
              <!-- Heroicon name: outline/users -->
              <svg
                class="w-6 h-6 text-white"
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <p class="ml-16 text-sm font-medium text-gray-500">
              On-Order Queue
            </p>
          </nuxt-link>
        </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // head() {
  //   return {
  //     //     script: [{ src: 'https://code.jquery.com/jquery-1.12.4.js'}],
  //     //     script: [{ src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'}],
  //     link: [
  //       {
  //         rel: 'stylesheet',
  //         href:
  //           'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
  //       },
  //     ],
  //     script: [
  //       {
  //         src:
  //           'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min.js',
  //       },
  //     ],
  //   }
  // },
}
</script>

<style></style>
