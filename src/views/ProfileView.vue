<template>
<div 
v-if="profileData"
class="flex flex-col gap-3">   
<HeaderMain/>
<div class="flex mt-28">
<img :src=profileData.data.avatar
 alt="Perfil" class="h-40 rounded-full">
 <div class="flex flex-col m-7 gap-3">
    <span class="text-white">Perfil</span>
    <span class="text-7xl text-white">{{profileData.data.name}}</span>
    <div class="text-white">
      <span>10 listas públicas · </span>
      <span class="hover:underline cursor-pointer">4 seguidores · </span>
      <span class="hover:underline cursor-pointer">Sigue a 35 usuarios </span>
    </div>

 </div>
</div>

</div>
</template>
<script setup>
import axios from "axios";
import HeaderMain from "./Header.vue";
import { ref } from "vue";

const profileData = ref(null);
axios
  .get(`/src/api/endpoints/me.json`)
  .then((response) => {
    profileData.value = response.data;
  });
</script>