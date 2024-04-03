<template>
    <RouterLink
            :to="`/playlist/${id}`"

    class="min-w-40 min-h-56 max-w-40 max-h-56 flex flex-col gap-2 hover:bg-box rounded-lg transiton-all duration-300 p-2 cursor-pointer"
  >
    <div
      class="h-[70%] w-full flex relative icon-visible rounded overflow-hidden"
    >
              <img
              class="h-full w-full object-cover"
                :src="cover"
                alt="imagen"
              />
              <PlayDotIcon class="absolute bottom-0 right-0 m-2" />
            </div>
            <div class="flex-1 w-full overflow-hidden flex flex-col gap-1">
            <span class="laylist-card-name">{{ name }}</span>
            <div class="h-full text-xs line-clamp-2">
           {{ displayAuthors }}
        </div>
        </div>
      </RouterLink>
</template>
<script setup>
import PlayDotIcon from "/src/components/PlayDotIcon.vue";
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps(["name","cover","authors","id"]);
const displayAuthors = computed(() => {
  return (
    props.authors
      .join(" y ")
  );
});
</script>