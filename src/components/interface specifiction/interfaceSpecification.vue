<template>
  <section class="flex justify-between">
    <div>
      <div class="container mb-4" id="interface">
        <h2 class="font-bold">Interface Specification</h2>
        <span class="list-disc">
          <li>Communication Mode：https + JSON</li>
          <li>Charset: UTF-8</li>
          <li>Encryption Method: encrypt with RSA， signature with base64</li>
          <li>Date Format: yyyy-MM-dd.</li>
        </span>
      </div>
      <div class="container mb-4" id="overview">
        <h1 class="text-md font-bold">OverView</h1>
        <h1>
          <h2 class="text-md font-bold mt-6">Communication Mode</h2>
          <span class="list-disc">
            <li>Protocol: HTTPS</li>
            <li>Data Format: JSON</li>
            <li>
              Description: All communications between the client and server are
              conducted over HTTPS, ensuring secure transmission. The data
              exchanged will be in JSON format, which is lightweight and easy to
              parse.
            </li>
          </span>
        </h1>
        <h1>
          <h2 class="text-md font-bold mt-6">Character Encoding</h2>
          <span class="list-disc">
            <li>Charset: UTF-8</li>
            <li>Data Format: JSON</li>
            <li>
              Description: All data will be encoded using UTF-8 to support a
              wide range of characters and ensure compatibility across different
              systems.
            </li>
          </span>
        </h1>
        <h1>
          <h2 class="text-md font-bold mt-6">Encryption Method</h2>
          <span class="list-disc">
            <li>Encryption Algorithm: RSA</li>

            <li>
              Description:The data exchanged between the client and server will
              be encrypted using the RSA algorithm. This ensures that the data
              remains confidential and is not accessible by unauthorized
              parties.
            </li>
          </span>
        </h1>
        <h1>
          <h2 class="text-md font-bold mt-6">Date Format</h2>
          <span class="list-disc">
            <li>Format: yyyy-MM-dd</li>

            <li>
              Description: All dates exchanged within the JSON payload should
              follow the yyyy-MM-dd format. This standard format ensures
              consistency and avoids any misinterpretation of date values.
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
  { id: 'interface', label: 'Interface Specification ',is_main:true },
  { id: 'overview', label: 'Overview ',is_main:false },



];
</script>
<style></style>
