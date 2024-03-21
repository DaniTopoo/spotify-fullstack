<template>
  <div class="flex flex-col h-screen w-screen overflow-hidden fixed bg-body">
  <div class=" flex gap-3 p-3">
    <Sidebar class="w-[420px] h-[750px]" />
    <main class="flex-1  flex-col module">
      <Header/>
      <div class=" h-full py-2 ">
        <RouterView></RouterView>
    </div>
    </main>
  </div>
</div>
</template>

<script setup>
import Sidebar from "./views/Sidebar.vue";
import Header from "./views/Header.vue";
import Profile from "./views/ProfileView.vue";
import FooterPage from "./views/FooterPage.vue";
import PlayListView from "./views/PlayListView.vue";
import { RouterView } from "vue-router";
</script>
