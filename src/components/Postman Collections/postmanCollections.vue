<template>
  <section class="flex justify-between">
    <div>
      <div class="container mb-4" id="interface">
        <h2 class="font-bold">Postman Collections</h2>
        <span>
          <h1>
            To make it easier to work with our APIs, we provide a Postman
            Collection file. By using this file in the Postman app, you can
            easily test and explore our APIs directly. This allows for quick and
            convenient access to all available endpoints.
          </h1>
        </span>
      </div>
      <div class="container mb-4" id="overview">
        <h1 class="text-md font-bold">Important Points</h1>
        <h1>
          <h2 class="text-xl font-bold mt-6">
            Here are some key points about Postman Collections:
          </h2>
          <span class="list-disc">
            <li class="mb-2">
              <span class="text-md font-semibold">
                Centralized API Testing:</span
              >
              Postman Collections allow you to access all API endpoints in one
              place, making it easy to manage and test different API requests
              without switching between multiple tools or environments.
            </li>
            <li class="mb-2">
              <span class="text-md font-semibold">
                Pre-configured Requests:</span
              >
              Each request in the collection is pre-configured with the
              necessary parameters, headers, and authentication details, saving
              you time and reducing the likelihood of errors.
            </li>
            <li class="mb-2">
              <span class="text-md font-semibold">
                Environment Flexibility:
              </span>
              Postman Collections can be set up to work with multiple
              environments, enabling you to test the APIs in different stages of
              development (e.g., development, staging, production) with just a
              few clicks
            </li>
            <li class="mb-2">
              <span class="text-md font-semibold">
                Collaborative Workflow:</span
              >
              Postman Collections can be shared with team members, allowing for
              collaboration and ensuring everyone is working with the same set
              of API requests and configurations.
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
  { id: 'interface', label: 'Postman Collections',is_main:true },
  { id: 'overview', label: 'Important Points ',is_main:false },



];
</script>
<style></style>
