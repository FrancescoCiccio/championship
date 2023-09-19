<template>

    <Navigation />

    <section class="h-[40vh] rounded-b-2xl border-b-2 border-solid border-white/10 text-white overflow-hidden mask flex items-end p-4">
        <div class="flex flex-col lg:container lg:mx-auto">
            <h3>
                Classifica
            </h3>
            <h1>
                Footballite
            </h1>
        </div>
    </section>

    

    <HeadlessTabGroup>
        <HeadlessTabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mx-4 lg:max-w-lg lg:mx-auto mt-8">
            <HeadlessTab
                as="template"
                v-slot="{ selected }"
            >
                <button
                    :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-secondary focus:outline-none focus:ring-2',
                    selected
                        ? 'bg-white shadow text-primary'
                        : 'text-white/50 hover:bg-white/[0.12] hover:text-white',
                    ]"
                >
                    Girone A
                </button>
            </HeadlessTab>
            <HeadlessTab
                as="template"
                v-slot="{ selected }"
            >
                <button
                    :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-secondary focus:outline-none focus:ring-2',
                    selected
                        ? 'bg-white shadow text-primary'
                        : 'text-white/50 hover:bg-white/[0.12] hover:text-white',
                    ]"
                >
                    Girone B
                </button>
            </HeadlessTab>
        </HeadlessTabList>

        <HeadlessTabPanels class="mt-2 lg:max-w-xl lg:mx-auto">
            <HeadlessTabPanel class="" v-if="rankingA.length > 0">
                <RankingRow v-for="(team, index) in rankingA" :key="index" :team="team" />
            </HeadlessTabPanel>

            <HeadlessTabPanel v-else>
                <p>
                    Carico le classifiche ...
                </p>
            </HeadlessTabPanel>

            <HeadlessTabPanel class="" v-if="rankingB.length > 0">
                <RankingRow v-for="(team, index) in rankingB" :key="index" :team="team" />
            </HeadlessTabPanel>

            <HeadlessTabPanel v-else>
                <p>
                    Carico le classifiche ...
                </p>
            </HeadlessTabPanel>
        </HeadlessTabPanels>
    </HeadlessTabGroup>
</template>

<script setup>

import { onMounted, onUnmounted, ref } from 'vue';
import ranksA from '@/public/json/rankingA.json'
import ranksB from '@/public/json/rankingB.json'
import axios from 'axios';


let rankingA = ref([]);
let rankingB = ref([]);

onMounted(async () => {
    
    const responseA = await fetch('https://swisssystem.org/api/tournament/Standings/d55309a7cd4f439681cc5cb5e1a6fb5a');
    const classificaA = await responseA.json();


    let ranks = classificaA.result.players;
    let ranksA = []

    ranks.forEach((player) => {
        ranksA.push(player);
    })

    rankingA.value = ranksA;
})
</script>