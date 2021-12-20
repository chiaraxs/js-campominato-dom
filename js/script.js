// STEP ONE -> repo js-campominato-grid
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// STEP TWO -> repo attuale
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso
// e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


// 1. fisso selettori tra js e dom -> 3 buttons + container-box da replicare con ciclo for
const easyLevelButton = document.getElementById("easy-button");
const mediumLevelButton = document.getElementById("medium-button");
const hardLevelButton = document.getElementById("hard-button");
const boxes = document.querySelector('.container-box');


// 2. creo array vuoto per bombs da inserire randomicamente nella griglia da far calcolare a while
// creo costante fissa a 16 per numero massimo bombe -> maxBombs
const bombs = [];
const maxBombs = 16;

// 3. creo funzione che generi numeri random/bombe (non replicabili) e mi restituisca il risultato nell'array vuoto bombs
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}


// 4. CICLO WHILE X CREAZIONE 16 BOMBE RANDOMICHE IN GRIGLIA PER CIASCUN LVL//
// (il valore MaxValue mi permette di preimpostare un valore prestabilito a seconda del lvl - 100, 81, 49)
// il lenght non aumenta mai fin quando non si verifica la condizione dell'if ->
// -> finchè la lunghezza l'array delle bombe è < 16
// genera un num casuale randomico tra uno e maxValue.
// se il num NON è incluso nell'array delle bombe 
// --> allora inserisci la bomba

function generateBombs (MaxValue){
    bombs = []; // resetto le bombe ad ogni nuovo gioco
    while (bombs.length < maxBombs) {
    const randomNumber = getRandom(1, MaxValue);
        if (!bombs.includes(randomNumber)) {
            bombs.push(randomNumber)
        }
    }
}


// 5. creo funzione per creare e appendere sia i boxes che i numeri al loro interno
function createBoxGrid (container, boxNumbers) {
    let square = document.createElement('div');
    square.className ='box';
    square.innerHTML = boxNumbers;
    container.append(square);
}

// creo funzione evento al click -> change color on click
// change bg in red quando prendo la bomba
function changeColour () {
    if (bombs.includes(randomNumber)){
        square.addEventListener('click', function(){
            this.classList.add('red'); 
            this.classList.remove('blue');    
        })
    }
    // change bg in blue quando non prendo la bomba
    if (!bombs.includes(randomNumber)) {
        square.addEventListener('click', function(){
            this.classList.add('blue'); 
            this.classList.remove('red');
        })
    }
}



// CICLO CREAZIONE GRIGLIE //
// 6. creo ciclo for per replicare boxes all'evento click in base al lvl scelto

// livello simple
easyLevelButton.addEventListener('click', function (){
    // setto la pulizia della griglia ad ogni click
    boxes.innerHTML = '';
    // genero 100 boxes
    for (let i = 1; i <= 100; i++) {
        createBoxGrid(boxes, i); 

        // aggiungo classe widht dal css x lvl simple
        boxes.classList.add('width_simple');
        // rimuovo classi widht dal css x lvl medium/hard
        boxes.classList.remove('width_medium', 'width_hard');
    }
});

// livello medium
mediumLevelButton.addEventListener('click', function (){
    // setto la pulizia della griglia ad ogni click
    boxes.innerHTML = '';
    // genero 81 boxes
    for (let i = 1; i <= 81; i++) {
        createBoxGrid(boxes, i); 

        // aggiungo classe widht dal css x lvl medium
        boxes.classList.add('width_medium');
        // rimuovo classi widht dal css x lvl simple/hard
        boxes.classList.remove('width_simple', 'width_hard');
    }
});

// livello hard
hardLevelButton.addEventListener('click', function (){
    // setto la pulizia della griglia ad ogni click
    boxes.innerHTML = '';
    // genero 49 boxes
    for (let i = 1; i <= 49; i++) {
        createBoxGrid(boxes, i); 

        // aggiungo classe widht dal css x lvl hard
        boxes.classList.add('width_hard');
        // rimuovo classi widht dal css x lvl simple/medium
        boxes.classList.remove('width_simple', 'width_medium');
    }
});
