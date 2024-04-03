<template>
    <div class="scroll-main">
    <div v-if="playListData">
        
<div class="flex flex-col gap-3">
  <PlayListHeader/>
 <div>
  <PlayIcon class="h-12 w-12 p-3 pr-2 bg-green-500 rounded-full cursor-pointer hover:bg-green-300"/>
 </div>
 <div class="flex justify-between text-xs">
    <div class="flex gap-6">
    <span>#</span>
    <span>Titulo</span>
    </div>
    <span>Álbum</span>
    <span>Fecha en la que se añadió</span>
    <span class="popper" data-tooltip="Duración"> <ClockIcon class="h-4 fill-font -ml-7"/></span>
</div>
<hr>
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
</div>
</div>
</div>
</div>
</template>
<script setup>
import axios from 'axios';
import { ref, } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ClockIcon from '/src/components/iconics/ClockIcon.vue';
import PlayIcon from "/src/components/iconics/PlayIcon.vue";
import PlayListHeader from "./PlayListView/PlayListHeader.vue";
import PlayListSongs from "./PlayListView/PlayListSongs.vue";
const route = useRoute()
const router = useRouter()
const playListData = ref(null)
axios.get(`/src/api/endpoints/playlists/${route.params.id}.json`).then ((response)=> {
    playListData.value = response.data
});
</script>
