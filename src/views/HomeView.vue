<template>
    <div class="scroll-main">
<div class="flex flex-col gap-3">
<div class="w-full gridc gap-2">
    <div class="flex justify-between text-heading cursor-pointer rounded hover:bg-piece hover:rounded bg-box icon-visible"
    v-for="featureds in homeData.data.featured"
    :key="featureds.key">
    <div class="flex items-center">
        <div class="h-16 w-16">
        <img class="h-full w-full rounded-l" :src="featureds.cover" alt="imagen">
        </div>
        <div class="flex items-center">
        <span class="p-3">{{ featureds.name }}</span>
    </div>
    </div>
    <div class="flex items-center p-5">
    <PlayIcon class="icon-size selectable icon-hidden"/>
    </div>
  </div>
  <div class="flex justify-between text-heading cursor-pointer rounded hover:bg-piece hover:rounded bg-box icon-visible"
    v-for="featureds in homeData.data.featured"
    :key="featureds.key">
    <div class="flex items-center">
        <div class="h-16 w-16">
        <img class="h-full w-full rounded-l" :src="featureds.cover" alt="imagen">
        </div>
        <div class="flex items-center">
        <span class="p-3">{{ featureds.name }}</span>
    </div>
    </div>
    <div class="flex items-center p-5">
    <PlayIcon class="icon-size selectable icon-hidden"/>
    </div>
  </div>
 </div>
 
 <div class="flex flex-col gap-1">
    <div class="flex justify-between">
        <span class="text-heading cursor-pointer text-lg hover:underline">Escuchado recientemente</span>
        <span class="text-sm hover:underline cursor-pointer p-3">Mostrar todos</span>
    </div>
    <div class="flex gap-3">
        <div 
        class="flex flex-col p-3 hover:bg-piece hover:rounded cursor-pointer"
    v-for ="recently in recentlyData.data.recently_played"
    :key="recently.key">
    <div class="h-36 w-36 flex icon-visible">
        <img class="h-full w-full rounded" :src="recently.cover" alt="imagen">
        <PlayIcon class="h-10 selectable absolute z-50 bottom-0 right-0 icon-hidden "/>
        </div>
        <span class="text-heading">{{ recently.name }}</span>
        <span
        v-for="authors in recently.authors">{{ authors }}</span>
    </div>
    </div>
 </div>

 <div class="flex flex-col gap-1">
    <div class="flex justify-between">
        <span class="text-heading cursor-pointer text-lg hover:underline">Hecho para ti</span>
        <span class="text-sm hover:underline cursor-pointer p-3">Mostrar todos</span>
    </div>
    <div class="flex gap-3">
        <div 
        class="flex flex-col p-3 hover:bg-piece hover:rounded cursor-pointer "
    v-for ="mix in recentlyData.data.mixes"
    :key="mix.key">
    <div class="h-36 w-36 flex relative icon-visible">
        <img class="h-full w-full rounded" :src="mix.cover" alt="imagen">
        <PlayIcon class="h-10 selectable absolute z-50 bottom-0 right-0 icon-hidden "/>
        </div>
        <span
        v-if="mix.is_dedicated"
        class="text-heading">Mix de {{ mix.artist }}</span>
        <span
        v-else
        class="text-heading"> Mix {{ mix.artist }}</span>
        <div class="flex">
        <span
        v-for="artists in mix.featured_artists">
        {{artists.name}} </span>
        </div>
    </div>
    </div>
 </div>
</div>
 </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';
import PlayIcon from '../components/iconics/PlayIcon.vue';

const homeData = ref(null)
axios.get('/src/api/endpoints/home.json').then ((response)=> {
    homeData.value = response.data
})

const recentlyData = ref(null)
axios.get('/src/api/endpoints/home.json').then ((response)=> {
    recentlyData.value = response.data
})
</script>

<style scooped>
.gridc{
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(20rem,1fr))
}
</style>