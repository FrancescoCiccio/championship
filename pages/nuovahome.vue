<template>
    <section class="h-[40vh] rounded-b-2xl border-b-2 border-solid border-white/10 text-white overflow-hidden mask flex items-end p-4">
        <div class="flex flex-col container mx-auto">
            <h3>
                Footballite
            </h3>
            <h1>
                Villa Paola - Mundialito
            </h1>
        </div>
    </section>

    <RowScroll />

    <div v-if="!loading">
        <div class="my-4 flex px-4 lg:px-0 container mx-auto">
            <HeadlessMenu as="div" class="relative" v-if="currentPlayday != null">
                <div>
                    <HeadlessMenuButton
                      class="btn flex gap-4"
                    >
                        {{ currentPlayday.name }}
                        
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="#41BFC9"/>
                        </svg>
                    </HeadlessMenuButton>
                </div>
    
                <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                >
                    <HeadlessMenuItems
                        class="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-secondary ring-opacity-5 focus:outline-none z-50 max-h-[200px] overflow-y-scroll"
                    >
                        <HeadlessMenuItem v-for="playday in playdays" :key="playday.name">
                            <button
                                :class="[
                               'text-gray-900',
                                'group flex flex-col w-full items-start rounded-md px-2 py-2 text-sm',
                                ]"
                                @click="changePlayday(playday)"
                            >
                                {{ playday.name }}
                                <div class="flex text-xs text-slate-400 gap-1">
                                    
                                    <span>
                                        {{ ' ' +  playday.from + ' ' }} 
                                    </span>
                                    <span>
                                        -
                                    </span>
                                    <span>
                                        {{  playday.to  }}
                                    </span>
                                </div>
                            </button>
                        </HeadlessMenuItem>
                    </HeadlessMenuItems>
                </transition>
            </HeadlessMenu> 
        </div>
    
        <HeadlessTabGroup >
            <HeadlessTabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mx-4 lg:max-w-lg lg:mx-auto">
                <HeadlessTab
                    as="template"
                    v-slot="{ selected }"
                >
                    <button
                        :class="[
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-secondary focus:outline-none focus:ring-2',
                        selected
                            ? 'bg-white shadow text-primary'
                            : 'text-white/50 hover:bg-white/[0.12] hover:text-white',
                        ]"
                    >
                        Girone A
                    </button>
                </HeadlessTab>
                <HeadlessTab
                    as="template"
                    v-slot="{ selected }"
                >
                    <button
                        :class="[
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-secondary focus:outline-none focus:ring-2',
                        selected
                            ? 'bg-white shadow text-primary'
                            : 'text-white/50 hover:bg-white/[0.12] hover:text-white',
                        ]"
                    >
                        Girone B
                    </button>
                </HeadlessTab>
            </HeadlessTabList>
    
            <HeadlessTabPanels class="mt-2">
                <HeadlessTabPanel class="my-4 px-4 container mx-auto lg:px-0 lg:grid lg:grid-cols-3 lg:gap-4">
                   
                    
                    <div 
                        v-for="(day, index) in currentPlayday.daysA"
                        class="cardgame my-2 lg:my-8 lg:col-span-1">
                        <div class="p-4 bg-secondary text-white rounded-tr-xl max-w-[80%]">
                            {{ index }}
                        </div>
                        <div class="p-2 border-2 border-secondary rounded-xl rounded-tl-none flex flex-col gap-2">
                            <MatchRow v-for="(game, index) in day" :match="game" :key="day.id + 'match-' + index" />
                        </div>
                    </div>
    
    
                </HeadlessTabPanel>
    
                <HeadlessTabPanel class="my-4 px-4 container mx-auto lg:px-0 lg:grid lg:grid-cols-3 lg:gap-4">
                    <div 
                        v-for="(day, index) in currentPlayday.daysB"
                        class="cardgame my-2 lg:my-8 lg:col-span-1">
                        <div class="p-4 bg-secondary text-white rounded-tr-xl max-w-[80%]">
                            {{ index }}
                        </div>
                        <div class="p-2 border-2 border-secondary rounded-xl rounded-tl-none flex flex-col gap-2">
                            <MatchRow v-for="(game, index) in day" :match="game" :key="day.id + 'match-' + index" />
                        </div>
                    </div>
                </HeadlessTabPanel>
            </HeadlessTabPanels>
        </HeadlessTabGroup>
       
    </div>
</template>

<script setup>

import { onMounted, onUnmounted, ref, nextTick  } from 'vue';
import { gsap } from "gsap";
//import { playdays} from "@/public/json/playday.json";

var playdays = ref([]);
var loading = ref(true);

var currentPlayday = ref(null);

const loadPlaydays = (playdaysTemp) => {
    playdays.value = playdaysTemp;
}

var loadingChange = (status) => {
    loading.value = status;
} 

const changePlayday = (newplayday) => {
    currentPlayday.value = newplayday
}

const weekDays = [
        "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

function sortDataByDay(data) {

    const sortedData = {};

    for (const property in data) {
        for (const day of weekDays) {
            if (property.includes(day)) {
            sortedData[day] = data[property];
            break; // Esci dal loop interno quando hai trovato una corrispondenza
            }
        }
    }
    console.log(sortedData);

    return sortedData;
}

onMounted(async () => {

    await nextTick();
    
    loadingChange(true);

    const playdaysRequest = await fetch('./api/query?col=Giornate');    
    const playdaysResponse = await playdaysRequest.json();

    
    
    var tempPlaydays = playdaysResponse.result;

    await tempPlaydays.forEach(async (day, index) => {
        // recupero le giornate A e le aggiungo gruppandole per 
        var partiteAurl = "./api/query?col=Giornate/" + day.id + "/partiteA";

        var partiteBurl = "./api/query?col=Giornate/" + day.id + "/partiteB";

        var fetchA = await fetch(partiteAurl);
        var fetchA = await fetchA.json();
        var partiteA = fetchA.result;

        const groupedDataA = {};
        const groupedDataB = {};


        // Iteriamo attraverso l'array originale
        partiteA.forEach((item) => {
            const giorno = item.giorno;

            if (!groupedDataA[giorno]) {
                groupedDataA[giorno] = [];
            }

            // Aggiungiamo l'elemento all'array corrispondente al giorno
            groupedDataA[giorno].push(item);
        });

        day['daysA'] = sortDataByDay(groupedDataA);

        var fetchB = await fetch(partiteBurl);
        var fetchB = await fetchB.json();
        
        var partiteB = fetchB.result;

        partiteB.forEach((item) => {
            const giorno = item.giorno;

            if (!groupedDataB[giorno]) {
                groupedDataB[giorno] = [];
            }

            // Aggiungiamo l'elemento all'array corrispondente al giorno
            groupedDataB[giorno].push(item);
        });

        day['daysB'] = groupedDataB;

        if(index == tempPlaydays.length - 1) {


            loadPlaydays(tempPlaydays);
            changePlayday(tempPlaydays[3]);

            loadingChange(false);
        }
    });    

});

</script>