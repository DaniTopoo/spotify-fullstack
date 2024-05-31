<template>
  <div v-if="playListData" class="w-full h-full flex flex-col py-3 cursor-pointer">
    <div @click="add(song)"
    class="flex items-center justify-between p-1 ">
      <div class="flex-1">
        <div class="flex gap-2">
          <div class="pr-2 pt-3 items-center">{{ i + 1}}</div>
          <div class="h-10 w-10">
            <img class="h-full w-full rounded" :src="song.album.cover" alt="imagen" />
          </div>
          <div class="flex flex-col">
            <span class="text-heading song-selected">{{ song.title }}</span>
            <div class="song-selected">
              <span 
            v-for="author in playListData.data.songs[i].authors[0].name">{{ author }}
          </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 pl-16"><span class="song-selected">{{ song.album.title }}</span></div>
      <div class="flex-1 pl-4">{{ segundosAFecha(date) }}</div>
      <div class="w-12 items-center pl-3">{{ segundosAFormatoTiempo(duration) }}</div>
      <div class="w-12 pl-2"><EllipsisIcon class="selectable icon-size"/></div>
    </div>
    </div>
</template>
<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import { ref } from "vue";
import {PlaySongStore} from "/src/store/PlaySong"
import EllipsisIcon from "../../components/iconics/EllipsisIcon.vue";

const PlaySong = PlaySongStore();
const {add} = PlaySong;
const route = useRoute();
const playListData = ref(null);
const props = defineProps([
  "song",
  "date",
  "duration",
  "author",
  "i",
]);

function segundosAFormatoTiempo(segundos) {
  let minutos = Math.floor(segundos / 60);
  let segundosRestantes = segundos % 60;
  return `${minutos}:${segundosRestantes.toString().padStart(2, "0")}`;
}
function segundosAFecha(segundos) {
  let fecha = new Date(segundos * 1000);
  let meses = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];
  let dia = fecha.getDate();
  let mes = meses[fecha.getMonth()];
  let año = fecha.getFullYear();
  return `${dia} ${mes} ${año}`;
}

axios
  .get(`/src/api/endpoints/playlists/${route.params.id}.json`)
  .then((response) => {
    playListData.value = response.data;
  });
</script>
