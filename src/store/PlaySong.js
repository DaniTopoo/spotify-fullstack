import { defineStore } from "pinia";
import { ref } from "vue";

export const PlaySongStore = defineStore('PlaySong',()=>{

    const PlaySong = ref([]);
    
    const add = (song)=> {
        
        if(PlaySong.value.length == 1){
            PlaySong.value.pop(song);
        }
            PlaySong.value.push(song)
            
        console.log(song)
    };
    return{
        PlaySong,
        add,
       

    }
});