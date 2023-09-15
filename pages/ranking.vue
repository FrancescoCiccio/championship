<template>

    <Navigation />

    <section class="h-[40vh] rounded-b-2xl border-b-2 border-solid border-white/10 text-white overflow-hidden mask flex items-end p-4">
        <div class="flex flex-col">
            <h3>
                Classifica
            </h3>
            <h1>
                Footballite
            </h1>
        </div>
    </section>
    <div class="mt-12 px-4">
        <RankingRow v-for="(team, index) in sortable" :key="index" :team="team" :index="index" />
    </div>
</template>

<script setup>

import ranks from '@/public/json/ranking.json'

const compare = ( a, b ) => {
  if ( a < b ){
    return -1;
  }
  if ( a > b ){
    return 1;
  }
  return 0;
}

let sortable = [];

for (var team in ranks) {
    sortable.push([team, ranks[team]]);
}

sortable.sort(function(a, b) {
    return b[1] - a[1];
});
</script>

<style scoped>

</style>