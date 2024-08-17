<template>
  <pre>
      <code class="language-javascript">{{ data }}</code>
</pre>
</template>
  <script setup lang="js">
import { ref, onMounted } from "vue";
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Import Prism CSS
// Import specific languages if needed
import 'prismjs/components/prism-python.min.js'; // Add other languages as needed
const props=defineProps(["code"])
const data=ref()

onMounted(async () => {
    data.value=props.code
    Prism.highlightAll();
});

  </script>
  <style></style>
  