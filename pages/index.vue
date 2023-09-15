<template>
    <section class="h-[40vh] rounded-b-2xl border-b-2 border-solid border-white/10 text-white overflow-hidden mask flex items-end p-4">
        <div class="flex flex-col">
            <h3>
                Torneo
            </h3>
            <h1>
                Footballite
            </h1>
        </div>
    </section>

    <RowScroll />
    
    <div class="px-4 flex">
        <div class="btn flex gap-4">
            <h3>
                Playday1
            </h3>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="#41BFC9"/>
            </svg>
        </div>
    </div>

    <div class="my-4 px-4">

        <div class="cardgame">
            <div class="p-4 bg-secondary text-white rounded-tr-xl max-w-[60%]">
                Venerdì 9 Novembre
            </div>
            <div class="p-2 border-2 border-secondary rounded-xl rounded-tl-none flex flex-col gap-2">
                <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                    <div class="flex flex-col">
                        <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                            20:00
                        </div>
                        <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                            paquito
                        </div>
                    </div>
                    <div class="flex flex-col text-2xl">
                        <div>
                            Albania
                        </div>
                        <div>
                            Messico
                        </div>
                    </div>
                </div>

                <div class="p-2 rounded-lg bg-[#277379] flex items-center gap-2">
                    <div class="flex flex-col">
                        <div class="flex flex-col items-center p-2 px-4 bg-primary rounded-md relative z-10">
                            20:00
                        </div>
                        <div class="flex flex-col p-2 px-4 bg-[#B5B2BF] rounded-md -translate-y-1 relative">
                            lebron
                        </div>
                    </div>
                    <div class="flex flex-col text-2xl">
                        <div>
                            Albania
                        </div>
                        <div>
                            Messico
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script setup>

import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from "gsap";

const main = ref();
let ctx;

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