<template>
  <div class="scroll-main">
    <div class="flex flex-col gap-3 mt-14">
      <div class="w-full gridc gap-2" v-if="data">
        <Featured
          v-for="featured in data.data.featured"
          :key="featured.key"
          :name="featured.name"
          :cover="featured.cover"
          :id="featured.id"
        />
      </div>

      <div class="flex flex-col gap-1" v-if="data">
        <div class="flex justify-between">
          <span class="text-heading cursor-pointer text-lg hover:underline"
            >Escuchado recientemente</span
          >
          <span class="text-sm hover:underline cursor-pointer"
            >Mostrar todos</span
          >
        </div>
        <div class="flex gap-1 overflow-y-hidden overflow-x-auto">
          <Recently
          v-for="recently in data.data.recently_played"
          :key="recently.key"
          :name="recently.name"
          :cover="recently.cover"
          :authors="recently.authors"
          :id="recently.id"
          />
        
        </div>
      </div>
      <div class="flex flex-col gap-1" v-if="data">
        <div class="flex justify-between">
          <span class="text-heading font-bold text-lg">Hecho para ti</span>
          <span class="text-sm hover:underline cursor-pointer"
            >Mostrar todos</span
          >
        </div>
        <div class="flex gap-1 overflow-y-hidden overflow-x-auto">
          <Mix
            v-for="mix in data.data.mixes"
            :key="mix.key"
            :id="mix.id"
            :mix="mix"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import Featured from "./HomeView/Featured.vue";
import Mix from "./HomeView/Mix.vue";
import Recently from "./HomeView/Recently.vue";

const data = ref(null);
axios.get("/src/api/endpoints/home.json").then((response) => {
  data.value = response.data;
});
</script>

<style scooped>
.gridc {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
}
</style>
