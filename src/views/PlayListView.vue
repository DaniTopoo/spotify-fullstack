<template>
  <div class="scroll-main overflow-auto" id="playlist-container">
    <div class="flex flex-col gap-3 h-full" v-if="playListData">
      <div>
      <Header
      :name="playListData.data.name"
      />
      <PlayListHeader/>
    </div>
      <div class="flex justify-between items-center gap-6 ml-3">
        <PlayIcon
          class="h-12 w-12 p-3 pr-2 bg-green-500 rounded-full cursor-pointer hover:bg-green-300"
        />
        <div class="flex-1">
          <EllipsisIcon class=" items-end h-6 selectable"/>
        </div>
        <div>
  </div>
        <div class="flex gap-2 mr-5 selectable items-center">
          <span class="text-sm">Lista</span>
          <PointedBarsIcon class="h-4 " />
        </div>
      </div>
      <div class="flex flex-col w-full h-full divide-y divide-font/20">
        <div class="flex items-center justify-between">
          <div
            v-for="header in tableHeaders"
            class="py-2 p-2"
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
          <PlayListSongs
            class="hover:bg-piece p-2 coursor-pointer"
            v-for="(song, i) in playListData.data.songs"
            :song="song"
            :i="i"
            :author="song.authors"
            :duration="song.duration"
            :date="song.added_on"
          />
          <PlayListSongs
            class="hover:bg-piece p-2 coursor-pointer"
            v-for="(song, i) in playListData.data.songs"
            :song="song"
            :i="i"
            :author="song.authors"
            :duration="song.duration"
            :date="song.added_on"
          />
          <PlayListSongs
            class="hover:bg-piece p-2 coursor-pointer"
            v-for="(song, i) in playListData.data.songs"
            :song="song"
            :i="i"
            :author="song.authors"
            :duration="song.duration"
            :date="song.added_on"
          />
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Header from "/src/views/Header.vue";
import EllipsisIcon from "/src/components/iconics/EllipsisIcon.vue";
import ClockIcon from "/src/components/iconics/ClockIcon.vue";
import PlayIcon from "/src/components/iconics/PlayIcon.vue";
import PlayListHeader from "./PlayListView/PlayListHeader.vue";
import PlayListSongs from "./PlayListView/PlayListSongs.vue";
import PointedBarsIcon from "/src/components/iconics/PointedBarsIcon.vue";
const route = useRoute();
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
