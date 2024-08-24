<template>
  <section class="flex justify-between">
    <div>
      <div class="container mb-4" id="interface">
        <h2 class="font-bold">Request Header</h2>
        <span>
          <h1>
            To start using the API, the request header should be set attributes
            below.
          </h1>
        </span>
      </div>
      <div class="container mb-4" id="overview">
        <h1 class="text-md font-bold">OverView</h1>
        <h1>
          <h2 class="text-md font-bold mt-6">App Key</h2>
          <span class="list-disc">
            <li>
              Description: A required identifier provided by RemitRise that
              authenticates your application.
            </li>
          </span>
        </h1>
        <h1>
          <h2 class="text-md font-bold mt-6">token</h2>
          <span class="list-disc">
            <li>
              Description:A required session token obtained from the
              authorization API, used to verify authenticated access.
            </li>
          </span>
        </h1>
        <h1>
          <h2 class="text-md font-bold mt-6">sign</h2>
          <span class="list-disc">
            <li>
              Description:A required cryptographic hash generated using the
              request body content and a secret key, ensuring the integrity and
              security of the request.
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
  { id: 'interface', label: 'Request Header ',is_main:true },
  { id: 'overview', label: 'Overview ',is_main:false },



];
</script>
<style></style>
