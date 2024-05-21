<template>
    <div>
      <h1>Inserimento Partita</h1>
      <p>La partita è stata inserita correttamente.</p>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useNuxtApp } from '#app'
  import { collection, addDoc } from 'firebase/firestore'
  
  // Recupera l'istanza di Firestore da Nuxt
  const { $firestore } = useNuxtApp()
  
  // Funzione per inserire un nuovo documento nella sottocollezione 'partite'
  const insertMatch = async () => {
    const newMatch = {
      when: "?",
      field: "?",
      played: false,
      name: "QUARTO-4",
      home_s: 0,
      home: "Schirone - Lamanna",
      away_s: 0,
      away: "Da sorteggiare"
    }
  
    try {
      /* const partiteCollection = collection($firestore, 'partite/quarti/partite')
      await addDoc(partiteCollection, newMatch)
      console.log('Partita inserita con successo') */
    } catch (error) {
      console.error('Errore durante l\'inserimento della partita: ', error)
    }
  }
  
  // Esegui la funzione al caricamento della pagina
  onMounted(insertMatch)
  </script>
  