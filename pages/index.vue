<template>



    <section class="h-[40vh] rounded-b-2xl border-b-2 border-solid border-white/10 text-white overflow-hidden mask flex items-end p-4">
        <div class="flex flex-col container mx-auto">
            <h3>
                Footballite - Fase finale
            </h3>
            <h1>
                Villa Paola - Mundialito
            </h1>
        </div>
    </section>

    <RowScroll />
    



    <HeadlessTabGroup>
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
                    Gold
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
                    Silver
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
                    Bronze
                </button>
            </HeadlessTab>
        </HeadlessTabList>

        <HeadlessTabPanels class="mt-2">
            <HeadlessTabPanel class="my-4 px-4 container mx-auto lg:px-0 lg:grid lg:grid-cols-3 lg:gap-4">
                <div class="cardgame my-2 lg:my-8 lg:col-span-1">
                    <div class="p-4 bg-secondary text-white rounded-tr-xl max-w-[80%]">
                        QUARTI DI FINALE
                    </div>
                    <div class="p-2 border-2 border-secondary rounded-xl rounded-tl-none flex flex-col gap-2">
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    Played
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Galan
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/it.webp'" alt="">
                                    Italia
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/br.webp'" alt="">
                                    Brasile
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl p-1 bg-primary rounded-sm items-center">
                                <div>
                                    2
                                </div>
                                <div>
                                    0
                                </div>
                            </div>
                        </div>
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    13 Gen. 10.00
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Galan
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/ar.webp'" alt="">
                                    Argentina
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/dk.webp'" alt="">
                                    Danimarca
                                </div>
                            </div>
                        </div>
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    10 Gen. 21.30
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Galan
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/uz.webp'" alt="">
                                    Uzbekistan
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/ve.webp'" alt="">
                                    Venezuela
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl p-1 bg-primary rounded-sm items-center">
                                <div>
                                    2
                                </div>
                                <div>
                                    0
                                </div>
                            </div>
                        </div>
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    13 Gen. 17.00
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Galan
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/eg.webp'" alt="">
                                    Egitto
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/gl.webp'" alt="">
                                    Groenlandia
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardgame my-2 lg:my-8 lg:col-span-1">
                    <div class="p-4 bg-secondary text-white rounded-tr-xl max-w-[80%]">
                        SEMIFINALI
                    </div>
                    <div class="p-2 border-2 border-secondary rounded-xl rounded-tl-none flex flex-col gap-2">
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    ???
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    ???
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/it.webp'" alt="">
                                    Italia
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    Arg o Dan
                                </div>
                            </div>
                        </div>
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    ???
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    ???
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/uz.webp'" alt="">
                                    Uzbekistan
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    Eg o Gro
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardgame my-2 lg:my-8 lg:col-span-1">
                    <div class="p-4 bg-secondary text-white rounded-tr-xl max-w-[80%]">
                        FINALI
                    </div>
                    <div class="p-2 border-2 border-secondary rounded-xl rounded-tl-none flex flex-col gap-2">
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    ???
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Galan
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    1o/2o Posto
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    1o/2o Posto
                                </div>
                            </div>
                        </div>
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    ???
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Galan
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    3o/4o Posto
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    3o/4o Posto
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HeadlessTabPanel>

            <HeadlessTabPanel class="my-4 px-4 container mx-auto lg:px-0 lg:grid lg:grid-cols-3 lg:gap-4">
                <div class="cardgame my-2 lg:my-8 lg:col-span-1">
                    <div class="p-4 bg-secondary text-white rounded-tr-xl max-w-[80%]">
                        QUARTI DI FINALE
                    </div>
                    <div class="p-2 border-2 border-secondary rounded-xl rounded-tl-none flex flex-col gap-2">
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    14 Gen. 10.30
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Paquito
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/jp.webp'" alt="">
                                    Giappone
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/se.webp'" alt="">
                                    Senegal
                                </div>
                            </div>
                        </div>
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    14 Gen. 12.00
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Paquito
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/kw.webp'" alt="">
                                    Kuwait
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/pg.webp'" alt="">
                                    P. Nuova Guinea
                                </div>
                            </div>
                        </div>
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    12 Gen. 20.00
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Galan
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/mx.webp'" alt="">
                                    Messico
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/mo.webp'" alt="">
                                    Mongolia
                                </div>
                            </div>
                        </div>
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    14 Gen. 17.00
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Galan
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/au.webp'" alt="">
                                    Australia
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/cr.webp'" alt="">
                                    Costa Rica
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardgame my-2 lg:my-8 lg:col-span-1">
                    <div class="p-4 bg-secondary text-white rounded-tr-xl max-w-[80%]">
                        SEMIFINALI
                    </div>
                    <div class="p-2 border-2 border-secondary rounded-xl rounded-tl-none flex flex-col gap-2">
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    ???
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    ???
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    Gia o Sen
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    Kuw o Papua
                                </div>
                            </div>
                        </div>
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    ???
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    ???
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    Mex o Mong
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    Aust. o Costa
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardgame my-2 lg:my-8 lg:col-span-1">
                    <div class="p-4 bg-secondary text-white rounded-tr-xl max-w-[80%]">
                        FINALI
                    </div>
                    <div class="p-2 border-2 border-secondary rounded-xl rounded-tl-none flex flex-col gap-2">
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    ???
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Galan
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    1o/2o Posto
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    1o/2o Posto
                                </div>
                            </div>
                        </div>
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    ???
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Galan
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    3o/4o Posto
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    3o/4o Posto
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HeadlessTabPanel>

            <HeadlessTabPanel class="my-4 px-4 container mx-auto lg:px-0 lg:grid lg:grid-cols-3 lg:gap-4">
                <div class="cardgame my-2 lg:my-8 lg:col-span-1">
                    <div class="p-4 bg-secondary text-white rounded-tr-xl max-w-[80%]">
                        QUARTI DI FINALE
                    </div>
                    <div class="p-2 border-2 border-secondary rounded-xl rounded-tl-none flex flex-col gap-2">
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    12 Gen. 21.30
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Paquito
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/ee.webp'" alt="">
                                    Estonia
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/al.webp'" alt="">
                                    Albania
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl p-1 bg-primary rounded-sm items-center">
                                <div>
                                    1
                                </div>
                                <div>
                                    2
                                </div>
                            </div>
                        </div>
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    13 Gen. 12.00
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Galan
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/es.webp'" alt="">
                                    Spagna
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/ad.webp'" alt="">
                                    Andorra
                                </div>
                            </div>
                        </div>
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    Played
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Galan
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/tj.webp'" alt="">
                                    Tagikistan
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/nz.webp'" alt="">
                                    New Zeland
                                </div>
                            </div>

                            <div class="flex flex-col text-2xl lg:text-3xl p-1 bg-primary rounded-sm items-center">
                                <div>
                                    2
                                </div>
                                <div>
                                    0
                                </div>
                            </div>
                        </div>
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    14 Gen. 18.30
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Galan
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/fo.webp'" alt="">
                                    Isole faroe
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/bf.webp'" alt="">
                                    Burkina Faso
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardgame my-2 lg:my-8 lg:col-span-1">
                    <div class="p-4 bg-secondary text-white rounded-tr-xl max-w-[80%]">
                        SEMIFINALI
                    </div>
                    <div class="p-2 border-2 border-secondary rounded-xl rounded-tl-none flex flex-col gap-2">
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    ???
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    ???
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/al.webp'" alt="">
                                    Albania
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    Spa o And
                                </div>
                            </div>
                        </div>
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    ???
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    ???
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/tj.webp'" alt="">
                                    Tagikistan
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    Isole o Burk
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardgame my-2 lg:my-8 lg:col-span-1">
                    <div class="p-4 bg-secondary text-white rounded-tr-xl max-w-[80%]">
                        FINALI
                    </div>
                    <div class="p-2 border-2 border-secondary rounded-xl rounded-tl-none flex flex-col gap-2">
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    ???
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Galan
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    1o/2o Posto
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    1o/2o Posto
                                </div>
                            </div>
                        </div>
                        <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                            <div class="flex flex-col">
                                <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                                    ???
                                </div>
                                <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                                    Galan
                                </div>
                            </div>
                            <div class="flex flex-col text-2xl lg:text-3xl">
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    3o/4o Posto
                                </div>
                                <div class="flex items-center gap-2">
                                    <img class="w-4 h-4 rounded-full object-cover" :src="'/images/flags/.webp'" alt="">
                                    3o/4o Posto
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HeadlessTabPanel>
        </HeadlessTabPanels>
    </HeadlessTabGroup>

    

</template>

<script setup>

import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from "gsap";
import { playdays} from "@/public/json/playday.json";


const main = ref();
let ctx;

const changePlayday = (playday) => {
    currentPlayday.value = playday
}


var currentPlayday = ref(playdays[10]);

onMounted(() => {
  ctx = gsap.context((self) => {

    gsap.from('h3', {
        opacity: 0,
        duration: 4
    })
    
  }, main.value);
});

onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
})
</script>