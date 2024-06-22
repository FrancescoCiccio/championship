<template>
    <section class="h-[40vh] rounded-b-2xl border-b-2 border-solid border-white/10 text-white overflow-hidden mask flex items-end p-4">
        <div class="flex flex-col lg:container lg:mx-auto">
            <h3>
                ADELFIA PADEL TOUR
            </h3>
            <h1>
                APT - Footballite
            </h1>
        </div>
    </section>

    <RowScroll />
    

    <div class="my-4 flex px-4 lg:px-0 container mx-auto">
        <HeadlessMenu as="div" class="relative">
            <div>
                <HeadlessMenuButton
                  class="btn flex gap-4"
                >
                    {{ currentPlayday?.nome }}
                    
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
                    <HeadlessMenuItem v-for="doc in documents" :key="doc.id + '-tabs'">
                        <button
                            :class="[
                           'text-gray-900',
                            'group flex flex-col w-full items-start rounded-md px-2 py-2 text-sm',
                            ]"
                            @click="changePlayday(doc)"
                        >
                            {{ doc.nome }}
                        </button>
                    </HeadlessMenuItem>
                </HeadlessMenuItems>
            </transition>
        </HeadlessMenu> 
    </div>

    <div class="my-4 px-4 container mx-auto  w-full gap-y-4" v-if="currentPlayday != null">

        <div class="cardgame my-2 lg:my-8 self-center max-w-2xl mx-auto flex flex-col gap-y-4">
            <NewCardGame v-for="game in currentPlayday.partite" :key="game.data.home + game.data.away" :match="game"></NewCardGame>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'
import { collection, getDocs, doc } from 'firebase/firestore'


const { $firestore } = useNuxtApp()

const documents = ref([])

var currentPlayday = ref(null);

const changePlayday = (playday) => {
    currentPlayday.value = playday
}

onMounted(async () => {
  try {
    const mainCollection = collection($firestore, 'partite')
    const mainDocsSnapshot = await getDocs(mainCollection)
    
    const allDocuments = await Promise.all(mainDocsSnapshot.docs.map(async (docSnapshot) => {
      const data = docSnapshot.data()
      const partiteCollection = collection($firestore, `partite/${docSnapshot.id}/partite`)
      const partiteSnapshot = await getDocs(partiteCollection)
      
      const partite = partiteSnapshot.docs.map((partitaDoc) => ({
        id: partitaDoc.id,
        data: partitaDoc.data()
      })).sort((a, b) => a.data.name.localeCompare(b.data.name)) 
      
      return {
        id: docSnapshot.id,
        nome: data.nome,
        priority: data.priority,
        partite
      }
    }))
    

    // Ordina i documenti principali per priority in ordine discendente
    documents.value = allDocuments.sort((a, b) => b.priority - a.priority)
    currentPlayday.value = documents.value[0]
  } catch (error) {
    console.error("Error getting documents: ", error)
  }
})
</script>



