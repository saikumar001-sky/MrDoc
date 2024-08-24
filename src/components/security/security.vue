<template>
  <section class="flex justify-between">
    <div>
      <div class="container mb-4" id="interface">
        <h2 class="font-bold">Security</h2>
        <span>
          <h1>
            To use our API you will require certain credentials that we will use
            to identify and authorize the use of Pay Out API.
          </h1>
        </span>
      </div>
      <div class="container mb-4" id="overview">
        <h1 class="text-md font-bold">OverView</h1>
        <h1>
          <h2 class="text-md font-bold mt-6">App Key</h2>
          <span class="list-disc">
            <li>
              Description: Will be used to identify you on consuming the API and
              obtain the authorization token which is used to access restricted
              resources.
            </li>
          </span>
        </h1>
        <h1>
          <h2 class="text-md font-bold mt-6">Secret Key</h2>
          <span class="list-disc">
            <li>
              Description:Will need this to obtain the authorization token which
              is used to access restricted resources.
            </li>
          </span>
        </h1>
        <h1>
          <h2 class="text-md font-bold mt-6">SFTP Account Name</h2>
          <span class="list-disc">
            <li>
              Description:Will be used to login SFTP which transfers the user’s
              KYC files to RemitRise.
            </li>
          </span>
        </h1>
        <h1>
          <h2 class="text-md font-bold mt-6">SFTP Account Password</h2>
          <span class="list-disc">
            <li>
              Description:Will be used to login SFTP which transfers the user’s
              KYC files to RemitRise.
            </li>
          </span>
        </h1>
      </div>
    </div>
    <div class="w-96 ms-4">
      <TableofContents :sections="tocSections" />
    </div>
  </section>
</template>
<script setup lang="js">
  import codeBlock from "../../codeBlock.vue"
    import TableofContents from "../../TableofContents.vue"
  import {ref} from "vue"
  const tocSections = [
  { id: 'interface', label: 'Security ',is_main:true },
  { id: 'overview', label: 'Overview ',is_main:false },



];
</script>
<style></style>
