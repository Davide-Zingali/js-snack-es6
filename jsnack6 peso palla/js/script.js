// 1A: Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10
// 1B: Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

var pesoPalla = parseInt(prompt('Inserisci il peso della palla'));

var palla = {
    nome: 'palla',
    peso: 10
}

console.log('Peso prima prompt: ', palla);

palla['peso'] = pesoPalla;

console.log('Peso dopo prompt: ', palla);