<template>
    <section class="h-[40vh] rounded-b-2xl border-b-2 border-solid border-white/10 text-white overflow-hidden mask flex items-end p-4">
        <div class="flex flex-col lg:container lg:mx-auto">
            <h3>
                Best Of
            </h3>
            <h1>
                Villa Paola - Mundialito Footballite
            </h1>
        </div>
    </section>

    <main>
        <button
            @click="addGame" 
            class="bg-white py-2 px-6 rounded-md font-bold text-primary">
            AGGIUNGI TEAM
        </button>
    </main>
</template>

<script setup>

    const partita = {
        "time": "10.30",
                            "field": "Paquito",
                            "homeTeam": "Burkina Faso",
                            "awayTeam": "Albania",
                            "homeFlag": "bf.webp",
                            "awayFlag": "al.webp",
                            "status": 0,
                            "homeScore": 0,
                            "awayScore": 0,
        "giorno": "Sabato 11 Novembre"
    };

    const ref = "Giornate/5a Giornata/partiteB";

    const addGame = async () => {
        const response = await fetch("http://localhost:3000/api/add?col=" + ref, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(partita),
            });

            const result = await response.json();

            console.log(result);
            }
</script>