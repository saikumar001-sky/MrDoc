<template>
  <section class="flex justify-between">
    <div>
      <div class="container mb-4" id="interface">
        <h2 class="font-bold text-xl my-2">Support Contact</h2>
        <span>
          <h1>
            If you have any questions, please contact us through the email and
            phone number below.
          </h1>
          <h1>
            <span class="font-bold text-md">Email: </span>info@remitrise.com
          </h1>
          <h1>
            <span class="font-bold text-md">Mobile Number:</span>+91 93811 85407
          </h1>
        </span>
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
