<script setup>
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';

const homeData = ref(null)
axios.get('/src/api/endpoints/home.json').then ((response)=> {
    homeData.value = response.data
})
   
</script>

<template>
    <router-link to="/search" class=" content-center bg-black hover:bg-blue-500">
        <div v-if="homeData">
            
              <div
                v-for="featureds in homeData.data.featured"
                :key="featureds.key"
                >
            
                <div class="h-14 w-14 rounded-xl overflow-hidden">
                <img class="object-cover h-full w-full" :src="featureds.cover" alt="imagen">
                </div>
            <p class="p-4 text-white">{{ featureds.name}}</p>
            </div> 
           
        </div>
    </router-link>
</template>
