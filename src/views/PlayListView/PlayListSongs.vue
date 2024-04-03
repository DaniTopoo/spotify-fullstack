<template>
<div class="flex flex-col gap-3" v-if="playListData">
<div class="flex justify-between">
    <div class="flex gap-3 items-start">
    <span>{{ id }}</span>
    <div class="h-10 w-10 ">
        <img class="h-full w-full rounded" :src= 'cover' alt="imagen">
    </div>
    <div class="flex flex-col">
    <span
    class="text-heading"
    >{{ title }}</span>
    <span
    class="text-font"
    v-for="(author, index) in playListData.data.authors"
    :key="index"
    >{{ author.name }}</span>
    </div>
    </div>
    <span>{{ album }}</span>
    <span>{{ segundosAFecha(date) }}</span>
    <span >{{ segundosAFormatoTiempo(duration) }}</span>
</div>
</div> 
</template>
<script setup>
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import ClockIcon from '/src/components/iconics/ClockIcon.vue';
const route = useRoute()
const playListData = ref(null)
const props = defineProps(['id','cover','title','author','album','date','duration'])
function segundosAFormatoTiempo(segundos) {
    let minutos = Math.floor(segundos / 60);
    let segundosRestantes = segundos % 60;
    return `${minutos}:${segundosRestantes.toString().padStart(2, '0')}`;
}
function segundosAFecha(segundos) {
    let fecha = new Date(segundos * 1000);
    let meses = ["ene", "feb", "mar", "abr", "may", "jun",
                 "jul", "ago", "sep", "oct", "nov", "dic"];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();
    return `${dia} ${mes} ${año}`;
}
axios.get(`/src/api/endpoints/playlists/${route.params.id}.json`).then ((response)=> {
    playListData.value = response.data
});
</script>