<template>
  <div class="antialiased">
    <!-- Start -->
    <!-- Top Nav Start -->
    <div class="mt-10">
      <div
        class="fixed inset-x-0 bottom-0 block h-16 pt-3 pr-2 align-middle bg-gray-300 shadow-md z-5"
      >
        <div class="flex justify-between">
          <nuxt-link to="/dlo-01">
            <button
              type="button"
              class="px-10 py-2 ml-2 text-sm font-medium text-gray-700 bg-white border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back
            </button></nuxt-link
          >
          <nuxt-link to="/dlo-03">
            <button
              type="submit"
              class="inline-flex px-10 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-element-green hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button></nuxt-link
          >
        </div>
      </div>
      <!-- Top Navigation>-->
      <div
        class="fixed top-0 left-0 z-20 flex items-center w-full h-16 p-4 mx-auto text-white bg-white shadow-lg"
      >
        <div>
          <img
            class="w-6 fill-current"
            viewBox="0 0 20 20"
            src="~/assets/images/menu.svg"
            alt="Xcelerate Logo"
          />
        </div>
        <div class="ml-4">
          <img
            class="w-24 fill-current"
            viewBox="0 0 20 20"
            src="~/assets/images/Icon-Logo-Xcelerate.svg"
            alt="Xcelerate Logo"
          />
        </div>

        <div class="ml-auto">
          <button
            type="submit"
            class="px-2 py-1 text-xs text-white border-transparent rounded-md shadow-sm bg-element-bright-blue font-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Exit
          </button>
        </div>
        <div class="ml-4">
          <img
            class="inline-block object-cover w-8 h-8 rounded-full"
            src="https://vignette.wikia.nocookie.net/97918c83-d3c3-4a97-a206-6d770810e8e3/scale-to-width-down/800"
            alt="Xcelerate Logo"
          />
        </div>
      </div>
    </div>
    <!-- Top Nav END -->
    <!-- Progress Bar Start -->
    <div class="mt-24">
      <nav aria-label="Progress">
        <ol class="flex justify-center">
          <li class="relative pr-8 sm:pr-20">
            <!-- Completed Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-element-bright-blue"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 rounded-full bg-element-green hover:bg-indigo-900"
            >
              <!-- Heroicon name: solid/check -->
              <svg
                class="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="sr-only">Step 1</span>
            </a>
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Current Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 bg-white border-2 rounded-full border-element-green"
              aria-current="step"
            >
              <span
                class="h-2.5 w-2.5 bg-indigo-600 rounded-full"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Step 2</span>
            </a>
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Upcoming Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
            >
              <span
                class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Step 4</span>
            </a>
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Upcoming Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
            >
              <span
                class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Step 4</span>
            </a>
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Upcoming Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
            >
              <span
                class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Step 5</span>
            </a>
          </li>
          <li class="relative">
            <!-- Upcoming Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
            >
              <span
                class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Step 5</span>
            </a>
          </li>
        </ol>
      </nav>
    </div>
    <!-- Progress Bar END -->
    <!-- Progress Nav Start -->
    <!--
    <div class="flex justify-center">
      <div class="grid grid-cols-6 gap-4 pl-2 pr-2 text-xs">
        <div>Validate Driver</div>
        <div>Vehicle</div>
        <div>Upfit</div>
        <div>Dealer</div>
        <div>Billing & Registration</div>
        <div>Summay</div>
      </div>
    </div>
    -->
    <!-- Progress Nav END -->
    <div class="mt-4">
      <div>
        <h3 class="p-4 mx-auto -mb-5 text-lg font-bold text-element-dark-blue">
          Verify Information
        </h3>
        <p class="p-4 mx-auto text-sm text-gray-500">
          Element fleet preferences indicate driver information is managed
          through your company's policy
        </p>
      </div>
      <div
        class="p-4 mx-auto text-base font-bold text-gray-600 bg-gray-100 border-b-2"
      >
        <h3 class="text-base font-bold text-gray-600">Driver</h3>
      </div>
      <div class="grid grid-cols-2 gap-4 p-4 mx-auto">


        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900"><label for="fname">First name:</label><br></p>
          <input type="text" id="fname" name="fname" value="John" class="max-w-full p-2 text-sm bg-white border border-gray-500 rounded-md shadow-sm h-7">
        </div>
        <!-- ... -->

        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900"><label for="fname">First name:</label><br></p>
          <input type="text" id="fname" name="fname" value="John" class="max-w-full p-2 text-sm bg-white border border-gray-500 rounded-md shadow-sm h-7">
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Last Name</p>
          <p class="mt-0 text-sm text-gray-500">Johnsonr</p>
        </div>
        <!-- ... -->

        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Employee ID</p>
          <p class="mt-0 text-sm text-gray-500">19283746r</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Email</p>
          <p class="mt-0 text-sm text-gray-500">johnson@home.com</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Primary Phone</p>
          <p class="mt-0 text-sm text-gray-500">598-878-7445</p>
        </div>
        <!-- ... -->

        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Address Line 1</p>
          <p class="mt-0 text-sm text-gray-500">6500 N Westwood Acres Ln</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Address Line 2</p>
          <p class="mt-0 text-sm text-gray-500">Unit #1423</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">City</p>
          <p class="mt-0 text-sm text-gray-500">Smithville</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">County</p>
          <p class="mt-0 text-sm text-gray-500">Harrisburg</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">State</p>
          <p class="mt-0 text-sm text-gray-500">NY</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Zip Code</p>
          <p class="mt-0 text-sm text-gray-500">90365</p>
        </div>
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900"></p>
          <p class="mt-0 text-sm text-gray-500"></p>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <div
        class="p-4 mx-auto text-base font-bold text-gray-600 bg-gray-100 border-b-2"
      >
        <h3 class="text-base font-bold text-gray-600">Garaging Address</h3>
      </div>
      <div class="grid grid-cols-2 gap-4 p-4 mx-auto">
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Address Line 1</p>
          <p class="mt-0 text-sm text-gray-500">170700 E Independence St</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Address Line 2</p>
          <p class="mt-0 text-sm text-gray-500"></p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">County</p>
          <p class="mt-0 text-sm text-gray-500">Tulsa</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">City</p>
          <p class="mt-0 text-sm text-gray-500">Tulsa</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">State</p>
          <p class="mt-0 text-sm text-gray-500">Oaklahoma</p>
        </div>
        <!-- ... -->
      </div>
    </div>

    <!-- End -->
  </div>
</template>

<script>
import index from './index.vue'
export default {
  components: { index },}
</script>

<style lang="scss" scoped></style>
