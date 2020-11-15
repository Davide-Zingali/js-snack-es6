// //jsnack 2
// dato questo array di obj iniziale:
// Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

// array di obj iniziale
var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

// stampo in console
console.log(`Array originale:
`, arrayObj);

// funzione che genera lettera random
var funzioneRandom = () => {
    var alfabeto = ('A B C D E F G H I J K L M N O P Q R S T U V W X Y Z').split(' ');
    var letteraRandom = alfabeto[Math.floor(Math.random() * alfabeto.length)];

    return letteraRandom
};

// copia tramite map di array originale
const newArrayObj = arrayObj.map( (element) => (
    {    
    ...element,
    position: funzioneRandom()
    }
));

// stampo in console
console.log(`
Array non originale con proprieta' aggiunta:
`, newArrayObj);