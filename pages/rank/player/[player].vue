<template>
    <section class="h-[40vh] rounded-b-2xl border-b-2 border-solid border-white/10 text-white overflow-hidden mask flex items-end p-4">
        <div class="flex flex-col lg:container px-4 lg:mx-auto">
            <h3>
                ADELFIA PADEL TOUR
            </h3>
            <h1 v-text="route.params.player"></h1>
        </div>
    </section>

    <RowScroll />

    <div class="mt-4 lg:container px-4 mx-auto" v-if="player">
        <div class="flex flex-col-reverse lg:flex-row gap-y-2 gap-x-4 justify-between items-center">

            <div class="flex flex-col">
                <div class="flex gap-x-2">
                    <span class="text-secondary">Nome:</span>
                    <span v-text="player.name"></span>
                </div>
                <div class="flex gap-x-2">
                    <span class="text-secondary">Punti APT:</span>
                    <span v-text="player.rank"></span>
                </div>
            </div>

            <div>
                <img :src="player.avatar" class="max-h-[300px] rounded-full border-2 border-secondary aspect-square object-cover" alt="">
            </div>

        </div>
    </div>

</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { useNuxtApp } from '#app'
    import { collection, getDocs, doc, getDoc } from 'firebase/firestore'


    const { $firestore } = useNuxtApp()
    const route = useRoute()

    const player = ref(null);

   

    onMounted(async () => {
        try {
            const playerRef = doc($firestore, 'players', route.params.player) // Sostituisci 'players' con il nome corretto della tua collezione
            const playerSnapshot = await getDoc(playerRef)

            player.value = { name: playerSnapshot.id, ...playerSnapshot.data()}
        } catch (error) {
            console.error(error);
        }
    })
</script>

<style>

</style>