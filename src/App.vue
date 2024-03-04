<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HomeIcon from './components/iconics/HomeIcon.vue';
import SearchIcon from './components/iconics/SearchIcon.vue';
import LibraryIcon from './components/iconics/LibraryIcon.vue';
import PlusIcon from './components/iconics/PlusIcon.vue';
import ArrowRightIcon from './components/iconics/ArrowRightIcon.vue';
</script>

<template>
    <div class=" bg-zinc-900 h-31 w-1/5 rounded-md  m-2">      
            <router-link to="/">
               <div class="flex ml-5 text-gray-400  hover:text-white fill-gray-400   hover:fill-white ">
                <HomeIcon class="mt-4"></HomeIcon>
                <span class=" p-2 justify-center ml-2 mt-2 text-md">Home</span>
               </div>
                
            </router-link><br>
            <router-link to="/search">
            <div class="flex ml-5 text-gray-400  hover:text-white fill-gray-400   hover:fill-white">
            <SearchIcon></SearchIcon>
            <span class=" p-2 justify-center ml-3 -mt-3 mb-1 text-md">Search</span>
            </div>
            </router-link>
            <RouterView></RouterView>      
</div>
<div class=" flex flex-col bg-zinc-900 h-31 w-1/5 rounded-md  m-2">
   <div class="flex justify-between">
      <div class="flex text-gray-400 hover:text-white cursor-pointer m-3">
         <LibraryIcon></LibraryIcon><span class="ml-2">Tu biblioteca</span>
      </div>
      <div class="flex items-center fill-gray-400 text-gray-400">
         <PlusIcon class="h-8 p-1"></PlusIcon>
         <ArrowRightIcon class="h-10"></ArrowRightIcon>
      </div>
   </div>
   <div class=" flex bg-zinc-900 w-1/5 rounded-b-md -mt-2 p-2 text-white">
         <button class="p-2 bg-zinc-800 rounded-3xl text-sm m-1 hover:bg-zinc-700">Listas</button>
         <button class="p-2 bg-zinc-800 rounded-3xl text-sm m-1 hover:bg-zinc-700">Artistas</button>
         <button class="p-2 bg-zinc-800 rounded-3xl text-sm m-1 hover:bg-zinc-700">Álbumes</button>
         <button class="p-2 bg-zinc-800 rounded-3xl text-sm m-1 hover:bg-zinc-700">Pódcast y programas</button>
      </div>

</div>
</template>