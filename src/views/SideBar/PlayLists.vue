<template>
<RouterLink
            :to="`/playlist/${id}`"
            class="flex items-center text-heading cursor-pointer hover:bg-box hover:rounded-md"
          >
            <div class="h-10 w-10">
              <img
                class="h-full w-full rounded-md"
                :src="cover"
                alt="imagen"
              />
            </div>
            <div class="flex flex-col pl-3">
              <p class="text-heading">{{ name }}</p>
              <div class="flex items-center">
                <span class="text-font">{{ type }} ·</span>
                <span
                  class="text-font p-1"
                  >{{ displayAuthors }}</span
                >
              </div>
            </div>
          </RouterLink>
</template>
<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps(["name","cover","authors","id","type"]);
const displayAuthors = computed(() => {
  return (
    props.authors
      .join(" y ")
  );
});
</script>