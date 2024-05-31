<template>
     <div class="flex flex-col gap-3 h-full scroll-main">
<HeaderSearch/>
<div class="flex flex-col overflow-hidden mt-28 text-2xl text-white gap-3 p-4">
    <span class="font-bold">
        Explorar todo
    </span>
    <div class="grid-container">
    <div 
    v-for="music in searchMusic"
    class=" grid-item rounded-lg flex justify-between cursor-pointer"
        :style="{ backgroundColor: music.background }">
        <span class="p-2 item-name font-bold">{{music.name}}</span>
        <div class="h-24 w-24">
            <img 
            class="rounded-md cover-image"
            :src="music.cover" alt="">
        </div>
    </div>
</div>
</div>
</div>
</template>

<script setup>
import HeaderSearch from './HeaderSearch.vue';
const searchMusic = [
    {
        name:"Música",
        cover: "https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb",
        background: "#dc148c"
    },
    {
          name: "Pódcasts",
          cover: "https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa",
          background: "#006450"
        },
        {
          name: "Eventos",
          cover: "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
          background: "#982bdd"
        },
        {
          name: "Novedades",
          cover: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
          background: "#e8115b"
        },    
        {
        name:"Verano",
        cover: "https://i.scdn.co/image/ab67fb8200005caf097a46192e6bb67e52cdff60",
        background: "#27856a"
    },
    {
          name: "Pop",
          cover: "https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768",
          background: "#148a08"
        },
        {
          name: "Fiesta",
          cover: "https://i.scdn.co/image/ab67fb8200005cafcbf80f8ea695536eace4fd2c",
          background: "#537aa1"
        },
        {
          name: "Descubrir",
          cover: "https://i.scdn.co/image/ab67fb8200005caf341265d27be641506e56c346",
          background: "#8d67ab"
        }
]
</script>

<style scooped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 144px);
  column-gap: 170px; /* Ajusta el espacio entre los elementos si es necesario */
  row-gap:20px;
}

.grid-item {
  width: 300px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px; /* Ajusta el padding si es necesario */
  position: relative;
  border: 1px solid #000; /* Ajusta el borde si es necesario */
  box-sizing: border-box;
  overflow: hidden;
}

.item-name {
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 0;
}

.cover-image {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 160px; /* Ajusta el tamaño de la imagen según sea necesario */
  height: 160px; /* Ajusta el tamaño de la imagen según sea necesario */
  object-fit: cover;
  transform: rotate(35deg);
}
</style>