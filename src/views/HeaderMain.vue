<template>
    <div class="flex items-center p-2 justify-between fixed w-[1352px] z-50 bg-module">
        <div class="flex gap-3 h-8">
            <ChevronLeftIcon class="selectable p-2  bg-black rounded-full"></ChevronLeftIcon>
            <ChevronRightIcon class="selectable p-2 bg-black rounded-full"></ChevronRightIcon>
        </div>
        <div class="flex-1 ml-3">
            <div>
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
import { RouterLink } from "vue-router";
    </script>