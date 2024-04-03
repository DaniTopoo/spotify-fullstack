<template>
  <RouterLink
            :to="`/playlist/${id}`"
    class="flex justify-between text-heading cursor-pointer rounded hover:bg-piece hover:rounded bg-box icon-visible"
  >
    <div class="flex items-center">
      <div class="h-16 w-16">
        <img class="h-full w-full rounded-l" :src="cover" alt="imagen" />
      </div>
      <div class="flex items-center">
        <span class="p-3">{{ name }}</span>
      </div>
    </div>
    <div class="flex items-center justify-center mr-3">
      <PlayDotIcon />
    </div>
  </RouterLink>
</template>

<script setup>
import PlayDotIcon from "/src/components/PlayDotIcon.vue";
import { RouterLink } from "vue-router";
defineProps(["name", "cover","id"]);
</script>
