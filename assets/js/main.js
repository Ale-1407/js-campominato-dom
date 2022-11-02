/*
Consegna
Il computer deve generare 16 numeri casuali nello stesso range della 
difficoltà prescelta: le bombe. 
Attenzione: nella stessa cella può essere posizionata al massimo una bomba,
perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista
dei numeri generati - abbiamo calpestato una bomba - la cella si colora di 
rosso e la partita termina. 
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare 
a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge
il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato 
tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il 
numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/



let griglia = document.getElementById('griglia');
let button = document.getElementById('button');

//creo array bombe
let bombe = [];

function creazioneArray(){
    
    for(let i = 0; i <= 16; i++){
        //genero 16 numeri casuali
        let numBombe = Math.round(Math.random() * 16);
        
        if(bombe.includes(numBombe)){
            i--;
        }else{
            bombe.push(numBombe);
        }
    }
    console.log(bombe);
}


//creo quadrati dentro la griglia

function creazionequadrati(){
    let div = document.createElement('div');
    div.classList.add('quadrato');
    return div; // dà questo risultato ==> <div class="quadrato"></div>
}

button.addEventListener('click', function(){

   //100 quadrati
   for( let i = 1; i <= 100; i++ ) {
    let elementocorrente = creazionequadrati();

    elementocorrente.addEventListener('click', function() {
        this.classList.toggle('active');
    })

    let frase = document.getElementById('frase');
    frase.classList.add('display');
    

    elementocorrente.innerHTML = i;
    elementocorrente.classList.add('d-flex', 'align-items-center', 'justify-content-center');

    griglia.append(elementocorrente);
   }
})

