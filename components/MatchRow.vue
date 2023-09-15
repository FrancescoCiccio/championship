<template>
    <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
        <div class="flex flex-col">
            <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                {{ props.match.time }}
            </div>
            <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                {{ props.match.field }}
            </div>
        </div>
        <div class="flex flex-col text-2xl">
            <div class="flex items-center gap-2">
                <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/' + props.match.homeFlag" v-if="props.match.homeFlag" alt="">
                {{ props.match.homeTeam }}
            </div>
            <div class="flex items-center gap-2">
                <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/' + props.match.awayFlag" v-if="props.match.awayFlag" alt="">

                {{ props.match.awayTeam }}
            </div>
        </div>
        <div class="flex-grow"></div>
        <div class="flex flex-col text-2xl p-1 bg-primary rounded-sm items-center" v-if="props.match.status == 1">
            <div>
                {{ props.match.homeScore }}
            </div>
            <div>
                {{ props.match.awayScore }}
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['match'])
</script>

<style scoped>
</style>