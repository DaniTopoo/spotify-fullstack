<template>
<div class="flex items-center p-2 justify-between fixed w-[1352px] z-50 bg-module">
    <div class="flex gap-3 h-8">
        <ChevronLeftIcon class="selectable p-2  bg-black rounded-full"></ChevronLeftIcon>
        <ChevronRightIcon class="selectable p-2 bg-black rounded-full"></ChevronRightIcon>
    </div>
    <div class="flex-1 ml-3">
        <div
    v-if="playListData">
    <div  class="flex items-center gap-3 opacity-0"
    :class="{
        'opacity-100': isVisible
    }">
        <PlayIcon
          class="h-12 w-12 p-3 pr-2 bg-green-500 rounded-full cursor-pointer hover:bg-green-300"
        />
        <span class="text-heading items-start text-2xl">{{ name }}</span>
    </div>
    </div>
        </div>
   
    <div class="flex items-center  gap-6">
        <span class="flex items-center gap-1 selectable text-sm p-1 bg-black rounded-full"><CircleDown class="h-6  p-1 bg-black rounded-full"/>Instalar app</span>
        <span class="popper"  data-tooltip="Novedades">
            <BellIcon class="selectable h-8 p-2 bg-black rounded-full"/>
        </span>
        <RouterLink 
        class="popper"
        data-tooltip="perfil"
        :to="`/profile`">
        <UserIcon class="selectable h-8 p-2 bg-black rounded-full"/>
        </RouterLink>
    </div>
</div>
</template>

<script setup>
import ChevronLeftIcon from "/src/components/iconics/ChevronLeftIcon.vue";
import ChevronRightIcon from "/src/components/iconics/ChevronRightIcon.vue";
import BellIcon from "/src/components/iconics/BellIcon.vue";
import CircleDown from "/src/components/iconics/CircleDownIcon.vue";
import UserIcon from "/src/components/iconics/UserIcon.vue"
import PlayIcon from "/src/components/iconics/PlayIcon.vue";
import axios from "axios";
import { RouterLink, useRoute, } from "vue-router";
import {ref,computed,onMounted} from "vue";
defineProps([
    'name'
])
const route = useRoute();
const playListData = ref(null);
axios
  .get(`/src/api/endpoints/playlists/${route.params.id}.json`)
  .then((response) => {
    playListData.value = response.data;
  });
  const contentScrolled = ref(0);
const isVisible = computed(()=>{
  return contentScrolled.value >= 45;
});
onMounted(() => {
  document.getElementById("playlist-container").addEventListener("scroll", handleScroll);
function handleScroll() {
  const scrollableDiv = document.getElementById("playlist-container");
  const scrollPosition = scrollableDiv.scrollTop;
  const scrollHeight = scrollableDiv.scrollHeight;
  const clientHeight = scrollableDiv.clientHeight;
  const percentageScrolled =
    (scrollPosition / (scrollHeight - clientHeight)) * 100;

  contentScrolled.value = percentageScrolled;
  console.log(contentScrolled.value)
}
});
</script>