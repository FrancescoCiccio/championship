<template>
    <div class="p-2 rounded-lg bg-[#277379] flex flex-col w-full gap-y-4">
        <div class="w-full p-2 px-4 bg-primary rounded-md flex items-center justify-center uppercase">
            <span v-text="formatTimestamp(match?.data.when)"></span>
        </div>
        <div class="flex items-center gap-2">
            <div class="flex flex-col">
                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md relative z-10">
                    <span v-text="match?.data.field"></span>
                </div>
                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-4 relative">
                    <span class="text-primary" v-text="match?.data.name"></span>
                </div>
            </div>
            <div class="flex flex-col text-xl lg:text-2xl">
                    <div class="flex items-center gap-2">
                        <span v-text="match?.data.home"></span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span v-text="match?.data.away"></span>
                    </div>
            </div>
            <div class="flex-grow"></div>
            <div class="flex flex-col text-2xl lg:text-2xl p-1 bg-primary rounded-sm items-center" v-if="match?.data.played">
                <div>
                    <span v-text="match?.data.home_s"></span>
                </div>
                <div>
                    <span v-text="match?.data.away_s"></span>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

const props = defineProps(['match'])


const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000)
  return date.toLocaleDateString('it-IT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  })
}

</script>