<template>
    <header class="px-4 w-full fixed flex top-0 left-0 py-4 z-20 justify-between items-center bg-primary">
            <div class="btn bg-primary" @click="toggleMenu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8H18M6 12H18M6 16H18" stroke="#41BFC9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <NuxtLink to="/">
                <img src="/images/footlogo.png" width="200" alt="">
            </NuxtLink>
        </header>

        <nav ref="navigation" role="main-navigation" class="fixed top-0 left-0 z-50 w-full h-screen bg-[#060210] px-10 origin-top scale-y-0">
            <ul class="flex flex-col mt-28 gap-4">
                <li>
                    <NuxtLink class="text-5xl" to="/" @click="toggleMenu">Home</NuxtLink>
                </li>

                <li>
                    <NuxtLink class="text-5xl" to="/rank" @click="toggleMenu">Rank Footballite</NuxtLink>
                </li>
            </ul>

            <div class="absolute right-8 top-8" @click="toggleMenu">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.1667 13.8883L38.1117 10.8333L26 22.945L13.8884 10.8333L10.8334 13.8883L22.945 26L10.8334 38.1117L13.8884 41.1667L26 29.055L38.1117 41.1667L41.1667 38.1117L29.055 26L41.1667 13.8883Z" fill="#41BFC9"/>
                </svg>
            </div>
        </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from "gsap";


const main = ref();
let ctx;
let menuAnimation;
let navigation = ref();


const toggleMenu = () => {
    menuAnimation.reversed(!menuAnimation.reversed());
}

onMounted(() => {

    let li = navigation.value.querySelectorAll('li');


    menuAnimation = gsap
        .timeline()
        .to(navigation.value, {
            scaleY: 1
        })
        .from(li, {
            opacity: 0,
            y: -50,
            x: -50,
            stagger: .2
        }, "<")
        .reverse();
});
</script>

<style scoped>

</style>