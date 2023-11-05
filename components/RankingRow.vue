<template>
    <NuxtLink :to="'/teams/' + team.playerName">
        <div :class="[
                'flex gap-4 text-2xl p-4 border border-t-0 first:border-t'
                ]">
            <div :class="[
                'flex w-10 h-10 rounded-full items-center justify-center text-primary',
                index < 4 ? 'bg-[#FDBA37]' : '',
                index > 3 && index < 8 ? 'bg-[#D6D6D6]' : '',
                index > 7 ? 'bg-[#5F3E17]' : '',
            ]">
                {{ index + 1 }}
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