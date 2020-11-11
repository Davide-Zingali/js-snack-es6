// //jsnack 1
// //Partendo da un array semplice tipo:

var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

var arrayNumConfronto = [];

// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
var inputUno = parseInt(prompt('Inserisci un numero da 0 a 5'));

while (arrayNumConfronto.length < 2) {
    var inputDue = parseInt(prompt('Inserisci un numero da 0 a 5'));
    if (inputUno === inputDue) {
        alert('Non puoi inserire numeri uguali')
    } else {
        arrayNumConfronto.push(inputUno);
        arrayNumConfronto.push(inputDue);
    }
}

console.log(`Indici inseriti: ${arrayNumConfronto}`);

// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente
var arrayNuovo = [];

for (let i = arrayNumConfronto[0]; i <= arrayNumConfronto[1]; i++) {
    arrayNuovo.push(myArray[i])
}
console.log(`Nomi selezionati: ${arrayNuovo}`);