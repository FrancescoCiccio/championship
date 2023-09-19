<template>
    <NuxtLink :to="'/teams/' + team.playerName">
        <div :class="[
                index < 2 ? 'border-yellow-600' : 'border-white',
                'flex gap-4 text-2xl p-4 border border-t-0 first:border-t'
                ]">
            <div>
                {{  team.position }}
            </div>
            <div>
                {{  team.playerName }}
            </div>
            <div class="flex-grow"></div>
            <div>
                {{ team.points * 3 }} pts
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps(['team']);
</script>

<style scoped>

</style>