  <template>
    <div class="antialiased bg-black">
      <!-- Bottom Navigation>-->
      <div>
        <!-- <section id="bottom-navigation" class="fixed inset-x-0 bottom-0 z-10 block bg-white shadow md:hidden"> // if shown only tablet/mobile-->
        <section
          id="bottom-navigation"
          class="fixed inset-x-0 bottom-0 z-10 block h-10 align-middle bg-black shadow-2xl"
        >
          <div id="tabs" class="flex justify-between align-middle fill-current text-green-50">
            <div>
            <a href=""
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-26"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
            </div>
            <div>
            <a href=""
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-26"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
  </svg>
            </a>
            </div>

            <div>
            <a href=""
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-26"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
            </div>

            <div>
            <a href=""
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-26"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
            </div>

            <div>
            <a href=""
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-26"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
            </div>


          </div>
        </section>
      </div>
      <!-- Top Navigation>-->
      <div
        class="fixed top-0 left-0 z-50 flex justify-between w-full p-2 mx-auto text-white bg-black shadow-2xl"
      >
        <img
          class="w-24 text-white fill-current"
          viewBox="0 0 20 20"
          src="~/assets/images/insta.svg"
        />
        <div class="float-right">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4C12 5.10457 11.1046 6 10 6Z"
              fill="#4A5568"
            />
            <path
              d="M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12Z"
              fill="#4A5568"
            />
            <path
              d="M10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16C12 17.1046 11.1046 18 10 18Z"
              fill="#4A5568"
            />
          </svg>
        </div>
      </div>
      <!-- Users -->
      <div class="flex p-4 mx-auto mt-10 overflow-scroll">
        <div><img class="inline-block w-16 h-16 mr-5 rounded-full " src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=MnLvkwmKZ1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></div>
        <div><img class="inline-block w-16 h-16 mr-5 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=MnLvkwmKZ1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></div>
        <div><img class="inline-block w-16 h-16 mr-5 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=MnLvkwmKZ1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></div>
        <div><img class="inline-block w-16 h-16 mr-5 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=MnLvkwmKZ1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></div>
        <div><img class="inline-block w-16 h-16 mr-5 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=MnLvkwmKZ1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></div>

      </div>
      <!-- Post 1 -->
      <div>
        <div class="text-white">
          <div class="p-2 mx-auto">
            <span
              class="relative inline-block text-xs text-white align-middle text-bold"
            >
              <img
                class="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=MnLvkwmKZ1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span
                class="absolute bottom-0 right-0 block w-2 h-2 bg-red-400 rounded-full ring-2 ring-white"
              ></span> </span
            ><span class="ml-2 text-xs text-white text-bold"
              >life.with.my.three</span
            >
          </div>
          <img
            class="object-cover w-full mt-2 h-72"
            src="https://images.unsplash.com/photo-1615836364937-786654db8232?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
          <div class="flex-col p-2 mx-auto">
            <div class="flex">
              <a href="#"
                ><svg
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
                    fill="#fff"
                  /></svg
              ></a>
              <a href="#"
                ><svg
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10C18 13.866 14.4183 17 10 17C8.50836 17 7.11208 16.6428 5.91677 16.0208L2 17L3.3383 13.8773C2.4928 12.7673 2 11.434 2 10C2 6.13401 5.58172 3 10 3C14.4183 3 18 6.13401 18 10ZM7 9H5V11H7V9ZM15 9H13V11H15V9ZM9 9H11V11H9V9Z"
                    fill="#fff"
                  /></svg
              ></a>
              <a href="#"
                ><svg
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00333 5.88355L9.99995 9.88186L17.9967 5.8835C17.9363 4.83315 17.0655 4 16 4H4C2.93452 4 2.06363 4.83318 2.00333 5.88355Z"
                    fill="#fff"
                  />
                  <path
                    d="M18 8.1179L9.99995 12.1179L2 8.11796V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V8.1179Z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
            <div class="flex-row mt-1 text-xs">
              <div>
                <span
                  >Liked by <span class="font-bold">jamie_gill</span> and
                  <span class="font-bold">others</span></span
                >
              </div>
              <div class="mt-1">
                <span
                  ><span class="font-bold">life.with.my.three</span> PI-VOT!
                  <span class="font-thin"
                    >#ifyouknowoyuknow #ifyouknowoyuknow #ifyouknowoyuknow</span
                  ></span
                >
              </div>
              <div class="mt-1 text-gray-600">
                <span>View all comment 3 commnets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Post 2 -->
      <div>
        <div class="text-white">
          <div class="p-2 mx-auto">
            <span
              class="relative inline-block text-xs text-white align-middle text-bold"
            >
              <img
                class="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=MnLvkwmKZ1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span
                class="absolute bottom-0 right-0 block w-2 h-2 bg-red-400 rounded-full ring-2 ring-white"
              ></span> </span
            ><span class="ml-2 text-xs text-white text-bold"
              >life.with.my.three</span
            >
          </div>
          <img
            class="object-cover w-full mt-2 h-60"
            src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
            alt=""
          />
          <div class="flex-col p-2 mx-auto">
            <div class="flex">
              <a href="#"
                ><svg
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
                    fill="#fff"
                  /></svg
              ></a>
              <a href="#"
                ><svg
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10C18 13.866 14.4183 17 10 17C8.50836 17 7.11208 16.6428 5.91677 16.0208L2 17L3.3383 13.8773C2.4928 12.7673 2 11.434 2 10C2 6.13401 5.58172 3 10 3C14.4183 3 18 6.13401 18 10ZM7 9H5V11H7V9ZM15 9H13V11H15V9ZM9 9H11V11H9V9Z"
                    fill="#fff"
                  /></svg
              ></a>
              <a href="#"
                ><svg
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00333 5.88355L9.99995 9.88186L17.9967 5.8835C17.9363 4.83315 17.0655 4 16 4H4C2.93452 4 2.06363 4.83318 2.00333 5.88355Z"
                    fill="#fff"
                  />
                  <path
                    d="M18 8.1179L9.99995 12.1179L2 8.11796V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V8.1179Z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
            <div class="flex-row mt-1 text-xs">
              <div>
                <span
                  >Liked by <span class="font-bold">jamie_gill</span> and
                  <span class="font-bold">others</span></span
                >
              </div>
              <div class="mt-1">
                <span
                  ><span class="font-bold">life.with.my.three</span> PI-VOT!
                  <span class="font-thin"
                    >#ifyouknowoyuknow #ifyouknowoyuknow #ifyouknowoyuknow</span
                  ></span
                >
              </div>
              <div class="mt-1 text-gray-600">
                <span>View all comment 3 commnets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Post 3 -->
      <div>
        <div class="text-white">
          <div class="p-2 mx-auto">
            <span
              class="relative inline-block text-xs text-white align-middle text-bold"
            >
              <img
                class="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=MnLvkwmKZ1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span
                class="absolute bottom-0 right-0 block w-2 h-2 bg-red-400 rounded-full ring-2 ring-white"
              ></span> </span
            ><span class="ml-2 text-xs text-white text-bold"
              >life.with.my.three</span
            >
          </div>
          <img
            class="object-cover w-full mt-2 h-60"
            src="https://images.unsplash.com/photo-1615866369373-8d232ea5a028?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
          <div class="flex-col p-2 mx-auto">
            <div class="flex">
              <a href="#"
                ><svg
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
                    fill="#fff"
                  /></svg
              ></a>
              <a href="#"
                ><svg
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10C18 13.866 14.4183 17 10 17C8.50836 17 7.11208 16.6428 5.91677 16.0208L2 17L3.3383 13.8773C2.4928 12.7673 2 11.434 2 10C2 6.13401 5.58172 3 10 3C14.4183 3 18 6.13401 18 10ZM7 9H5V11H7V9ZM15 9H13V11H15V9ZM9 9H11V11H9V9Z"
                    fill="#fff"
                  /></svg
              ></a>
              <a href="#"
                ><svg
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00333 5.88355L9.99995 9.88186L17.9967 5.8835C17.9363 4.83315 17.0655 4 16 4H4C2.93452 4 2.06363 4.83318 2.00333 5.88355Z"
                    fill="#fff"
                  />
                  <path
                    d="M18 8.1179L9.99995 12.1179L2 8.11796V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V8.1179Z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
            <div class="flex-row mt-1 text-xs">
              <div>
                <span
                  >Liked by <span class="font-bold">jamie_gill</span> and
                  <span class="font-bold">others</span></span
                >
              </div>
              <div class="mt-1">
                <span
                  ><span class="font-bold">life.with.my.three</span> PI-VOT!
                  <span class="font-thin"
                    >#ifyouknowoyuknow #ifyouknowoyuknow #ifyouknowoyuknow</span
                  ></span
                >
              </div>
              <div class="mt-1 text-gray-600">
                <span>View all comment 3 commnets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Post 4 -->
      <div>
        <div class="text-white">
          <div class="p-2 mx-auto">
            <span
              class="relative inline-block text-xs text-white align-middle text-bold"
            >
              <img
                class="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=MnLvkwmKZ1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span
                class="absolute bottom-0 right-0 block w-2 h-2 bg-red-400 rounded-full ring-2 ring-white"
              ></span> </span
            ><span class="ml-2 text-xs text-white text-bold"
              >life.with.my.three</span
            >
          </div>
          <img
            class="object-cover w-full mt-2 h-60"
            src="https://images.unsplash.com/photo-1615884363252-983eed162938?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
          <div class="flex-col p-2 mx-auto">
            <div class="flex">
              <a href="#"
                ><svg
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
                    fill="#fff"
                  /></svg
              ></a>
              <a href="#"
                ><svg
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10C18 13.866 14.4183 17 10 17C8.50836 17 7.11208 16.6428 5.91677 16.0208L2 17L3.3383 13.8773C2.4928 12.7673 2 11.434 2 10C2 6.13401 5.58172 3 10 3C14.4183 3 18 6.13401 18 10ZM7 9H5V11H7V9ZM15 9H13V11H15V9ZM9 9H11V11H9V9Z"
                    fill="#fff"
                  /></svg
              ></a>
              <a href="#"
                ><svg
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00333 5.88355L9.99995 9.88186L17.9967 5.8835C17.9363 4.83315 17.0655 4 16 4H4C2.93452 4 2.06363 4.83318 2.00333 5.88355Z"
                    fill="#fff"
                  />
                  <path
                    d="M18 8.1179L9.99995 12.1179L2 8.11796V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V8.1179Z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
            <div class="flex-row mt-1 text-xs">
              <div>
                <span
                  >Liked by <span class="font-bold">jamie_gill</span> and
                  <span class="font-bold">others</span></span
                >
              </div>
              <div class="mt-1">
                <span
                  ><span class="font-bold">life.with.my.three</span> PI-VOT!
                  <span class="font-thin"
                    >#ifyouknowoyuknow #ifyouknowoyuknow #ifyouknowoyuknow</span
                  ></span
                >
              </div>
              <div class="mt-1 text-gray-600">
                <span>View all comment 3 commnets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Post 5 -->
    </div>
  </template>

  <script>
  export default {}
  </script>

  <style lang="scss" scoped></style>
