// CONSEGNA:
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// STEP”:
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti

var arraySquadre = [
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Parma',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    }
]

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
var randomPunti;
var randomFalli;

// aggiunta arrow function
var random = (num1) => Math.floor(Math.random() * num1 + 1);

// ciclo che richiama la funzione
for (let i = 0; i < arraySquadre.length; i++) {
    arraySquadre[i].punti = random(8);
    arraySquadre[i].falli = random(40);
}

// stampa
for (let key in arraySquadre) {
    console.log(arraySquadre[key]);
}