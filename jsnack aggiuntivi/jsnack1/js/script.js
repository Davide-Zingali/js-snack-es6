// //jsnack 1
// //Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

// //jsnack 1
// //Partendo da un array semplice tipo:
var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// inpunt tramite prompt
do {
    var inputMin = parseInt(prompt('Inserisci un numero tra 0 e 5 per selezionare gli utenti'));
    var inputMax = parseInt(prompt('Inserisci un numero tra ' + inputMin +' e 5 per selezionare gli utenti'));
    if (inputMin > inputMax) {
        alert("Il primo numero deve essere minore del secondo numero")
    };
} while (inputMin > inputMax);

if (inputMin > 5 || inputMax > 5) {
    alert('Non puoi inserire numeri superiori a 5');
    do {
        var inputMin = parseInt(prompt('Inserisci un numero tra 0 e 5 per selezionare gli utenti'));
        var inputMax = parseInt(prompt('Inserisci un numero tra ' + inputMin +' e 5 per selezionare gli utenti'));
    } while (inputMin > inputMax);
};

var newArray = myArray.filter((element, index) => (inputMin <= index && inputMax >= index));

console.log(newArray);
