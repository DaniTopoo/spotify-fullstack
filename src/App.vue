<template>
  <div class="h-screen w-screen overflow-hidden fixed bg-body flex gap-3 p-3">
    <Sidebar class="w-[420px] h-full" />
    <main class="flex-1 h-full module"></main>
  </div>
</template>

<script setup>
import Sidebar from "./views/Sidebar.vue";
</script>
