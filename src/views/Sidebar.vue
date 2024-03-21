<template>
  <aside class="flex flex-col gap-3">
    <div class="module flex flex-col gap-6 w-full">
      <router-link to="/" class="flex items-center gap-3 selectable">
        <HomeIcon class="icon-size" />
        <span class="font-bold">Inicio</span>
      </router-link>
      <router-link to="/search" class="flex items-center gap-3 selectable">
        <SearchIcon class="icon-size" />
        <span class="font-bold">Buscar</span>
      </router-link>
    </div>

    <div class="module flex flex-col gap-6 h-full w-full overflow-hidden">
      <div class="flex items-center justify-between">
        <div class="flex gap-3 selectable">
          <LibraryIcon class="icon-size"></LibraryIcon
          ><span class="font-bold popper" data-tooltip="Contraer tu biblioteca"
            >Tu biblioteca</span
          >
        </div>
        <div class="flex items-center gap-3">
          <span class="popper" data-tooltip="Crear una lista o carpeta">
            <PlusIcon class="icon-size selectable"> </PlusIcon>
          </span>
          <span class="popper" data-tooltip="Mostrar más">
            <ArrowRightIcon class="icon-size selectable"></ArrowRightIcon>
          </span>
        </div>
      </div>
      <div class="flex items-center gap-3 w-full flex-wrap">
        <div
          class="px-3 py-1 rounded-full bg-box text-heading hover:bg-piece overflow-x-hidden text-sm cursor-pointer default-transition"
          v-for="button in buttons"
          :key="button.id"
        >
          {{ button.name }}
        </div>
      </div>
      <div class="flex items-center justify-between w-full">
        <div class="gap-3 selectable cursor-pointer">
          <span class="popper" data-tooltip="Buscar en tu biblioteca">
            <SearchIcon class="h-4" />
          </span>
        </div>
        <div class="flex selectable gap-1 items-center">
          <span class="font-bold text-xs">Recientes</span>
          <PointedBarsIcon class="h-3" />
        </div>
      </div>
      <div class="scroll-side">
        <div v-if="playListData" class="flex flex-col">
          <RouterLink
            :to="`/playlist/${playlist.id}`"
            class="flex items-center text-heading cursor-pointer hover:bg-box hover:rounded-md"
            v-for="playlist in playListData.data.playlists"
            :key="playlist.key"
          >
            <div class="h-10 w-10">
              <img
                class="h-full w-full rounded-md"
                :src="playlist.cover"
                alt="imagen"
              />
            </div>
            <div class="flex flex-col pl-3">
              <p class="text-heading">{{ playlist.name }}</p>
              <div class="flex items-center">
                <span class="text-font">{{ playlist.type }} ·</span>
                <span
                  class="text-font p-1"
                  v-for="author in playlist.authors"
                  >{{ author }}</span
                >
              </div>
            </div>
          </RouterLink>
        </div>
        <div v-if="playListData" class="flex flex-col">
          <RouterLink
            :to="`/playlist/${playlist.id}`"
            class="flex items-center text-heading cursor-pointer hover:bg-box hover:rounded-md"
            v-for="playlist in playListData.data.playlists"
            :key="playlist.key"
          >
            <div class="flex items-center h-10 w-10">
              <img
                class="h-full w-full rounded-md"
                :src="playlist.cover"
                alt="imagen"
              />
            </div>
            <div class="flex flex-col pl-3">
              <p class="text-heading">{{ playlist.name }}</p>
              <div class="flex items-center">
                <span class="text-font">{{ playlist.type }} ·</span>
                <span
                  class="text-font p-1"
                  v-for="author in playlist.authors"
                  >{{ author }}</span
                >
              </div>
            </div>
          </RouterLink>
        </div>
        <div v-if="playListData" class="flex flex-col">
          <RouterLink
            :to="`/playlist/${playlist.id}`"
            class="flex items-center text-heading cursor-pointer hover:bg-box hover:rounded-md"
            v-for="playlist in playListData.data.playlists"
            :key="playlist.key"
          >
            <div class="flex items-center h-10 w-10">
              <img
                class="h-full w-full rounded-md"
                :src="playlist.cover"
                alt="imagen"
              />
            </div>
            <div class="flex flex-col pl-3">
              <p class="text-heading">{{ playlist.name }}</p>
              <div class="flex items-center">
                <span class="text-font">{{ playlist.type }} ·</span>
                <span
                  class="text-font p-1"
                  v-for="author in playlist.authors"
                  >{{ author }}</span
                >
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import HomeIcon from "/src/components/iconics/HomeIcon.vue";
import SearchIcon from "/src/components/iconics/SearchIcon.vue";
import LibraryIcon from "/src/components/iconics/LibraryIcon.vue";
import PlusIcon from "/src/components/iconics/PlusIcon.vue";
import ArrowRightIcon from "/src/components/iconics/ArrowRightIcon.vue";
import PointedBarsIcon from "/src/components/iconics/PointedBarsIcon.vue";

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
const playListData = ref(null);
axios.get("/src/api/endpoints/links.json").then((response) => {
  playListData.value = response.data;
});
</script>
