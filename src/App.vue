<template>
  <div class="flex flex-col h-screen w-screen overflow-hidden fixed bg-body">
    <div class="flex-col flex gap-3 p-3 h-full w-full">
      <div class="flex gap-3 h-[92%] w-full">
        <Sidebar />
        <main class="flex-1 flex-col module overflow-hidden">
          <Header />
          <div class="h-full py-2 w-full overflow-hidden">
            <RouterView></RouterView>
          </div>
        </main>
      </div>
      <div class="flex-1 w-full">
        <FooterPage/>
      </div>
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
