<template>
  <div v-if="playListData">
    <div class="flex p-5 items-center h-[250px] w-full text-heading relative mt-14">
      <div class="h-[200px] w-[200px]">
        <img id="imagen_cover"
          class="h-full w-full rounded js-fillcolor"
          :src="playListData.data.cover"
          alt="imagen"
        />
      </div>
      <div class="flex flex-col gap-6 absolute bottom-6 left-60">
        <span class="text-xs">Playlist</span>
        <span class="text-7xl font-bold tracking-tighter">{{
          playListData.data.name
        }}</span>
        <div class="flex gap-1 text-xs">
          <span
            v-for="(author, index) in playListData.data.authors"
            :key="index"
            class="hover:underline cursor-pointer"
            >{{ author.name }} ·</span
          >
          <span>7 me gusta ·</span>
          <span>5 canciones,</span>
          <span
            >{{
              minutesToString(playListData.data.total_duration)
            }}
            aproximadamente</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const playListData = ref(null);
var imagen_color = document.getElementById("imagen_cover")
  var imagen = new Image()
axios
  .get(`/src/api/endpoints/playlists/${route.params.id}.json`)
  .then((response) => {
    playListData.value = response.data;
  });
function minutesToString(minutes) {
  var hour = Math.floor(minutes / 60);
  var minute = minutes % 60;

  var result = "";

  if (hour > 0) {
    result += hour + " h ";
  }

  if (minute > 0 || hour > 0) {
    result += minute + " min";
  }

  return result.trim();
}
</script>
