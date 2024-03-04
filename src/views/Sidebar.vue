<template>
  <aside class="flex flex-col gap-3">
    <div class="module flex flex-col gap-6 w-full">
      <router-link to="/" class="flex items-center gap-3 selectable">
        <HomeIcon class="icon-size" />
        <span class="font-bold">Home</span>
      </router-link>
      <router-link to="/search" class="flex items-center gap-3 selectable">
        <SearchIcon class="icon-size" />
        <span class="font-bold">Search</span>
      </router-link>
    </div>

    <div class="module flex flex-col gap-6 h-full w-full">
      <div class="flex items-center justify-between">
        <div class="flex gap-3 selectable">
          <LibraryIcon class="icon-size"></LibraryIcon
          ><span class="font-bold">Tu biblioteca</span>
        </div>
        <div class="flex items-center gap-3">
          <PlusIcon
            class="icon-size fill-font hover:fill-heading default-transition cursor-pointer"
          ></PlusIcon>
          <ArrowRightIcon
            class="icon-size fill-font hover:fill-heading default-transition cursor-pointer"
          ></ArrowRightIcon>
        </div>
      </div>
      <div class="flex items-center gap-3 w-full flex-wrap">
        <div
          class="px-3 py-1 rounded-full bg-box text-heading overflow-x-hidden text-sm cursor-pointer hover:bg-piece default-transition"
          v-for="button in buttons"
          :key="button.id"
        >
          {{ button.name }}
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { RouterLink } from "vue-router";
import HomeIcon from "/src/components/iconics/HomeIcon.vue";
import SearchIcon from "/src/components/iconics/SearchIcon.vue";
import LibraryIcon from "/src/components/iconics/LibraryIcon.vue";
import PlusIcon from "/src/components/iconics/PlusIcon.vue";
import ArrowRightIcon from "/src/components/iconics/ArrowRightIcon.vue";

const buttons = [
  {
    id: "lists",
    name: "Listas",
  },
  {
    id: "artists",
    name: "Artistas",
  },
  {
    id: "albums",
    name: "Álbumes",
  },
  {
    id: "podcasts",
    name: "Pódcast y programas",
  },
];
</script>
