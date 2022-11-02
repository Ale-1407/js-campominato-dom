

const griglia = document.getElementById('griglia');
const button = document.getElementById('button');

//creo quadrati dentro la griglia

function creazionequadrati(){
    const div = document.createElement('div');
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

