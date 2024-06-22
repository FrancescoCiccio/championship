<template>
    <section class="h-[40vh] rounded-b-2xl border-b-2 border-solid border-white/10 text-white overflow-hidden mask flex items-end p-4">
        <div class="flex flex-col lg:container lg:mx-auto">
            <h3>
                ADELFIA PADEL TOUR
            </h3>
            <h1>
                Classifica Players
            </h1>
        </div>
    </section>

    <RowScroll />

    <div class="lg:max-w-2xl mx-auto mt-20 flex flex-col gap-y-4">

        <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Cerca giocatore" 
            class="p-2 border-2 border-secondary rounded-md mb-4 text-primary"
        />

        <div v-for="(player, index) in filteredPlayers" :key="index + player.name" class="flex flex-col p-4 border-2 border-secondary rounded-md">
            <h2 class="text-2xl" v-text="index + 1"></h2>
            <div class="flex justify-between items-center">
                <NuxtLink :to="'/rank/player/' + player.name">
                    <h1 class="text-2xl lg:text-4xl" v-text="player.name"></h1>
                </NuxtLink>

                <div class="flex gap-x-4">
                    <span>Punti:</span>
                    <span v-text="player.rank"></span>
                </div>
            </div>
        </div>

    </div>

</template>

<script setup>

import { ref, onMounted, computed } from 'vue'
import { useNuxtApp } from '#app'
import { collection, getDocs, doc } from 'firebase/firestore'


const { $firestore } = useNuxtApp()

const players = ref([])
const searchQuery = ref('')


onMounted(async () => {
    try {
        const playersCollection = collection($firestore, 'players')
        const playersSnapshot = await getDocs(playersCollection)

        playersSnapshot.docs.map(player => {
            players.value.push({
                name: player.id,
                rank: player.data().rank
            })
        })

        players.value.sort((a, b) => b.rank - a.rank)
    } catch (error) {
        console.log('error: ', error);
    }
})

const filteredPlayers = computed(() => {
    return players.value.filter(player => 
        player.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
})
</script>

<style>

</style>