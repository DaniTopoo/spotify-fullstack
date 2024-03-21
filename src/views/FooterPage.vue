<template>
<div class="flex justify-between gap-3">
    <div class="flex items-center m-3">
    <HeartIcon class="icon-size selectable"/>
    </div>
    <div class="flex items-center gap-6">
        <RandomIcon class="icon-size selectable"/>
        <BackwardStepIcon class="icon-size selectable"/>
        <PlayIcon class="icon-size selectable"/>
        <FowardStepIcon class="icon-size selectable"/>
        <RepeatIcon class="icon-size selectable"/>

    </div>
    <div class="flex items-center gap-6 m-1">
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
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink } from "vue-router";
import PlayIcon from '../components/iconics/PlayIcon.vue';
import BackwardStepIcon from '../components/iconics/BackwardStepIcon.vue';
import FowardStepIcon from '../components/iconics/FowardStepIcon.vue';
import RepeatIcon from '../components/iconics/RepeatIcon.vue';
import RandomIcon from '../components/iconics/RandomIcon.vue';
import FullWIndowIcon from '../components/iconics/FullWIndowIcon.vue';
import MicroPhone from '../components/iconics/MicroPhone.vue';
import PcIcon from '../components/iconics/PcIcon.vue';
import HeartIcon from '../components/iconics/HeartIcon.vue';
import QueueIcon from '../components/iconics/QueueIcon.vue';

const footerData = ref(null)
axios.get('/src/api/endpoints/home.json').then ((response)=> {
    footerData.value = response.data

})
</script>