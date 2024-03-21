<template>
  <div
    class="min-w-40 min-h-56 max-w-40 max-h-56 flex flex-col gap-2 hover:bg-box rounded-lg transiton-all duration-300 p-2 cursor-pointer"
  >
    <div
      class="h-[70%] w-full flex relative icon-visible rounded overflow-hidden"
    >
      <img class="h-full w-full object-cover" :src="mix.cover" alt="imagen" />
      <PlayDotIcon class="absolute bottom-0 right-0 m-2" />
    </div>
    <div class="flex-1 w-full overflow-hidden flex flex-col gap-1">
      <span v-if="mix.is_dedicated" class="playlist-card-name"
        >Mix de {{ mix.artist }}</span
      >
      <span v-else class="playlist-card-name"> Mix {{ mix.artist }}</span>
      <div class="h-full text-xs line-clamp-2">
        {{ displayArtists }}
      </div>
    </div>
  </div>
</template>

<script setup>
import PlayDotIcon from "/src/components/PlayDotIcon.vue";
import { computed } from "vue";

const props = defineProps(["mix"]);

const displayArtists = computed(() => {
  return (
    props.mix.featured_artists
      .map((artist) => {
        return artist.name;
      })
      .join(", ") + " y más"
  );
});
</script>
