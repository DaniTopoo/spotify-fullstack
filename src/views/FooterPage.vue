<template>
    <div class="flex flex-col flex-1">
<div class="flex flex-1 justify-between items-center gap-3">
    <div class="flex items-center gap-3 flex-1 -mb-2">
        <div 
        class="flex items-center gap-3 p-2"
        v-if="PlaySong"
        v-for="song in PlaySong"
        :key="song.id">
        <div class="h-14 w-14 rounded">
            <img :src="song.album.cover" alt="imagen">
        </div>
        <div class="flex flex-col">
            <span class="text-heading song-selected" song-selected>{{ song.title }}</span>
            <span
            class="song-selected text-xs"
            v-for="author in song.authors">{{ author.name }}
          </span>
        </div>
    
        </div>
    </div>
        <div class="flex items-center gap-6 flex-1">
        <RandomIcon class="icon-size selectable"/>
        <BackwardStepIcon class="icon-size selectable"/>
        <PlayIcon class="icon-size selectable"/>
        <FowardStepIcon class="icon-size selectable"/>
        <RepeatIcon class="icon-size selectable"/>
    </div>
    <div class="flex items-center gap-6 m-1 mt-10">
        <span class="popper" data-tooltip="Conectar a un dispositivo">
        <PcIcon class="icon-size selectable"/>
        </span>
        <span class="popper" data-tooltip="Cola">
         <QueueIcon class="icon-size selectable"/>
        </span>
        <span class="popper" data-tooltip="Letra">
         <MicroPhone class="icon-size selectable"/>
        </span>
        <span class="popper" data-tooltip="Pantalla completa">
         <FullWIndowIcon class="icon-size selectable"/>
        </span>
    </div>
</div>
<div v-if="songSelected" class="flex progress-bar flex-1">
    <div class="time-display">{{  }}</div>
    <div class="progress-container">
      <div class="progress" :style="{ width: progressWidth }"></div>
    </div>
    <div 
    v-for="song in PlaySong"
    :key="song.id"
    class="time-display">
    <span v-if="song.duration >0">{{ formatTime(song.duration) }}</span>
    <span v-else>{{ 0 }}</span>
  </div>
  </div>
</div>
</template>
<script setup>
import {PlaySongStore} from '/src/store/PlaySong';
import { storeToRefs } from 'pinia';
import { ref, computed,watch, } from 'vue';

import PlayIcon from '../components/iconics/PlayIcon.vue';
import BackwardStepIcon from '../components/iconics/BackwardStepIcon.vue';
import FowardStepIcon from '../components/iconics/FowardStepIcon.vue';
import RepeatIcon from '../components/iconics/RepeatIcon.vue';
import RandomIcon from '../components/iconics/RandomIcon.vue';
import FullWIndowIcon from '../components/iconics/FullWIndowIcon.vue';
import MicroPhone from '../components/iconics/MicroPhone.vue';
import PcIcon from '../components/iconics/PcIcon.vue';
import QueueIcon from '../components/iconics/QueueIcon.vue';

const playingSong = PlaySongStore();
const {PlaySong} = storeToRefs(playingSong)
const duration = ref(PlaySong.duration)
let songSelected = ref(true);
const currentTime = ref(0);
let timer = ref(0);

const progressWidth = computed(() => `${(currentTime.value / duration.value) * 100}%`);
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

</script>

<style scoped>
.progress-bar {
  display: flex;
  align-items: center;
  width: 50%;
  margin: 0 auto;
}

.progress-container {
  flex-grow: 1;
  height: 5px;
  background-color: #ccc;
  position: relative;
}

.progress {
  height: 100%;
  background-color: #9b9b9b;
}

.time-display {
  margin: 0 10px;
}
</style>