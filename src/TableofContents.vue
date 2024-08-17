<template>
  <nav class="sticky top-0 bg-white p-4">
    <ul class="space-y-2 text-sm text-slate-500">
      <li
        v-for="section in sections"
        :key="section.id"
        class="ps-2 mb-0 pb-0"
        :class="[
          section.is_main
            ? 'font-bold'
            : 'ml-6 hover:text-primary-500 hover:border-l-2 hover:border-primary-500 border-l-2',
        ]"
      >
        <a
          :href="`#${section.id}`"
          @click.prevent="scrollToSection(section.id)"
          >{{ section.label }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  sections: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const activeSection = ref(null);

const handleScroll = () => {
  props.sections.forEach((section) => {
    const element = document.getElementById(section.id);
    const rect = element.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      activeSection.value = section.id;
    }
  });
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

watch(() => props.sections, handleScroll);
</script>

<style scoped>
.font-bold {
  font-weight: bold;
}

.text-blue-500 {
  color: #3b82f6; /* Tailwind's blue-500 color */
}
</style>
