<template>
  <div class="flex flex-col h-screen w-screen overflow-hidden fixed bg-body">
    <div class="flex-col flex gap-3 p-3 h-full w-full">
      <div class="flex gap-3 h-[87%] w-full">
        <Sidebar />
        <main class="flex-1 flex-col bg-module rounded-md overflow-hidden p-3">
          <HeaderMain/>
          <div class="h-full w-full overflow-hidden">
            <RouterView :key="$route.fullPath"></RouterView>
          </div>
        </main>
      </div>
      <div class="w-full flex flex-1 items-center">
        <FooterPage/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./views/Sidebar.vue";
import HeaderMain from "./views/HeaderMain.vue";
import FooterPage from "./views/FooterPage.vue";
import { RouterView } from "vue-router";
</script>
