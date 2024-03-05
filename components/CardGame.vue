<template>
    <div class="cardgame my-2 lg:my-8 lg:col-span-1 self-center">
        <div class="p-4 bg-secondary text-white rounded-tr-xl max-w-[80%]">
            {{ Object.keys(props.day)[0] }}
        </div>
        <div class="p-2 border-2 border-secondary rounded-xl rounded-tl-none flex flex-col gap-2">
            <MatchRow v-for="(game, index) in day[Object.keys(props.day)[0]]" :match="game" :key="Object.keys(props.day)[0] + 'match-' + index" />
        </div>
    </div>
</template>

<script setup>

    const props = defineProps(['day'])


</script>

<style scoped>

</style>