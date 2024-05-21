import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {
        apiKey: "AIzaSyCTA3ctu5s_cGuisJ37lGvtOaAJcMtJuiU",
        authDomain: "atp-nuccio.firebaseapp.com",
        projectId: "atp-nuccio",
        storageBucket: "atp-nuccio.appspot.com",
        messagingSenderId: "253568518941",
        appId: "1:253568518941:web:cb34acbeed28af1891eff4"
    }

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const firestore = getFirestore(app)
    const storage = getStorage(app)

    nuxtApp.provide('firebase', app)
    nuxtApp.provide('auth', auth)
    nuxtApp.provide('firestore', firestore)
    nuxtApp.provide('storage', storage)
})
