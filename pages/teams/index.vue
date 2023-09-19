<template>
    <section class="h-[40vh] rounded-b-2xl border-b-2 border-solid border-white/10 text-white overflow-hidden mask flex items-end p-4">
        <div class="flex flex-col container mx-auto">
            <h3>
                Torneo
            </h3>
            <h1>
                Le Squadre
            </h1>
        </div>
    </section>

    <RowScroll />

    <div class="my-8 px-5 lg:max-w-2xl lg:mx-auto">
        <TeamRow v-for="team in teams" :team="team" :key="team.name + 'team'"></TeamRow>
    </div>

    <RowScroll />

</template>

<script setup>
    import teams from "@/public/json/teams.json";


    console.log('I Team', teams);
</script>