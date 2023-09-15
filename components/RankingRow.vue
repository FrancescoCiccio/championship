<template>
    <NuxtLink :to="'/teams/' + team[0]">
        <div :class="[
                index < 2 ? 'border-yellow-600' : 'border-white',
                'flex gap-4 text-2xl p-4 border border-t-0 first:border-t'
                ]">
            <div>
                {{  index + 1 }}
            </div>
            <div>
                {{  team[0] }}
            </div>
            <div class="flex-grow"></div>
            <div>
                {{  team[1] }} pts
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps(['team', 'index']);
</script>

<style scoped>

</style>