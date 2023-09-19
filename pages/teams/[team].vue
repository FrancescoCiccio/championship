<template>

    <Navigation />

    <div v-if="team != undefined">
        <section class="h-[40vh] rounded-b-2xl border-b-2 border-solid border-white/10 text-white overflow-hidden mask flex items-end p-4 lg:">
            <div class="flex flex-col lg:container lg:mx-auto">
                <h3>
                    Team
                </h3>
                <h1>
                    {{  team.name }} 
                </h1>
            </div>
        </section>

        <div class="px-4 mt-4 grid grid-cols-2 gap-4 lg:container lg:mx-auto lg:grid-cols-4">
            <div class="col-span-1 flex flex-col relative" v-for="(player, index) in team.players">
                <span class="text-[100px] absolute -z-10 -top-8">
                    0{{  index + 1 }}
                </span>
                <img :src="player.avatar" class="w-full" alt="">
                <div class="flex border-secondary border-2 rounded-md gap-4 p-2">
                    <h3>
                        {{ player.position }}
                    </h3>
                    <div class="flex flex-col">
                        <p class="leading-none">
                            {{  player.name }}
                        </p>
                        <h2 class="text-xl leading-none">
                            {{  player.nickname }}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <h1>
            {{  teamName }}
        </h1>
    </div>
</template>

<script setup>

import teams from "@/public/json/teams.json";

const teamName = useRoute().params.team;
const team = teams[teamName];


</script>

<style scoped>
</style>