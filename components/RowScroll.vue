<template>
    <div class="overflow-hidden">
        <div class="py-4 whitespace-nowrap flex w-full riga">
            <div class="text-2xl lg:text-5xl xl:text-6xl riga-item text-secondary mx-2">
                Footballite
            </div>
    
            <div class="text-2xl lg:text-5xl xl:text-6xl riga-item">
                - Play your game -
            </div>
    
            <div class="text-2xl lg:text-5xl xl:text-6xl riga-item text-secondary mx-2">
                Footballite
            </div>
    
            <div class="text-2xl lg:text-5xl xl:text-6xl riga-item">
                - Play your game -
            </div>
    
            <div class="text-2xl lg:text-5xl xl:text-6xl riga-item text-secondary mx-2">
                Footballite
            </div>
    
            <div class="text-2xl lg:text-5xl xl:text-6xl riga-item">
                - Play your game -
            </div>
    
            <div class="text-2xl lg:text-5xl xl:text-6xl  riga-item text-secondary mx-2">
                Footballite
            </div>
    
            <div class="text-2xl lg:text-5xl xl:text-6xl  riga-item">
                - Play your game -
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
    
    let rows = document.querySelectorAll(".riga");


    rows.forEach((single, i) => {

        let row_width = single.getBoundingClientRect().width;
        let row_item_width = single.children[0].getBoundingClientRect().width;
        let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
        let x_translation = initial_offset * -1;

        gsap.set(single, {
            xPercent: `${initial_offset}`
        });

        let duration = 5 * (i + 1);

        var tl = gsap.timeline();

        tl.to(single, {
            ease: "none",
            duration: duration,
            xPercent: 0,
            repeat: -1
        });
    });

    
  }, main.value);
});

onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
})
</script>

<style scoped>

</style>