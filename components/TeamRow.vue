<template>
    <NuxtLink :to="'/teams/' + team.name">
        <div class="py-4 px-2 rounded-xl bg-white/10 my-4 flex flex-col">
            <div class="flex gap-4">
                <img class="w-6 h-6 rounded-full object-cover" :src="'/images/flags/' + team.flag" v-if="team.flag" alt="">
                <h2>
                    {{ team?.name }}
                </h2>
            </div>
            <div class="flex gap-4">
                <div class="w-6">
                </div>
                <div class="flex gap-2">
                    <span class="text-sm" v-for="player in team?.players" :key="team.name + player.name">
                        {{  player.nickname }} 
                    </span>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps(['team'])
</script>