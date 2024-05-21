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
      name: "T3-8",
      home_s: 0,
      home: "Sasanelli - Tripolini",
      away_s: 0,
      away: "Vincente T2-8"
    }
  
    try {
     /*  const partiteCollection = collection($firestore, 'partite/turno3/partite')
      await addDoc(partiteCollection, newMatch)
      console.log('Partita inserita con successo') */
    } catch (error) {
      console.error('Errore durante l\'inserimento della partita: ', error)
    }
  }
  
  // Esegui la funzione al caricamento della pagina
  onMounted(insertMatch)
  </script>
  