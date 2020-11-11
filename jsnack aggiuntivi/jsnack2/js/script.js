// //jsnack 2
// dato questo array di obj iniziale:
var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];
console.log('Array Originale: ', arrayObj);

//Creiamo una copia dell’array di partenza 
var arrayObjCopia = [
    {
        name: 'Poppy', 
        type: 'tshirt', 
        color: 'red'
    },
    {
        name: 'Jumping',
        type: 'occhiali',
        color: 'blue'
    },
    {
        name: 'CrissCross',
        type: 'scarpe',
        color: 'black'
    },
    {
        name: 'Jenny',
        type: 'borsa',
        color: 'pink'
    }
];

// e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array) una nuova proprietà position che contiene una lettera casuale.
var arrayNuovo = [];

for (let i = 0; i < arrayObjCopia.length; i++) {
    // estrapolo l'oggeto ed attribuisco 
    var singoloObj = arrayObjCopia[i];

    // creo numero random che associo ad una lettera dell'array
    var arrayLettera = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'T', 'Z'];
    var randomNumero = Math.floor(Math.random() * arrayLettera.length);
    var randomLettera = arrayLettera[randomNumero];

    // aggiungo la proprieta' all'oggetto singolo e pusho l'oggetto all'array
    singoloObj.position = randomLettera;
    arrayNuovo.push(singoloObj);
}

console.log(' ');
console.log("Array con proprieta' aggiunta:");

for (key in arrayNuovo) {
    console.log(arrayNuovo[key]);
}