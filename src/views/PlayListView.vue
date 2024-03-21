<template>
<div class="flex flex-col gap-3">   
<div class="flex p-5 items-center">
    <div v-if="playListData">
        <h1>{{ $route.params.id }}</h1>
    </div>

 </div>
</div>

</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const playListData = ref(null)
axios.get('/src/api/endpoints/links.json').then ((response)=> {
    playListData.value = response.data
});
</script>