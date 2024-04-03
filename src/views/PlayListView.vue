<template>
  <div class="scroll-main overflow-auto" id="playlist-container">
    <div class="flex flex-col gap-3 h-full" v-if="playListData">
      <PlayListHeader />
      <div>
        <PlayIcon
          class="h-12 w-12 p-3 pr-2 bg-green-500 rounded-full cursor-pointer hover:bg-green-300"
        />
      </div>
      <div class="flex flex-col w-full divide-y divide-font/20 h-full">
        <div class="flex items-center justify-between">
          <div
            v-for="header in tableHeaders"
            class="py-2"
            :class="{
              'w-12': header.width == 'mini',
              'flex-1': header.width == 'normal',
            }"
          >
            <span v-if="header.text != null" class="text-sm">
              {{ header.text }}</span
            >
            <component :is="header.icon" v-else class="fill-font h-4" />
          </div>
        </div>
        <div class="w-full h-full flex flex-col py-3">
          <div class="flex items-center justify-between" v-for="i in 100">
            <div class="w-12">1</div>
            <div class="flex-1">a</div>
            <div class="flex-1">b</div>
            <div class="flex-1">c</div>
            <div class="w-12">1</div>
            <div class="w-12"></div>
          </div>
        </div>

        <!-- <div class="flex justify-between text-xs">
          <div class="flex gap-6">
            <span>#</span>
            <span>Titulo</span>
          </div>
          <span>Álbum</span>
          <span>Fecha en la que se añadió</span>
          <span class="popper" data-tooltip="Duración">
            <ClockIcon class="h-4 fill-font -ml-7"
          /></span>
        </div>
        <hr />
        <div class="flex flex-col">
          <PlayListSongs
            class="hover:bg-piece p-2 coursor-pointer"
            v-for="song in playListData.data.songs"
            :key="song.key"
            :title="song.title"
            :cover="song.album.cover"
            :album="song.album.title"
            :author="song.authors.name"
            :duration="song.duration"
            :date="song.added_on"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import ClockIcon from "/src/components/iconics/ClockIcon.vue";
import PlayIcon from "/src/components/iconics/PlayIcon.vue";
import PlayListHeader from "./PlayListView/PlayListHeader.vue";
import PlayListSongs from "./PlayListView/PlayListSongs.vue";
const route = useRoute();
const router = useRouter();
const playListData = ref(null);
axios
  .get(`/src/api/endpoints/playlists/${route.params.id}.json`)
  .then((response) => {
    playListData.value = response.data;
  });

const tableHeaders = [
  {
    text: "#",
    icon: null,
    width: "mini",
  },
  {
    text: "Título",
    icon: null,
    width: "normal",
  },
  {
    text: "Álbum",
    icon: null,
    width: "normal",
  },
  {
    text: "Fecha en la que se añadió",
    icon: null,
    width: "normal",
  },
  {
    text: null,
    icon: ClockIcon,
    width: "mini",
  },
  {
    text: "",
    icon: null,
    width: "mini",
  },
];
</script>
