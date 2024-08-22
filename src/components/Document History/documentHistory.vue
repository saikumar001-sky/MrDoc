<template>
  <section class="flex justify-between">
    <div>
      <div class="container mb-4" id="interface">
        <h2 class="font-bold text-xl my-2">Document History</h2>
        <table class="border bg-white my-4 w-full text-left">
          <tr class="border bg-gray-100">
            <th class="p-3">S.NO</th>
            <th class="p-3">Api</th>

            <th class="p-3">Description</th>
          </tr>
          <tr class="border">
            <td class="p-3">1.</td>
            <td class="p-3 text-green-500">Authentication</td>

            <td class="p-3">
              The Authentication API provides endpoints to authenticate users
              and manage access tokens, ensuring secure access to your
              application.
            </td>
          </tr>
          <tr class="border">
            <td class="p-3">2.</td>
            <td class="p-3 text-green-500">KYC</td>
            <td class="p-3">
              The KYC (Know Your Customer) API typically returns an "approved"
              status if the provided ID is successfully verified and meets all
              regulatory requirements.
            </td>
          </tr>
          <tr class="border">
            <td class="p-3">3.</td>
            <td class="p-3 text-green-500">Beneficiary</td>
            <td class="p-3">
              This API manages the beneficiaries for transactions. It typically
              involves creating, updating, and retrieving beneficiary details..
            </td>
          </tr>
          <tr class="border">
            <td class="p-3">4.</td>
            <td class="p-3 text-green-500">Sender</td>
            <td class="p-3">
              The Sender api consists of all profile information of customer.
            </td>
          </tr>
          <tr class="border">
            <td class="p-3">5.</td>
            <td class="p-3 text-green-500">Transaction</td>
            <td class="p-3">
              The Transaction API is responsible for initiating and managing
              transactions, including details such as amount, currency, and
              beneficiary.
            </td>
          </tr>
          <tr class="border">
            <td class="p-3">6.</td>
            <td class="p-3 text-green-500">Transaction Status</td>
            <td class="p-3">
              This API provides the status of a transaction, such as pending,
              completed, or failed, to help track the progress of transactions.
            </td>
          </tr>
          <tr class="border">
            <td class="p-3">7.</td>
            <td class="p-3 text-green-500">Exchange Rates</td>
            <td class="p-3">
              The Exchange Rates API fetches the current exchange rates between
              different currencies, used in processing international
              transactions.
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="w-96 ms-4">
      <!-- <TableofContents :sections="tocSections" /> -->
    </div>
  </section>
</template>
<script setup lang="js">
  import codeBlock from "../../codeBlock.vue"
    import TableofContents from "../../TableofContents.vue"
  import {ref} from "vue"
  const tocSections = [
  { id: 'interface', label: ' ',is_main:true },




];
</script>
<style></style>
