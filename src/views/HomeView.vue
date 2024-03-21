<template>
  <div class="scroll-main">
    <div class="flex flex-col gap-3">
      <div class="w-full gridc gap-2" v-if="homeData">
        <Featured
          v-for="featured in homeData.data.featured"
          :key="featured.key"
          :name="featured.name"
          :cover="featured.cover"
        />
      </div>

      <div class="flex flex-col gap-1" v-if="recentlyData">
        <div class="flex justify-between">
          <span class="text-heading cursor-pointer text-lg hover:underline"
            >Escuchado recientemente</span
          >
          <span class="text-sm hover:underline cursor-pointer p-3"
            >Mostrar todos</span
          >
        </div>
        <div class="flex gap-3">
          <div
            class="flex flex-col p-3 hover:bg-piece hover:rounded cursor-pointer"
            v-for="recently in recentlyData.data.recently_played"
            :key="recently.key"
          >
            <div class="h-36 w-36 flex icon-visible">
              <img
                class="h-full w-full rounded"
                :src="recently.cover"
                alt="imagen"
              />
              <PlayIcon
                class="h-10 selectable absolute z-50 bottom-0 right-0 icon-hidden"
              />
            </div>
            <span class="text-heading">{{ recently.name }}</span>
            <span v-for="authors in recently.authors">{{ authors }}</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1" v-if="recentlyData">
        <div class="flex justify-between">
          <span class="text-heading font-bold text-lg">Hecho para ti</span>
          <span class="text-sm hover:underline cursor-pointer"
            >Mostrar todos</span
          >
        </div>
        <div class="flex gap-1 overflow-y-hidden overflow-x-auto">
          <Mix
            v-for="mix in recentlyData.data.mixes"
            :key="mix.key"
            :mix="mix"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import axios from "axios";
import { ref } from "vue";
import Featured from "./HomeView/Featured.vue";
import Mix from "./HomeView/Mix.vue";
const homeData = ref(null);
axios.get("/src/api/endpoints/home.json").then((response) => {
  homeData.value = response.data;
});

const recentlyData = ref(null);
axios.get("/src/api/endpoints/home.json").then((response) => {
  recentlyData.value = response.data;
});
</script>

<style scooped>
.gridc {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
}
</style>
