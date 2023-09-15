<template>
    <h2>
        Pagina about
    </h2>
</template>

<script setup>

definePageMeta(
    {
        pageTransition: {
            onEnter: (el, done) => {
                console.log('ciao');
                done();
            }
        }
    }
)

</script>