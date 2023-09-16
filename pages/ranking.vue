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
            <HeadlessTabPanel class="">
                <RankingRow v-for="(team, index) in rankingA" :key="index" :team="team" :index="index" />
            </HeadlessTabPanel>

            <HeadlessTabPanel class="">
                <RankingRow v-for="(team, index) in rankingB" :key="index" :team="team" :index="index" />
            </HeadlessTabPanel>
        </HeadlessTabPanels>
    </HeadlessTabGroup>
</template>

<script setup>

import ranksA from '@/public/json/rankingA.json'
import ranksB from '@/public/json/rankingB.json'

const compare = ( a, b ) => {
  if ( a < b ){
    return -1;
  }
  if ( a > b ){
    return 1;
  }
  return 0;
}

let rankingA = [];
let rankingB = [];

for (var team in ranksA) {
    rankingA.push([team, ranksA[team]]);
}

for (var team in ranksB) {
    rankingB.push([team, ranksB[team]]);
}

rankingA.sort(function(a, b) {
    return b[1] - a[1];
});


rankingB.sort(function(a, b) {
    return b[1] - a[1];
});
</script>

<style scoped>

</style>