<template>
  <div>
    <table class="relative w-full table-auto">
      <thead class="text-left bg-element-bright-blue">
        <tr class="sticky align-top top-96">
          <th
            scope="col"
            class="p-2 text-xs font-medium text-left text-white"
          ></th>
          <th
            scope="col"
            class="p-2 text-xs font-medium text-left text-white"
          ></th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.log }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.corpcode }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.clientNumber }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.unitNumber }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.orderType }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.currentStatus }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.driverChangeStatus }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.year }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.manufacturer }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.make }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.model }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.factoryOrderNumber }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.vin }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.fleetSpecID }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.dioInd }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.upfitInd }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.creditInd }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.insuranceInd }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.billingInd }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.dealerInd }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.registrationInd }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.upfitSoftError }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.capping }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.lastUpdateDate }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.lastUpdateTime }}
          </th>
          <th scope="col" class="p-2 text-xs font-medium text-left text-white">
            {{ property.lastUpdateUserID }}
          </th>
        </tr>
      </thead>
      <tbody class="">
        <!-- Odd row -->
        <tr
          class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">
            <nuxt-link to="/order-m"><a href="#">20266094</a></nuxt-link>
          </td>
          <td class="p-2 text-xs text-gray-800">CA</td>
          <td class="p-2 text-xs text-gray-800">9990</td>
          <td class="p-2 text-xs text-gray-800">31231</td>
          <td class="p-2 text-xs text-gray-800">Factory</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">F-150</td>
          <td class="p-2 text-xs text-gray-800">JH4DA9450NS000826</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Even row -->
        <tr
          class="bg-gray-50 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20266094</td>
          <td class="p-2 text-xs text-gray-800">FA</td>
          <td class="p-2 text-xs text-gray-800">6421</td>
          <td class="p-2 text-xs text-gray-800">64231</td>
          <td class="p-2 text-xs text-gray-800">Stock</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Chrystel</td>
          <td class="p-2 text-xs text-gray-800">Chrystler</td>
          <td class="p-2 text-xs text-gray-800">300</td>
          <td class="p-2 text-xs text-gray-800">JH4DA9450NS000826</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Odd row -->
        <tr
          class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20266094</td>
          <td class="p-2 text-xs text-gray-800">FA</td>
          <td class="p-2 text-xs text-gray-800">4491</td>
          <td class="p-2 text-xs text-gray-800">31231</td>
          <td class="p-2 text-xs text-gray-800">Factory</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">F-150</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Even row -->
        <tr
          class="bg-gray-50 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20266094</td>
          <td class="p-2 text-xs text-gray-800">FA</td>
          <td class="p-2 text-xs text-gray-800">1291</td>
          <td class="p-2 text-xs text-gray-800">16631</td>
          <td class="p-2 text-xs text-gray-800">Factory</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Volkswagen</td>
          <td class="p-2 text-xs text-gray-800">Audi</td>
          <td class="p-2 text-xs text-gray-800">A8</td>
          <td class="p-2 text-xs text-gray-800">JH4DA9450NS000826</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Odd row -->
        <tr
          class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">34433221</td>
          <td class="p-2 text-xs text-gray-800">CA</td>
          <td class="p-2 text-xs text-gray-800">1291</td>
          <td class="p-2 text-xs text-gray-800">35531</td>
          <td class="p-2 text-xs text-gray-800">Dealer</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">General Motors</td>
          <td class="p-2 text-xs text-gray-800">Chevrolet</td>
          <td class="p-2 text-xs text-gray-800">4500XD LCF Diesel</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Even row -->
        <tr
          class="bg-gray-50 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20344321</td>
          <td class="p-2 text-xs text-gray-800">CA</td>
          <td class="p-2 text-xs text-gray-800">1291</td>
          <td class="p-2 text-xs text-gray-800">31231</td>
          <td class="p-2 text-xs text-gray-800">Factory</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">F-150</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>
        <!-- Odd row -->
        <tr
          class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20266094</td>
          <td class="p-2 text-xs text-gray-800">CA</td>
          <td class="p-2 text-xs text-gray-800">9990</td>
          <td class="p-2 text-xs text-gray-800">31231</td>
          <td class="p-2 text-xs text-gray-800">Factory</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">F-150</td>
          <td class="p-2 text-xs text-gray-800">JH4DA9450NS000826</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Even row -->
        <tr
          class="bg-gray-50 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20266094</td>
          <td class="p-2 text-xs text-gray-800">FA</td>
          <td class="p-2 text-xs text-gray-800">6421</td>
          <td class="p-2 text-xs text-gray-800">64231</td>
          <td class="p-2 text-xs text-gray-800">Stock</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Chrystel</td>
          <td class="p-2 text-xs text-gray-800">Chrystler</td>
          <td class="p-2 text-xs text-gray-800">300</td>
          <td class="p-2 text-xs text-gray-800">JH4DA9450NS000826</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Odd row -->
        <tr
          class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20266094</td>
          <td class="p-2 text-xs text-gray-800">FA</td>
          <td class="p-2 text-xs text-gray-800">4491</td>
          <td class="p-2 text-xs text-gray-800">31231</td>
          <td class="p-2 text-xs text-gray-800">Factory</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">F-150</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Even row -->
        <tr
          class="bg-gray-50 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20266094</td>
          <td class="p-2 text-xs text-gray-800">FA</td>
          <td class="p-2 text-xs text-gray-800">1291</td>
          <td class="p-2 text-xs text-gray-800">16631</td>
          <td class="p-2 text-xs text-gray-800">Factory</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Volkswagen</td>
          <td class="p-2 text-xs text-gray-800">Audi</td>
          <td class="p-2 text-xs text-gray-800">A8</td>
          <td class="p-2 text-xs text-gray-800">JH4DA9450NS000826</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Odd row -->
        <tr
          class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">34433221</td>
          <td class="p-2 text-xs text-gray-800">CA</td>
          <td class="p-2 text-xs text-gray-800">1291</td>
          <td class="p-2 text-xs text-gray-800">35531</td>
          <td class="p-2 text-xs text-gray-800">Dealer</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">General Motors</td>
          <td class="p-2 text-xs text-gray-800">Chevrolet</td>
          <td class="p-2 text-xs text-gray-800">4500XD LCF Diesel</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Even row -->
        <tr
          class="bg-gray-50 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20344321</td>
          <td class="p-2 text-xs text-gray-800">CA</td>
          <td class="p-2 text-xs text-gray-800">1291</td>
          <td class="p-2 text-xs text-gray-800">31231</td>
          <td class="p-2 text-xs text-gray-800">Factory</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">F-150</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>
        <!-- Odd row -->
        <tr
          class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20266094</td>
          <td class="p-2 text-xs text-gray-800">CA</td>
          <td class="p-2 text-xs text-gray-800">9990</td>
          <td class="p-2 text-xs text-gray-800">31231</td>
          <td class="p-2 text-xs text-gray-800">Factory</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">F-150</td>
          <td class="p-2 text-xs text-gray-800">JH4DA9450NS000826</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Even row -->
        <tr
          class="bg-gray-50 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20266094</td>
          <td class="p-2 text-xs text-gray-800">FA</td>
          <td class="p-2 text-xs text-gray-800">6421</td>
          <td class="p-2 text-xs text-gray-800">64231</td>
          <td class="p-2 text-xs text-gray-800">Stock</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Chrystel</td>
          <td class="p-2 text-xs text-gray-800">Chrystler</td>
          <td class="p-2 text-xs text-gray-800">300</td>
          <td class="p-2 text-xs text-gray-800">JH4DA9450NS000826</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>
        <!-- Odd row -->
        <tr
          class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20266094</td>
          <td class="p-2 text-xs text-gray-800">CA</td>
          <td class="p-2 text-xs text-gray-800">9990</td>
          <td class="p-2 text-xs text-gray-800">31231</td>
          <td class="p-2 text-xs text-gray-800">Factory</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">F-150</td>
          <td class="p-2 text-xs text-gray-800">JH4DA9450NS000826</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Even row -->
        <tr
          class="bg-gray-50 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20266094</td>
          <td class="p-2 text-xs text-gray-800">FA</td>
          <td class="p-2 text-xs text-gray-800">6421</td>
          <td class="p-2 text-xs text-gray-800">64231</td>
          <td class="p-2 text-xs text-gray-800">Stock</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Chrystel</td>
          <td class="p-2 text-xs text-gray-800">Chrystler</td>
          <td class="p-2 text-xs text-gray-800">300</td>
          <td class="p-2 text-xs text-gray-800">JH4DA9450NS000826</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Odd row -->
        <tr
          class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20266094</td>
          <td class="p-2 text-xs text-gray-800">CA</td>
          <td class="p-2 text-xs text-gray-800">9990</td>
          <td class="p-2 text-xs text-gray-800">31231</td>
          <td class="p-2 text-xs text-gray-800">Factory</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">F-150</td>
          <td class="p-2 text-xs text-gray-800">JH4DA9450NS000826</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Even row -->
        <tr
          class="bg-gray-50 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20266094</td>
          <td class="p-2 text-xs text-gray-800">FA</td>
          <td class="p-2 text-xs text-gray-800">6421</td>
          <td class="p-2 text-xs text-gray-800">64231</td>
          <td class="p-2 text-xs text-gray-800">Stock</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Chrystel</td>
          <td class="p-2 text-xs text-gray-800">Chrystler</td>
          <td class="p-2 text-xs text-gray-800">300</td>
          <td class="p-2 text-xs text-gray-800">JH4DA9450NS000826</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Odd row -->
        <tr
          class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20266094</td>
          <td class="p-2 text-xs text-gray-800">CA</td>
          <td class="p-2 text-xs text-gray-800">9990</td>
          <td class="p-2 text-xs text-gray-800">31231</td>
          <td class="p-2 text-xs text-gray-800">Factory</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">Ford</td>
          <td class="p-2 text-xs text-gray-800">F-150</td>
          <td class="p-2 text-xs text-gray-800">JH4DA9450NS000826</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>

        <!-- Even row -->
        <tr
          class="bg-gray-50 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
        >
          <td class="p-2">
            <overflow />
          </td>

          <td class="p-2">
            <input
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
          </td>
          <td class="p-2 text-xs text-gray-700">20266094</td>
          <td class="p-2 text-xs text-gray-800">FA</td>
          <td class="p-2 text-xs text-gray-800">6421</td>
          <td class="p-2 text-xs text-gray-800">64231</td>
          <td class="p-2 text-xs text-gray-800">Stock</td>
          <td class="p-2 text-xs text-gray-800">AD0020</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">2019</td>
          <td class="p-2 text-xs text-gray-800">Chrystel</td>
          <td class="p-2 text-xs text-gray-800">Chrystler</td>
          <td class="p-2 text-xs text-gray-800">300</td>
          <td class="p-2 text-xs text-gray-800">JH4DA9450NS000826</td>
          <td class="p-2 text-xs text-gray-800"></td>
          <td class="p-2 text-xs text-gray-800">F001584</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">N</td>
          <td class="p-2 text-xs text-gray-800">03/11/2021</td>
          <td class="p-2 text-xs text-gray-800">09:10:37</td>
          <td class="p-2 text-xs text-gray-800">SuperUser</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import overflow from '/components/overflow'

export default {
  components: {
    overflow,
  },
  props: {
    property: {
      type: Object,
      required: true,
      default: {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
