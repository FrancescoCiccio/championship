<template>
    <NuxtLink :to="'/teams/' + team.playerName">
        <div :class="[
                index < 2 ? 'border-yellow-600' : 'border-white',
                'flex gap-4 text-2xl p-4 border border-t-0 first:border-t'
                ]">
            <div>
            </div>
            <div>
                {{  team.playerName }}
            </div>
            <div class="flex-grow"></div>
            <div>
                {{ team.point }} pts
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps(['team', 'index']);

</script>

<style scoped>

</style>